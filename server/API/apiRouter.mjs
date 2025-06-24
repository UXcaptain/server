import { Router } from 'express';

import { userRouter } from './v1/routes/userRouter.mjs';

import { authRouter } from './v1/routes/authRouter.mjs';
import { adminRouter } from './v1/routes/adminRouter.mjs';
import { billingRouter } from './v1/routes/billingRouter.mjs';
import { analysisRouter } from './v1/routes/analysisRouter.mjs';
import { authenticationChecker } from '../middlewares/authenticationChecker.mjs';

export const apiRouter = Router();

// Auth protected routes
apiRouter.use(authenticationChecker);

apiRouter.use('/v1/auth', authRouter);
apiRouter.use('/v1/billing', billingRouter);
apiRouter.use('/v1/user', userRouter);
apiRouter.use('/v1/analysis', analysisRouter);

apiRouter.use('/v1/admin', adminRouter);

apiRouter.use('/*fallback', (req, res) => {
  res.status(404).send('The requested route is not available or does not exist');
}); //* Will catch failed requests even though they are authenticated
