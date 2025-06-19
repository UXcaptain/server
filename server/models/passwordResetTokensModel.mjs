import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logError } from '../config/loggerFunctions.mjs';

const prisma = new PrismaClient();

export const createPasswordResetToken = async (userId) => {
  const createPasswordResetTokenQuery = await prisma.password_reset_tokens.create({
    data: {
      user_id: userId,
      token_expires: new Date(Date.now() + 3600000),
    },
  });

  return createPasswordResetTokenQuery;
};

export const getPasswordResetTokenData = async (token) => {
  const getPasswordResetTokenDataQuery = await prisma.password_reset_tokens.findFirst({
    where: {
      id: token,
    },
  });

  return getPasswordResetTokenDataQuery;
};

export const deletePasswordResetTokens = async (userId) => {
  try {
    const deleteResult = await prisma.password_reset_tokens.deleteMany({
      where: {
        user_id: userId,
      },
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
  await prisma.password_reset_tokens.deleteMany({
    where: {
      token_expires: {
        lt: new Date(),
      },
    },
  });
};
