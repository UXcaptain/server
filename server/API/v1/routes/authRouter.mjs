import { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
  createUser,
  updateUserPassword,
  checkSession,
  requestPasswordResetToken,
  loginLocal,
  checkPasswordResetTokenValidity,
  updateRecoveredUserPassword,
} from '../../../controllers/authController.mjs';
import { sanitizerResult } from '../../../middlewares/sanitizerResult.mjs';
import { createUserValidationSchema } from '../../../utils/validators/createUserSchema.mjs';
import { userLoginValidationSchema } from '../../../utils/validators/userLoginValidationSchema.mjs';

import { updatePasswordSchema } from '../../../utils/validators/updatePasswordSchema.mjs';
import { logError } from '../../../config/loggerFunctions.mjs';
import { recoverPasswordSchema } from '../../../utils/validators/recoverPasswordSchema.mjs';

export const authRouter = Router();

authRouter.post('/login/local', checkSchema(userLoginValidationSchema), sanitizerResult, loginLocal);

authRouter.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      logError('User logout failed', err);
      return next(err);
    }

    return res.status(200).json({
      success: true,
      message: 'User logged out successfully',
    });
  });
});

authRouter.post('/register/local', checkSchema(createUserValidationSchema), sanitizerResult, createUser);

authRouter.patch('/update-user-password', checkSchema(updatePasswordSchema), sanitizerResult, updateUserPassword);

authRouter.get('/password-reset', checkPasswordResetTokenValidity);

authRouter.post('/password-reset', requestPasswordResetToken);

authRouter.patch('/password-reset', checkSchema(recoverPasswordSchema), sanitizerResult, updateRecoveredUserPassword);

authRouter.get('/check-session', checkSession);

authRouter.get('/*fallback', (req, res) => {
  res.status(404).send('requested API Route does not exist in the userRouter');
});
