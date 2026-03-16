import { logError, logInfo, logWarn } from '../../config/loggerFunctions.js';
import { deleteSubscriptionInDb, updateSubscriptionInDb, updateSubscriptionFromStripeInDb } from '../../models/subscriptionModel.js';
import { stripeInstance } from '../../config/stripe.js';
import { posthogUserSubscriptionCreated, posthogUserSubscriptionEnded, posthogUserSubscriptionTrialWillEnd, posthogUserSubscriptionInvoiceUpcoming } from '../../models/posthogModel.js';
import { initializeMongoDB } from '../../db/mongodb.js';

const getUserIdFromSubscription = async (subscriptionId, customerId) => {
  try {
    const collections = await initializeMongoDB();
    const companyCollection = collections.company;

    const companyData = await companyCollection.aggregate([
      { $match: { stripeId: customerId } },
      { $project: { _id: 1 } }
    ]).toArray();

    if (!companyData || companyData.length === 0) {
      return { userId: null, companyId: null };
    }

    const companyId = companyData[0]._id.toString();

    const userCollection = collections.user;
    const userData = await userCollection.aggregate([
      { $match: { companyId: companyId, role: 'customer' } },
      { $project: { _id: 1 } }
    ]).toArray();

    const userId = userData && userData.length > 0 ? userData[0]._id.toString() : null;

    return { userId, companyId };
  } catch (error) {
    logError('Error fetching userId from subscription', error);
    return { userId: null, companyId: null };
  }
};

