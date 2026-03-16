import bcrypt from 'bcryptjs';
import { MongoClient } from 'mongodb';
import { logError } from '../config/loggerFunctions.js';
import passport from '../auth/passportjs.js';
import { posthogPasswordRequestTokenRequested, posthogUserSuccessLoggedIn, posthogCustomerSignedUp } from '../models/posthogModel.js';
import {
  getUserByEmail,
  updateUserPasswordInDB,
  createCustomerInDB,
  updateUserLastLoginDate,
  createParticipantInDb,
  getUserAuthDetailsById,
} from '../models/userModel.js';
import { createPasswordResetToken, getPasswordResetTokenData, deletePasswordResetTokens } from '../models/passwordResetTokensModel.js';
import { storeBillingCompanyIdInDb, updateSubscriptionFromStripeInDb } from '../models/subscriptionModel.js';

import { createCompanyIdInStripe, createSubscriptionWithTrial } from '../integrations/stripe/customerId.js';
import { createCompanyInDb } from '../models/companyModel.js';
import { initializeMongoDB, client, collections } from '../db/mongodb.js';

export const createCustomer = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      message: 'User could not be created due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  const { username: email, password } = req.body;

  const isExistingUser = await getUserByEmail(email);
  if (isExistingUser !== null) {
    return res.status(409).json({
      message: 'User creation failed - User already exists',
    });
  }

  const acquisitionData = {
    utmSource: req.body.utmSource || null,
    utmMedium: req.body.utmMedium || null,
    utmCampaign: req.body.utmCampaign || null,
    utmContent: req.body.utmContent || null,
    utmTerm: req.body.utmTerm || null,
    gclid: req.body.gclid || null,
    fbclid: req.body.fbclid || null,
  };

  const hashedPassword = await bcrypt.hash(password, 10);
  const date = new Date();

  await client.connect();

  const session = client.startSession();

  try {
    const resetDate = new Date(date);

    await session.withTransaction(async () => {
      const createdCompany = await collections.company.insertOne({ // * This should be in the model but i cba to debug it
        name: null,
        subscription: {},
        stripeId: null,
        usage: {
          transcription: {
            used: 0,
            resetDate: resetDate,
          },
          inviteYourOwnUsers: {
            used: 0,
            resetDate: resetDate,
          },
          panelParticipants: {
            used: 0,
            resetDate: resetDate,
          },
        },
        acquisition: acquisitionData,
        createdAt: date,
        updatedAt: date,
      }, { session }); // This should be in the model but i cba to debug it

      await collections.user.insertOne({ // * This should be in the model but i cba to debug it
        email: email,
        companyId: createdCompany.insertedId,
        password: hashedPassword,
        role: 'customer',
        createdAt: date,
        updatedAt: date,
      }, { session });
    });

    return res.status(201).json({
      message: 'Customer created successfully',
    });
  } catch (error) {
    console.log('error');
  } finally {
    await session.endSession();
  }

  // External APIs outside transaction // TODO - fix the stripe implementation
  // try {
    // const stripeCustomer = await createCompanyIdInStripe(email, companyId.toString());
    // const stripeSubscription = await createSubscriptionWithTrial(stripeCustomer.id, companyId.toString());

  //   const db = client.db('yourDatabaseName');
  //   await db.collection('company').updateOne(
  //     { _id: companyId },
  //     { $set: { stripeId: stripeCustomer.id, subscription: stripeSubscription, updatedAt: new Date() } }
  //   );
  // } catch (stripeError) {
  //   logError('Stripe setup failed for company', stripeError);
  // }

  // posthogCustomerSignedUp(userId.toString(), {
  //   email: email,
  //   role: 'customer',
  //   companyId: companyId.toString(),
  //   ...acquisitionData,
  // }).catch(err => logError('PostHog event failed', err));
};

export const createParticipant = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      message: 'User could not be created due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  const userData = {
    email: req.body.username,
    password: await bcrypt.hash(req.body.password, 10),
    role: 'participant',
  };

  const isExistingUser = await getUserByEmail(userData.email);

  if (isExistingUser !== null) {
    return res.status(409).json({
      message: 'User creation failed - User already exists',
    });
  }

  const user = await createParticipantInDb(userData);
  return res.status(201).json({
    message: 'participant created successfully',
    userId: user.insertedId,
  });
};

