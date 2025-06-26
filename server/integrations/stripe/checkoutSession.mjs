import { stripeInstance } from '../../config/stripe.mjs';

export const createStripeCheckoutSession = async (
  stripeCustomerId,
  userId,
  planName,
  planBillingCycle,
) => {
  const priceIdsProd = {
    basicmonthly: 'price_1RcXRcKwyQnTsu7pzA3sHJ0i',
    basicannual: 'price_1RcXRcKwyQnTsu7p7MQDyGL5',
    // proMonthly: 'price_1RBxMl4EThrTH3EtJfelo9Dp',
    // proAnnual: 'price_1RBxMl4EThrTH3EtJfelo9Dp',
  };

  const priceIdsDev = {
    basicmonthly: 'price_1RcXYn4EThrTH3EtBV4SNesj',
    basicannual: 'price_1RcXZ64EThrTH3EtiQQB7i36',
  };

  const checkoutSession = await stripeInstance.checkout.sessions.create({
    success_url: `${process.env.FRONT_WEB_APP_ORIGIN_URL}/user/billing?status=paid`,
    line_items: [
      {
        price: process.NODE_ENV === 'production' ? priceIdsProd[`${planName}${planBillingCycle}`] : priceIdsDev[`${planName}${planBillingCycle}`],
        quantity: 1,
      },
    ],
    customer_update: {
      name: 'auto',
      address: 'auto',
    },
    mode: 'subscription',
    cancel_url: `${process.env.FRONT_WEB_APP_ORIGIN_URL}/user/billing?status=cancelled`,
    client_reference_id: userId,
    adaptive_pricing: {
      enabled: true,
    },
    automatic_tax: {
      enabled: true,
    },
    metadata: {
      planName: planName,
      planBillingCycle: planBillingCycle,
    },
    customer: stripeCustomerId,
    ui_mode: 'hosted',
    allow_promotion_codes: true,
    billing_address_collection: 'auto', //* Disable this for non-corporate users
    tax_id_collection: { //* Disable this for non-corporate users
      enabled: true,
    },
  });

  return checkoutSession;
};

//* Checkout Sessions are temporary. New Checkout Sessions expire after a 24 hour period.
//* The expiration time can be overwritten via the `expires_at` attribute
//* It can also be expired via the dedicated session expiration endpoint
//* DOCS --> https://docs.stripe.com/api/checkout/sessions
//* Interactive Shell --> https://docs.stripe.com/api/checkout/sessions/create?shell=true&api=true&resource=checkout%20sessions&action=create
