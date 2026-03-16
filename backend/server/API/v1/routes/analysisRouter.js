import { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
  createAnalysis,
  getAllAnalyses,
  getSingleAnalysisData,
  getAvailableAnalyses,
  participateInAnalysis,

} from '../../../controllers/analysisController.js';
import { createAnalysisSchema } from '../../../utils/validators/createAnalysisSchema.js';
import { sanitizerResult } from '../../../middlewares/sanitizerResult.js';
import { checkAuthentication } from '../../../middlewares/authenticationChecker.js';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.js';
import { subscriptionChecker } from '../../../middlewares/subscriptionChecker.js';
import { checkInviteYourOwnUsersBeforeCreateAnalysis } from '../../../middlewares/planLimitsChecker.js';

export const analysisRouter = Router();

// TODO: Temporarily bypassing subscription check for analysis creation - re-enable later
// analysisRouter.post('/', checkAuthentication(), checkPermissionByRole('customer'), subscriptionChecker('pro'), checkSchema(createAnalysisSchema), sanitizerResult, createAnalysis);
analysisRouter.post(
  '/',
  checkAuthentication(),
  checkPermissionByRole('customer'),
  subscriptionChecker,
  // checkInviteYourOwnUsersBeforeCreateAnalysis,
  checkSchema(createAnalysisSchema),
  sanitizerResult,
  createAnalysis,
);

analysisRouter.get('/available', checkAuthentication(), checkPermissionByRole('participant'), getAvailableAnalyses);

analysisRouter.post('/participate', participateInAnalysis); // TODO - separate this into 2 - current single participate is not ideal for guest vs registered users

analysisRouter.get('/', checkAuthentication(), checkPermissionByRole('customer'), getAllAnalyses);

analysisRouter.get('/:id', checkAuthentication(), checkPermissionByRole('customer'), getSingleAnalysisData);

analysisRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
