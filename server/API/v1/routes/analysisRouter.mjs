import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { createAnalysis, getAllAnalyses, getSinglesAnalysisDetails } from '../../../controllers/analysisController.mjs';
import { createAnalysisSchema } from '../../../utils/validators/createAnalysisSchema.mjs';
import { sanitizerResult } from '../../../middlewares/sanitizerResult.mjs';

export const analysisRouter = Router();

analysisRouter.get('/', getAllAnalyses);

analysisRouter.get('/participate/:id', getSinglesAnalysisDetails);

analysisRouter.post('/create', checkSchema(createAnalysisSchema), sanitizerResult, createAnalysis);

analysisRouter.use('/*fallback', (req, res) => {
  res.status(404).send('Route not found');
});
