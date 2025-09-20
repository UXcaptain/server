import { Router } from 'express';
import {
  createCompanyBillingId,
  getBillingCustomerPortalUrl,
  getBillingCheckoutSessionUrl,
  getCompanyBillingData,
} from '../../../controllers/billingController.mjs';

export const billingRouter = Router();

billingRouter.get('/', getCompanyBillingData);

billingRouter.post('/', createCompanyBillingId);

billingRouter.post('/checkout-session', getBillingCheckoutSessionUrl);

billingRouter.post('/customer-portal', getBillingCustomerPortalUrl);

billingRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
