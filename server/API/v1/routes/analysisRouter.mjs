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

export const analysisRouter = Router();

analysisRouter.post('/', checkSchema(createAnalysisSchema), sanitizerResult, createAnalysis);

analysisRouter.get('/', getAllAnalyses);

analysisRouter.get('/:id', getSingleAnalysisData);

analysisRouter.get('/participate/:id', participateInAnalysis);

analysisRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
