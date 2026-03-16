import { createStripeCustomerPortalSession } from '../integrations/stripe/customerPortalSession.js';
import { createCompanyIdInStripe } from '../integrations/stripe/customerId.js';
import { createStripeCheckoutSession } from '../integrations/stripe/checkoutSession.js';
import { getSubscriptionDataInDb, storeBillingCompanyIdInDb } from '../models/subscriptionModel.js';

export const createCompanyBillingId = async (createdUser) => {
  const {
    email,
    companyId,
  } = createdUser;

  const subcriptionData = await getSubscriptionDataInDb(companyId);

  const { stripeId: companyStripeId } = subcriptionData.company;

  if (companyStripeId) {
    throw new Error(`Company ${companyId} already has a billing Id`);
  }

  const companyBillingId = await createCompanyIdInStripe(email, companyId);

  await storeBillingCompanyIdInDb(
    companyId,
    companyBillingId.id,
  );
};

export const getBillingCustomerPortalUrl = async (req, res) => {
  const {
    companyId,
  } = req.user;

  const subcriptionData = await getSubscriptionDataInDb(companyId);

  const { stripeId: companyStripeId } = subcriptionData.company;

  const customerPortalCreationQuery = await createStripeCustomerPortalSession(companyStripeId);

  const { url } = customerPortalCreationQuery;

  return res.status(200).json({
    message: 'Customer portal URL retrieved successfully',
    customerPortalUrl: url,
  });
};

export const getBillingCheckoutSessionUrl = async (req, res) => {
  const {
    companyId,
    _id: userId,
  } = req.user;

  const subcriptionData = await getSubscriptionDataInDb(companyId);

  const { stripeId: companyStripeId } = subcriptionData.company;

  const { planName, planBillingCycle } = req.body;

  const checkoutSession = await createStripeCheckoutSession(
    companyId,
    companyStripeId,
    userId,
    planName,
    planBillingCycle,
  );

  const { url } = checkoutSession;

  return res.status(200).json({
    message: 'Billing checkout session generated successfully',
    checkoutSessionUrl: url,
  });
};

export const getCompanySubscriptionData = async (req, res) => {
  const { companyId } = req.user;

  const subcriptionData = await getSubscriptionDataInDb(companyId);

  return res.status(200).json({
    message: 'Billing data retrieved successfully - DB',
    subscriptionData: subcriptionData,
  });
};
