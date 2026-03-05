import { ObjectId } from 'mongodb';

import { logError, logInfo } from '../config/loggerFunctions.js';
import { initializeMongoDB } from '../db/mongodb.js';

const collections = await initializeMongoDB();

export const createPasswordResetToken = async (userId) => {
  const passwordResetToken = await collections.passwordResetToken.bulkWrite([{
    insertOne: {
      document: {
        userId: new ObjectId(userId),
        tokenExpirationDate: new Date(Date.now() + 3600000), // 60 minutes expiration
        createdAt: new Date(),
      },
    },
  }]);

  logInfo(`password reset token created for user ${userId}`);

  return passwordResetToken.insertedIds[0];
};

export const getPasswordResetTokenData = async (token) => {
  const passwordResetTokenData = await collections.passwordResetToken.aggregate([
    {
      $match: {
        _id: new ObjectId(token),
      },
    },
    {
      $limit: 1,
    },
  ]).toArray();

  return passwordResetTokenData[0] || null;
};

export const deletePasswordResetTokens = async (userId) => {
  try {
    const deleteResult = await collections.passwordResetToken.deleteMany({
      userId: new ObjectId(userId),
    });

    return {
      success: true,
      deletedCount: deleteResult.deletedCount,
    };
  } catch (error) {
    return logError(`Token for user ID ${userId} deletion failed`, error);
    // throw error //* NOT throwing an error since req-res
    //*  flow should not be interrupted with this cleanup operation
  }
};

export const deleteExpiredPasswordResetTokens = async () => {
  await collections.passwordResetToken.deleteMany({
    tokenExpirationDate: { $lt: new Date() },
  });
};
