import { logError } from '../../config/loggerFunctions.mjs';
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
          companyId: parseInt(event.data.object.client_reference_id, 10),
          userId: event.data.object.metadata.userId,
          subscriptionId: event.data.object.subscription,
        };

        storeSubscriptionInDb(checkoutSessionData);

        // TODO -- send an email to the user about the subscription update
        break;

      case 'customer.subscription.deleted':
        // Sent when a subscription ends.
        // Useful for notifying users about the ending of their subscription.

        const subscriptionDeletionData = {
          subscriptionId: event.data.object.id,
          customerId: event.data.object.customer,
        };
        deleteSubscriptionInDb(subscriptionDeletionData);

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
