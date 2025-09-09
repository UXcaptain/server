import { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
  createAnalysis,
  getAllAnalyses,
  getSingleAnalysisData,
  participateInAnalysis,
} from '../../../controllers/analysisController.mjs';
import { createAnalysisSchema } from '../../../utils/validators/createAnalysisSchema.mjs';
import { sanitizerResult } from '../../../middlewares/sanitizerResult.mjs';
import { checkAuthentication } from '../../../middlewares/authenticationChecker.mjs';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.mjs';

export const analysisRouter = Router();

analysisRouter.post('/', checkAuthentication(), checkPermissionByRole('customer'), checkSchema(createAnalysisSchema), sanitizerResult, createAnalysis);

analysisRouter.post('/participate', participateInAnalysis);

analysisRouter.get('/', checkAuthentication(), checkPermissionByRole('customer'), getAllAnalyses);

analysisRouter.get('/:id', checkAuthentication(), checkPermissionByRole('customer'), getSingleAnalysisData);

analysisRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
