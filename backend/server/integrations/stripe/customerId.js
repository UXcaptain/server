import { stripeInstance } from '../../config/stripe.js';

export const createCompanyIdInStripe = async (email, companyId) => {
  const customerCreationQuery = await stripeInstance.customers.create({
    email: email,
    metadata: {
      companyId: companyId,
    },
  });

  return customerCreationQuery;
};

export const createSubscriptionWithTrial = async (companyStripeId, companyId) => {
  const priceIds = {
    latest_basic_monthly: 'price_1RcXRcKwyQnTsu7pzA3sHJ0i',
    next_basic_monthly: 'price_1SZs7jKNsGqZfOkoNh69nTfa',
  };

  const priceId = process.env.DEPLOY_ENVIRONMENT === 'latest'
    ? priceIds.latest_basic_monthly
    : priceIds.next_basic_monthly;

  const trialPeriodDays = parseInt(process.env.TRIAL_PERIOD_DAYS, 10) || 14;

  const subscription = await stripeInstance.subscriptions.create({
    customer: companyStripeId,
    items: [
      {
        price: priceId,
      },
    ],
    trial_period_days: trialPeriodDays,
    payment_behavior: 'default_incomplete',
    payment_settings: {
      save_default_payment_method: 'on_subscription',
      payment_method_types: ['card'],
    },
    metadata: {
      companyId: companyId,
      planName: 'basic',
      planBillingCycle: 'monthly',
    },
    expand: ['latest_invoice.payment_intent'],
  });

  return subscription;
};

//* DOCS --> https://docs.stripe.com/api/customers/create
//* DOCS --> https://docs.stripe.com/api/subscriptions/create
