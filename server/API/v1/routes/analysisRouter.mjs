import { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
  createAnalysis,
  getAllAnalyses,
  getSinglesAnalysisData,
} from '../../../controllers/analysisController.mjs';
import { createAnalysisSchema } from '../../../utils/validators/createAnalysisSchema.mjs';
import { sanitizerResult } from '../../../middlewares/sanitizerResult.mjs';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.mjs';

export const analysisRouter = Router();

analysisRouter.use(checkPermissionByRole('customer'));

analysisRouter.post('/', checkSchema(createAnalysisSchema), sanitizerResult, createAnalysis);

analysisRouter.get('/', getAllAnalyses);

analysisRouter.get('/:id', getSinglesAnalysisData);

analysisRouter.use('/*fallback', (req, res) => {
  res.status(404).send('Route not found');
});
