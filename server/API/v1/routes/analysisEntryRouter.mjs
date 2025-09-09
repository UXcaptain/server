import Router from 'express';
import { getAnalysisEntryDetails, updateAnalysisEntryDetails } from '../../../controllers/analysisEntryController.mjs';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.mjs';

export const analysisEntryRouter = new Router();

analysisEntryRouter.patch('/:id', updateAnalysisEntryDetails);

analysisEntryRouter.get('/:id', checkPermissionByRole('customer'), getAnalysisEntryDetails);

analysisEntryRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
