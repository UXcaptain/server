import { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
  createAnalysis,
  getAllAnalyses,
  getSingleAnalysisData,
} from '../../../controllers/analysisController.mjs';
import { createAnalysisSchema } from '../../../utils/validators/createAnalysisSchema.mjs';
import { sanitizerResult } from '../../../middlewares/sanitizerResult.mjs';

export const analysisRouter = Router();

analysisRouter.post('/', checkSchema(createAnalysisSchema), sanitizerResult, createAnalysis);

analysisRouter.get('/', getAllAnalyses);

analysisRouter.get('/:id', getSingleAnalysisData);

analysisRouter.use('/*fallback', (req, res) => {
  res.status(404).send('Route not found');
});
