import Router from 'express';
import { getAnalysisEntryPresignedUrl } from '../../../controllers/entryController.mjs';

export const entryRouter = new Router();

entryRouter.get('/:id', getAnalysisEntryPresignedUrl);

entryRouter.use('/*fallback', (req, res) => {
  res.status(404).send('The requested route is not available or does not exist'); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