export const stripeEventHandler = async (req, res) => {
  try {
    let event;
    let checkoutSessionData;

    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    try {
      event = stripeInstance.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      logError('error in stripe webhook', err); // Log the error to the console
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // console.log('Stripe event received:', event.type); //* Use for debugging incoming events

    switch (event.type) {
      case 'checkout.session.completed':
        // Sent when a customer completes a checkout session
        // Create the subscription in DB
        if (event.data.object.payment_status === 'paid') {
          checkoutSessionData = {
            companyId: event.data.object.client_reference_id,
            userId: event.data.object.metadata.userId,
            subscriptionId: event.data.object.subscription,
            planName: event.data.object.metadata.planName,
            planBillingCycle: event.data.object.metadata.planBillingCycle,
          };

          updateSubscriptionInDb(checkoutSessionData);
          posthogUserSubscriptionCreated(checkoutSessionData);
        }
        return;


      case 'customer.subscription.updated':
        // Sent when a subscription is updated (trial ends, plan changes, renewal occurs)
        try {
          await updateSubscriptionFromStripeInDb(
            event.data.object.id,
            event.data.object
          );
        } catch (error) {
          logError('Error updating subscription from Stripe webhook', error);
        }
        break;


      case 'customer.subscription.trial_will_end':
        // Sent 3 days before the trial ends
        try {
          const subscription = event.data.object;
          const trialEnd = new Date(subscription.trial_end * 1000);
          const customerId = subscription.customer;
          const subscriptionId = subscription.id;

          const { userId, companyId } = await getUserIdFromSubscription(subscriptionId, customerId);

          const trialWillEndData = {
            subscriptionId: subscriptionId,
            customerId: customerId,
            trialEnd: trialEnd,
            userId: userId,
            companyId: companyId,
          };

          logInfo('Trial will end soon', {
            subscriptionId: subscriptionId,
            customerId: customerId,
            trialEnd: trialEnd,
            userId: userId,
            companyId: companyId,
          });

          posthogUserSubscriptionTrialWillEnd(trialWillEndData);

          // TODO -- send an email to the user about trial ending in 3 days
        } catch (error) {
          logError('Error processing customer.subscription.trial_will_end webhook', error);
        }
        break;


      case 'invoice.upcoming':
        // Sent before payment is attempted
        try {
          const invoice = event.data.object;
          const subscriptionId = invoice.subscription;
          const customerId = invoice.customer;
          const isTrial = invoice.subscription_details?.metadata?.trial === 'true' || false;

          let trialEnd = null;
          let subscriptionStatus = null;

          if (subscriptionId) {
            try {
              const subscription = await stripeInstance.subscriptions.retrieve(subscriptionId);
              trialEnd = subscription.trial_end ? new Date(subscription.trial_end * 1000) : null;
              subscriptionStatus = subscription.status;
            } catch (subError) {
              logError('Error fetching subscription details in invoice.upcoming webhook', subError);
            }
          }

          const { userId, companyId } = await getUserIdFromSubscription(subscriptionId, customerId);

          const invoiceUpcomingData = {
            subscriptionId: subscriptionId,
            customerId: customerId,
            invoiceId: invoice.id,
            amount: invoice.amount_due,
            currency: invoice.currency,
            nextPaymentAttempt: invoice.next_payment_attempt ? new Date(invoice.next_payment_attempt * 1000) : null,
            isTrial: subscriptionStatus === 'trialing',
            userId: userId,
            companyId: companyId,
          };

          logInfo('Invoice upcoming', {
            invoiceId: invoice.id,
            subscriptionId: subscriptionId,
            customerId: customerId,
            amount: invoice.amount_due,
            currency: invoice.currency,
            nextPaymentAttempt: invoice.next_payment_attempt ? new Date(invoice.next_payment_attempt * 1000) : null,
            isTrial: subscriptionStatus === 'trialing',
            trialEnd: trialEnd,
            userId: userId,
            companyId: companyId,
          });

          posthogUserSubscriptionInvoiceUpcoming(invoiceUpcomingData);
        } catch (error) {
          logError('Error processing invoice.upcoming webhook', error);
        }
        break;


      case 'invoice.payment_succeeded':
        // Sent when a payment for an invoice succeeds
        try {
          const subscriptionId = event.data.object.subscription;
          if (subscriptionId) {
            const subscription = await stripeInstance.subscriptions.retrieve(subscriptionId);
            await updateSubscriptionFromStripeInDb(subscriptionId, subscription);

            logInfo('Invoice payment succeeded', {
              invoiceId: event.data.object.id,
              subscriptionId: subscriptionId,
              customerId: event.data.object.customer,
              amount: event.data.object.amount_paid,
              currency: event.data.object.currency,
            });
          }
        } catch (error) {
          logError('Error processing invoice.payment_succeeded webhook', error);
        }
        break;


      case 'invoice.payment_failed':
        // Sent when a payment for an invoice fails
        try {
          const paymentFailedInfo = {
            invoiceId: event.data.object.id,
            subscriptionId: event.data.object.subscription,
            customerId: event.data.object.customer,
            amount: event.data.object.amount_due,
            currency: event.data.object.currency,
            nextPaymentAttempt: event.data.object.next_payment_attempt,
            paymentIntentId: event.data.object.payment_intent,
            reason: event.data.object.last_payment_error?.reason || 'unknown',
          };

          logWarn('Invoice payment failed', new Error(event.data.object.last_payment_error?.message || 'Payment failed'), paymentFailedInfo);
        } catch (error) {
          logError('Error processing invoice.payment_failed webhook', error);
        }
        break;


      case 'customer.subscription.deleted':
        // Sent when a subscription ends.
        // Useful for notifying users about the ending of their subscription.

        const subscriptionDeletionData = {
          subscriptionId: event.data.object.id,
          customerId: event.data.object.customer,
        };
        deleteSubscriptionInDb(subscriptionDeletionData);
        posthogUserSubscriptionEnded(event.data.object);

        // TODO -- send an email to the user about the subscription end
        break;

      // ... handle other event types
      default:
      // console.log('Unhandled event type:', event.type); //* Activate for debugging
        // logError('Unhandled event type in Stripe webhook paymentCompleted.', event.type); //* Activate for debugging
    }

    res.status(200).send();
  } catch (error) {
    logError('error in stripeEventHandler', error);
    res.status(500).send('Internal Server Error');
  }
};

//* DOCS --> https://docs.stripe.com/webhooks
