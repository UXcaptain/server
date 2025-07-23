import { Router } from 'express';

import { userRouter } from './v1/routes/userRouter.mjs';

import { authRouter } from './v1/routes/authRouter.mjs';
import { adminRouter } from './v1/routes/adminRouter.mjs';
import { billingRouter } from './v1/routes/billingRouter.mjs';
import { analysisRouter } from './v1/routes/analysisRouter.mjs';
import { checkAuthentication } from '../middlewares/authenticationChecker.mjs';
import { checkPermissionByRole } from '../middlewares/permissionByRoleChecker.mjs';
import { analysisEntryRouter } from './v1/routes/analysisEntryRouter.mjs';

export const apiRouter = Router();

const customerRole = 'customer';
const adminRole = 'admin';

apiRouter.use('/v1/auth', authRouter);

//* Globally auth protected routes

apiRouter.use(checkAuthentication());

apiRouter.use(
  '/v1/billing',
  checkPermissionByRole(customerRole),
  billingRouter,
);

apiRouter.use(
  '/v1/user',
  checkPermissionByRole(customerRole),
  userRouter,
);

apiRouter.use(
  '/v1/analysis',
  checkPermissionByRole(customerRole),
  analysisRouter,
);

apiRouter.use(
  '/v1/entry',
  checkPermissionByRole(customerRole),
  analysisEntryRouter,
);

apiRouter.use(
  '/v1/admin',
  checkPermissionByRole(adminRole),
  adminRouter,
);

apiRouter.use('/*fallback', (req, res) => {
  res.status(404).send('The requested route is not available or does not exist');
}); //* Will catch failed requests even though they are authenticated
