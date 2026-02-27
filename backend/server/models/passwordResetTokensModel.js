import { ObjectId } from 'mongodb';
import { PrismaClient } from '../config/generated/prisma/client/index.js';

import { logError, logInfo } from '../config/loggerFunctions.js';
import { initializeMongoDB } from '../db/mongodb.js';

const prisma = new PrismaClient();

const collections = await initializeMongoDB();

export const createPasswordResetToken = async (userId) => {
  const passwordResetToken = await collections.passwordResetToken.bulkWrite([{
    insertOne: {
      userId: new ObjectId(userId),
      tokenExpirationDate: new Date(Date.now() + 3600000), // 60 minutes expiration
      createdAt: new Date(),
    },
  }]);

  logInfo(`password reset token created for user ${userId}`);

  return passwordResetToken.insertedIds[0];
};

export const getPasswordResetTokenData = async (token) => {
  const whereClause = {
    id: token,
  };

  const getPasswordResetTokenDataQuery = await prisma.passwordResetTokens.findFirst({
    where: whereClause,
  });

  return getPasswordResetTokenDataQuery;
};

export const deletePasswordResetTokens = async (userId) => {
  try {
    const whereClause = {
      user_id: userId,
    };

    const deleteResult = await prisma.passwordResetTokens.deleteMany({
      where: whereClause,
    });

    return {
      success: true,
      deletedCount: deleteResult.count,
    };
  } catch (error) {
    return logError(`Token for user ID ${userId} deletion failed`, error);
    // throw error //* NOT throwing an error since req-res
    //*  flow should not be interrupted with this cleanup operation
  }
};

export const deleteExpiredPasswordResetTokens = async () => {
  const whereClause = {
    token_expires: {
      lt: new Date(),
    },
  };

  await prisma.passwordResetTokens.deleteMany({
    where: whereClause,
  });
};
