import { Router } from 'express';

import { checkSchema } from 'express-validator';
import { userRouter } from './v1/routes/userRouter.mjs';

import { authRouter } from './v1/routes/authRouter.mjs';
import { adminRouter } from './v1/routes/adminRouter.mjs';
import { billingRouter } from './v1/routes/billingRouter.mjs';
import { analysisRouter } from './v1/routes/analysisRouter.mjs';
import { checkAuthentication } from '../middlewares/authenticationChecker.mjs';
import { checkPermissionByRole } from '../middlewares/permissionByRoleChecker.mjs';
import { analysisEntryRouter } from './v1/routes/analysisEntryRouter.mjs';
import { createContactInBrevo } from '../integrations/brevo/functions/createContact.mjs';
import { waitlistValidationSchema } from '../utils/validators/waitlistValidationSchema.mjs';
import { sanitizerResult } from '../middlewares/sanitizerResult.mjs';

export const apiRouter = Router();

const customerRole = 'customer';
const adminRole = 'admin';

apiRouter.use('/v1/auth', authRouter);

apiRouter.use('/v1/waitlist', checkSchema(waitlistValidationSchema), sanitizerResult, createContactInBrevo);

apiRouter.use(
  '/v1/billing',
  checkAuthentication(),
  checkPermissionByRole(customerRole),
  billingRouter,
);

apiRouter.use(
  '/v1/user',
  checkAuthentication(),
  checkPermissionByRole(customerRole),
  userRouter,
);

apiRouter.use(
  '/v1/analysis',
  analysisRouter,
);

apiRouter.use(
  '/v1/analysisEntry',
  analysisEntryRouter,
);

apiRouter.use(
  '/v1/admin',
  checkAuthentication(),
  checkPermissionByRole(adminRole),
  adminRouter,
);

apiRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