export const requestPasswordResetToken = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      message: 'New password could not be requested due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  const { username: email } = req.body;

  const user = await getUserByEmail(email);

  if (user) {
    const passwordResetToken = await createPasswordResetToken(user._id);

    posthogPasswordRequestTokenRequested(user._id, passwordResetToken.toString()); // fire-and-forget // Convert ObjectId to string so it can be sent to posthog
  }

  return res.status(200).json({
    message: 'If this email exists, a reset link will be sent',
  });
  //* Not checking / notifying for user existence to prevent security leaks
};

export const checkPasswordResetTokenValidity = async (req, res) => {
  try {
    const { passwordResetToken } = req.query;

    if (!passwordResetToken) {
      return res.status(400).json({
        message: 'Token is required',
      });
    }

    const passwordResetTokenData = await getPasswordResetTokenData(passwordResetToken);

    if (!passwordResetTokenData) {
      return res.status(404).json({
        message: 'Password reset token does not exist',
      });
    }

    const {
      token_expires: tokenExpirationDate,
    } = passwordResetTokenData;

    if (new Date(tokenExpirationDate) < new Date()) {
      return res.status(403).json({
        message: 'Token expired - Please request a new password reset link',
      });
    }

    return res.status(200).json({
      message: 'Successfully retrieved password reset token',
      tokenData: passwordResetTokenData,
    });
  } catch (error) {
    logError('Failed retrieving password reset token', error);
    return res.status(500).json({
      message: 'Token expiration date retrieval failed',
    });
  }
};

export const updateRecoveredUserPassword = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      message: 'User could not be created due to validation errors',
      errors: req.sanitizedErrors,
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
      userId,
      tokenExpires: tokenExpirationDate,
    } = passwordResetTokenData;

    if (new Date(tokenExpirationDate) < new Date()) {
      return res.status(400).json({
        message: 'Token expired - Please request a new password reset link',
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        message: 'Passwords do not match',
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await updateUserPasswordInDB(userId, hashedPassword);

    await deletePasswordResetTokens(userId);

    return res.status(200).json({
      message: 'User password updated successfully using password reset token',
    });
  } catch (error) {
    logError('Error updating user password', error);
    return res.status(500).json({
      message: 'An error occurred, please try again later',
    });
  }
};

export const loginLocal = async (req, res, next) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      message: 'User could not be logged in due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  return passport.authenticate('local', (err, user /* , info */) => {
    if (err) {
      return next(err);
    }

    if (!user) { //* Will trigger if user does not exist
      return res.status(401).json({
        message: 'The combination of email and password is incorrect',
      });
    }

    // Log in and establish a session
    return req.login(user, (loginErr) => {
      if (loginErr) { //* Will trigger if password is incorrect
        return res.status(401).json({
          message: 'The combination of email and password is incorrect',
        });
      }

      // Successful login
      posthogUserSuccessLoggedIn(user._id, 'local'); // Fire-and-forget function

      updateUserLastLoginDate(user._id); // Fire-and-forget function

      return res.status(200).json({
        message: 'Login successful',
        user: {
          id: user._id,
          role: user.role,
        },
      });
    });
  })(req, res, next);
};

export const updateUserPassword = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      message: 'New password could not be requested due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  try {
    const {
      currentPassword,
      newPassword,
    } = req.body;

    try {
      const { _id: userId } = req.user;

      const user = await getUserAuthDetailsById(userId);

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      const { password: currentHashedPassword } = user;

      // Compare current password with stored hash
      const isMatch = await bcrypt.compare(currentPassword, currentHashedPassword);

      if (!isMatch) {
        return res.status(400).json({
          message: 'Current password is incorrect',
        });
      }

      // Hash new password
      const newHashedPassword = await bcrypt.hash(newPassword, 10);

      // Update password in database
      await updateUserPasswordInDB(userId, newHashedPassword);

      return res.status(200).json({
        message: 'Password updated successfully',
      });
    } catch (error) {
      logError('Password update failed', error);
      return res.status(500).json({
        message: 'Password update failed',
      });
    }
  } catch (error) {
    logError('Password update failed', error);
    return res.status(500).json({
      message: 'Password update failed',
    });
  }
};

export const logoutUser = async (req, res, next) => {
  if (!req.user) {
    return res.status(400).json({
      message: 'User is not logged in',
    });
  }

  return req.logout((err) => {
    if (err) {
      logError('User logout failed', err);
      return next(err);
    }

    // Destroy session explicitly
    return req.session.destroy((error) => {
      if (error) {
        logError('Session destruction failed', error);
        return next(error);
      }

      // Clear cookie on client side - adjust cookie name as needed
      res.clearCookie('connect.sid');

      return res.status(200).json({
        message: 'User logged out successfully',
      });
    });
  });
};
