import { logError } from '../config/loggerFunctions.mjs';
import { createStripeCustomerPortalSession } from '../integrations/stripe/customerPortalSession.mjs';
import { createCustomerInStripe } from '../integrations/stripe/customerId.mjs';
import { createStripeCheckoutSession } from '../integrations/stripe/checkoutSession.mjs';
import { getBillingDataInDb, storeBillingCustomerIdInDb } from '../models/subscriptionModel.mjs';
import { getFromCache, storeInCache, getTTLfromCache } from '../config/valkey.mjs';

export const createBillingCustomerId = async (req, res) => {
  const {
    email,
    id: userId,
    stripe_customer_id: stripeCustomerId, //* Returns null if customer does not exist Stripe
  } = req.user;

  if (stripeCustomerId) {
    return res.status(400).json({
      success: false,
      message: 'customer already has a stripe customer id',
      stripeCustomerId: stripeCustomerId,
    });
  }

  try {
    const customerCreationQuery = await createCustomerInStripe(email, userId);

    const { id: createdStripeCustomerId } = customerCreationQuery;

    await storeBillingCustomerIdInDb(
      userId,
      customerCreationQuery.id,
    );

    return res.status(200).json({
      success: true,
      message: 'Customer created successfully',
      stripeCustomerId: createdStripeCustomerId,
    });
  } catch (error) {
    logError('Error creating customer in Stripe:', error);

    return res.status(500).json({
      success: false,
      message: 'There was an error creating the billing sections in stripe in Stripe',
    });
  }
};

export const getBillingCustomerPortalUrl = async (req, res) => {
  try {
    const {
      stripe_customer_id: stripeCustomerId,
    } = req.user;

    const customerPortalCreationQuery = await createStripeCustomerPortalSession(stripeCustomerId);

    const { url } = customerPortalCreationQuery;

    return res.status(200).json({
      success: 'success',
      message: 'Customer portal URL retrieved successfully',
      customerPortalUrl: url,
    });
  } catch (error) {
    logError('Error creating customer portal session:', error);
    return res.status(500).json({
      success: false,
      message: 'There was an error creating the customer portal session',
    });
  }
};

export const getBillingCheckoutSessionUrl = async (req, res) => {
  try {
    const {
      stripe_customer_id: stripeCustomerId,
      id: internalUserId,
    } = req.user;

    const billingData = await getBillingDataInDb(internalUserId);

    const { Subscription: activeSubscription } = billingData;

    if (activeSubscription.length >= 1) {
      const error = new Error('Create checkout session error');

      logError('user tried to create a checkout session with an active subscription - should be blocked in the frontend', error);

      return res.status(403).json({
        success: false,
        message: 'Checkout Session cant be created - user already has a subscription',
      });
    }

    const { planName, planBillingCycle } = req.body;

    const checkoutSession = await createStripeCheckoutSession(
      stripeCustomerId,
      internalUserId,
      planName,
      planBillingCycle,
    );

    const { url } = checkoutSession;

    return res.status(200).json({
      success: true,
      message: 'Stripe`s checkout session generated successfully',
      checkoutSessionUrl: url,
    });
  } catch (error) {
    logError('Error creating Stripe`s checkout session:', error);
    return res.status(500).json({
      success: false,
      message: 'There was an error creating the checkout session',
    });
  }
};

export const getBillingData = async (req, res) => {
  const { id } = req.user;

  const cacheKey = `billing-${id}`;

  try {
    const cachedBillingData = await getFromCache(cacheKey);

    if (cachedBillingData) {
      return res.status(200).json({
        success: true,
        message: 'Billing data retrieved successfully - cache',
        cacheKey: cacheKey,
        cacheTTL_seconds: await getTTLfromCache(cacheKey),
        billingData: JSON.parse(cachedBillingData),
      });
    }

    const billingData = await getBillingDataInDb(id);

    await storeInCache(cacheKey, billingData, 60 * 5); //* Cache for 5 minutes

    return res.status(200).json({
      success: true,
      message: 'Billing data retrieved successfully - DB',
      billingData: billingData,
    });
  } catch (error) {
    logError('Failed retrieving billing data', error);
    return res.status(500).json({
      success: false,
      message: 'Failed retrieving billing data',
    });
  }
};
