import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { deleteUser } from '../../../controllers/userController.js';
import { updateParticipantProfile } from '../../../controllers/participantController.js';
import { sanitizerResult } from '../../../middlewares/sanitizerResult.js';
import { getParticipantProfile } from '../../../models/userModel.js';
import { updateParticipantProfileValidationSchema } from '../../../utils/validators/updateParticipantProfileSchema.js';

export const participantRouter = Router();

participantRouter.get('/', getParticipantProfile);

participantRouter.patch('/', checkSchema(updateParticipantProfileValidationSchema), sanitizerResult, updateParticipantProfile);

participantRouter.delete('/', deleteUser);

participantRouter.use('/*fallback', (req, res) => {
  res.status(404).json({
    message: 'The requested route is not available or does not exist',
  }); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
