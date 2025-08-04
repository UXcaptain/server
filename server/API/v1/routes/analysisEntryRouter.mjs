import Router from 'express';
import { getAnalysisEntryDetails, updateAnalysisEntryDetails } from '../../../controllers/analysisEntryController.mjs';

export const analysisEntryRouter = new Router();

analysisEntryRouter.get('/:id', getAnalysisEntryDetails);

analysisEntryRouter.patch('/:id', updateAnalysisEntryDetails);

analysisEntryRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
