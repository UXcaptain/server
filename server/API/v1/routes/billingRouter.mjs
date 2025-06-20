import { Router } from 'express';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.mjs';
import {
  createStripeCustomerId,
  getStripeCustomerPortalUrl,
  getStripeCheckoutSessionUrl,
  getSubscriptionData,
} from '../../../controllers/stripeController.mjs';

export const billingRouter = Router();

// TODO - fix authentication in tests

billingRouter.use(checkPermissionByRole('customer'));

billingRouter.get('/check-subscription', getSubscriptionData);

billingRouter.post('/create-stripe-customer-id', createStripeCustomerId);

billingRouter.post('/stripe-checkout-session', getStripeCheckoutSessionUrl);

billingRouter.post('/stripe-customer-portal', getStripeCustomerPortalUrl);

billingRouter.use('/*fallback', (req, res) => {
  res.status(404).send('The requested route is not available or does not exist'); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
