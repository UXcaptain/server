import { Router } from 'express';
import {
  createBillingCustomerId,
  getBillingCustomerPortalUrl,
  getBillingCheckoutSessionUrl,
  getBillingData,
} from '../../../controllers/billingController.mjs';

export const billingRouter = Router();

billingRouter.get('/', getBillingData);

billingRouter.post('/', createBillingCustomerId);

billingRouter.post('/checkout-session', getBillingCheckoutSessionUrl);

billingRouter.post('/customer-portal', getBillingCustomerPortalUrl);

billingRouter.use('/*fallback', (req, res) => {
  res.status(404).send('The requested route is not available or does not exist'); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
