import Router from 'express';
import {
  getAnalysisEntryDetails,
  getAnalysisEntryPresignedUploadUrl,
  updateAnalysisEntry,
  createAnalysisEntry,
} from '../../../controllers/analysisEntryController.js';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.js';

export const analysisEntryRouter = new Router();

analysisEntryRouter.post('/', createAnalysisEntry);

analysisEntryRouter.post('/upload-url', getAnalysisEntryPresignedUploadUrl);

analysisEntryRouter.patch('/', updateAnalysisEntry);

analysisEntryRouter.get('/:id', checkPermissionByRole('customer'), getAnalysisEntryDetails);

analysisEntryRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
