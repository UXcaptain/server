import bcrypt from 'bcryptjs';
import { logError } from '../config/loggerFunctions.mjs';
import passport from '../auth/passportjs.mjs';
import { posthogUserSuccessLoggedIn } from '../models/posthogModel.mjs';

import { getUserByEmail, updateUserPasswordInDB } from '../models/userModel.mjs';
import { createPasswordResetToken, getPasswordResetTokenData, deletePasswordResetTokens } from '../models/passwordResetTokensModel.mjs';
import { sendResetPasswordTokenToUser } from '../integrations/brevo/transactionalEmails/sendResetPasswordTokenToUser.mjs';

export const requestPasswordResetToken = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await getUserByEmail(email);

    if (user) {
      const tokenCreation = await createPasswordResetToken(user.id);

      await sendResetPasswordTokenToUser(email, tokenCreation.id);
    }

    //* Not checking / notifying for user existence to prevent security leaks

    return res.status(200).json({
      success: true,
      message: 'If this email exists, a reset link will be sent',
    });
  } catch (error) {
    logError('Error in forgotPasswordRequest function', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred, please try again later',
      error: error,
    });
  }
};

export const checkPasswordResetTokenValidity = async (req, res) => {
  try {
    const { passwordResetToken } = req.query;

    if (!passwordResetToken) {
      return res.status(400).json({
        success: false,
        message: 'Token is required',
      });
    }

    const passwordResetTokenData = await getPasswordResetTokenData(passwordResetToken);

    if (!passwordResetTokenData) {
      return res.status(404).json({
        success: false,
        message: 'Password reset token does not exist',
      });
    }

    const {
      token_expires: tokenExpirationDate,
    } = passwordResetTokenData;

    if (new Date(tokenExpirationDate) < new Date()) {
      return res.status(403).json({
        success: false,
        message: 'Token expired - Please request a new password reset link',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully retrieved password reset token',
      tokenData: passwordResetTokenData,
    });
  } catch (error) {
    logError('Failed retrieving password reset token', error);
    return res.status(500).json({
      success: false,
      message: 'Token expiration date retrieval failed',
    });
  }
};

export const updateRecoveredUserPassword = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      success: false,
      message: req.sanitizedErrors,
    });
  }

  try {
    const {
      newPassword,
      confirmNewPassword,
      passwordResetToken,
    } = req.body;

    const passwordResetTokenData = await getPasswordResetTokenData(passwordResetToken);

    const {
      user_id: userId,
      tokenExpires,
    } = passwordResetTokenData;

    if (new Date(tokenExpires) < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Token expired - Please request a new password reset link',
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match',
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await updateUserPasswordInDB(userId, hashedPassword);

    await deletePasswordResetTokens(userId);

    return res.status(200).json({
      success: true,
      message: 'User password updated successfully using password reset token',
    });
  } catch (error) {
    logError('Error updating user password', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred, please try again later',
    });
  }
};

export const checkSession = async (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: 'Session is valid',
      user: {
        id: req.user.id,
        role: req.user.role,
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Session is invalid',
  });
};

export const loginLocal = async (req, res, next) => {
  passport.authenticate('local', (err, user /* , info */) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'An error occurred during login',
      });
    }

    if (!user) { //* Will trigger if user does not exist
      return res.status(401).json({
        success: false,
        message: 'The combination of email and password is incorrect',
      });
    }

    // Log the user in and establish a session
    return req.login(user, (loginErr) => {
      if (loginErr) { //* Will trigger if password is incorrect
        return res.status(401).json({
          success: false,
          message: 'The combination of email and password is incorrect',
        });
      }

      posthogUserSuccessLoggedIn(user.id, 'local');
      // Successful login
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        user: {
          id: user.id,
          role: req.user.role,
        },
      });
    });
  })(req, res, next);
};
