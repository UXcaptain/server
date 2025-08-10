import { createStripeCustomerPortalSession } from '../integrations/stripe/customerPortalSession.mjs';
import { createCompanyIdInStripe } from '../integrations/stripe/customerId.mjs';
import { createStripeCheckoutSession } from '../integrations/stripe/checkoutSession.mjs';
import { getBillingDataInDb, storeBillingCompanyIdInDb } from '../models/subscriptionModel.mjs';

export const createCompanyBillingId = async (req, res) => {
  const {
    email,
    company_id: companyId,
  } = req.user;

  const billingData = await getBillingDataInDb(companyId);

  const { stripe_id: companyStripeId } = billingData;

  if (companyStripeId) {
    return res.status(400).json({
      success: false,
      message: 'Company billing ID already exists',
    });
  }

  const companyBillingId = await createCompanyIdInStripe(email, companyId);

  const { id: createdStripeCustomerId } = companyBillingId;

  await storeBillingCompanyIdInDb(
    companyId,
    companyBillingId.id,
  );

  return res.status(200).json({
    success: true,
    message: 'Company billing ID created successfully',
    companyBillingId: createdStripeCustomerId,
  });
};

export const getBillingCustomerPortalUrl = async (req, res) => {
  const {
    company_id: companyId,

  } = req.user;

  const billingData = await getBillingDataInDb(companyId);

  const { stripe_id: companyStripeId } = billingData;

  const customerPortalCreationQuery = await createStripeCustomerPortalSession(companyStripeId);

  const { url } = customerPortalCreationQuery;

  return res.status(200).json({
    success: 'success',
    message: 'Customer portal URL retrieved successfully',
    customerPortalUrl: url,
  });
};

export const getBillingCheckoutSessionUrl = async (req, res) => {
  const {
    company_id: companyId,
    id: userId,
  } = req.user;

  const billingData = await getBillingDataInDb(companyId);

  const { stripe_id: companyStripeId } = billingData;

  const { planName, planBillingCycle } = req.body;

  const checkoutSession = await createStripeCheckoutSession(
    companyStripeId,
    userId,
    planName,
    planBillingCycle,
  );

  const { url } = checkoutSession;

  return res.status(200).json({
    success: true,
    message: 'Billing checkout session generated successfully',
    checkoutSessionUrl: url,
  });
};

export const getCompanyBillingData = async (req, res) => {
  const { company_id: companyId } = req.user;

  const billingData = await getBillingDataInDb(companyId);

  return res.status(200).json({
    success: true,
    message: 'Billing data retrieved successfully - DB',
    billingData: billingData,
  });
};
