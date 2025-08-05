import { Router } from 'express';
import { participateInAnalysis } from '../../../controllers/analysisController.mjs';

export const guestParticipantRouter = Router();

guestParticipantRouter.post('/', participateInAnalysis);

guestParticipantRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
