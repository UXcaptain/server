import { logError } from '../../config/loggerFunctions.mjs';
import { posthogUserSubscriptionCreated, posthogUserSubscriptionEnded } from '../../models/posthogModel.mjs';
import { deleteSubscriptionInDb, storeSubscriptionInDb } from '../../models/subscriptionModel.mjs';
import { stripeInstance } from '../../config/stripe.mjs';

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

        checkoutSessionData = {
          userId: event.data.object.client_reference_id,
          subscriptionId: event.data.object.subscription,
        };

        storeSubscriptionInDb(checkoutSessionData);

        posthogUserSubscriptionCreated(checkoutSessionData);

        // TODO -- send an email to the user about the subscription update
        break;

        /* case 'checkout.session.expired': //* Will not be used - Users cant just create a new session
      Sent when a checkout session expires. - 24 hours after creation
      This indicates that the customer did not complete the payment in time.
      Useful for notifying users about the expired session.
        break; */

        /* case 'customer.subscription.created': //* Unused
        // Sent when a subscription is created.

        stripeCustomerId = event.data.object.customer;
        planName = event.data.object.items.data[0].plan.metadata.planName;
        planBillingCycle = event.data.object.items.data[0].plan.metadata.planBillingCycle;

        await storeSubscriptionInDb(stripeCustomerId, planName, planBillingCycle);

        posthogUserSubscriptionCreated(stripeCustomerId, planName, planBillingCycle);

        break; */

        /* case 'customer.subscription.updated':
        // Sent when a subscription is updated - eg: cancelled/duration modified.

          default:
            break;
        }

        break; */

      case 'customer.subscription.deleted':
        // Sent when a subscription ends.
        // Useful for notifying users about the ending of their subscription.

        const subscriptionDeletionData = {
          subscriptionId: event.data.object.id,
          customerId: event.data.object.customer,
        };
        deleteSubscriptionInDb(subscriptionDeletionData);

        posthogUserSubscriptionEnded(subscriptionDeletionData);

        // TODO -- send an email to the user about the subscription end
        break;

        /* case 'invoice.upcoming':
          Sent a few days before the subscription renewal date.
          Indicates that an invoice is about to be generated for the next billing cycle.
          Useful for notifying users about the upcoming charge

          TODO -- send an email to the user reminding of subscription renewal
          break; */

        /* case 'invoice.paid':
          Sent when an invoice payment attempt succeeds.
          This indicates that the customer's payment was successful.
          Useful for notifying users about successful payments.
          TODO -- send an email to the user about the successful payment
          TODO -- update the user subscription status in the database
          break; */

        /* case 'invoice.payment_failed':
          Sent when an invoice payment attempt fails.
          This can happen for various reasons, such as insufficient funds or an expired card.
          notify users about the failed payment and
        prompting them to update their payment method.
          TODO -- send an email to the user about the failed payment
          break; */

        /* case 'charge.refunded':
        Sent when a charge is refunded.
        This indicates that the customer's payment was reversed.
        Useful for notifying users about the refund.
        TODO -- send an email to the user about the refund
        TODO -- update the user subscription status in the database
        break; */

      // ... handle other event types
      default:
      // console.log('Unhandled event type:', event.type);
        // logError('Unhandled event type in Stripe webhook paymentCompleted.', event.type);
    }

    res.status(200).send();
  } catch (error) {
    logError('error in stripeEventHandler', error);
    res.status(500).send('Internal Server Error');
  }
};

//* DOCS --> https://docs.stripe.com/webhooks
