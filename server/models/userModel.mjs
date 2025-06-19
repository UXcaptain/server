import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { posthogUserUpdatedPassword, posthogUserDeleteAccount, posthogUserSignedUp } from './posthogModel.mjs';
import {
  logUserCreatedInDB,
  logError,
  logPasswordUpdated,
} from '../config/loggerFunctions.mjs';

const prisma = new PrismaClient();

export const createUserInDB = async (user) => {
  try {
    const createUserInDbQuery = await prisma.user.create({
      data: {
        email: user.userDetails.email,
        password: user.userDetails.password,
      },
    });

    logUserCreatedInDB(createUserInDbQuery.id, user);

    posthogUserSignedUp(createUserInDbQuery);

    return createUserInDbQuery;
  } catch (error) {
    logError('User creation failed', error);
    throw error;
  }
};

export const getUserByEmail = async (userEmail) => {
  try {
    const getUserByEmailQuery = await prisma.user.findUnique({
      where: { email: userEmail },
      // omit: { //! Do not uncomment - Needed for passport auth login
      //   password: true,
      // },
    });

    return getUserByEmailQuery;
  } catch (error) {
    logError('User retrieval by email failed', error);
    throw error;
  }
};

export const updateUserLastLoginDate = async (userId) => {
  try {
    const queryResult = await prisma.user.update({
      where: { id: userId },
      data: {
        last_login_at: new Date(),
      },
    });

    return queryResult;
  } catch (error) {
    logError(`Last login date update for user ${userId} failed`, error);
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const getUserByIdQuery = await prisma.user.findUnique({
      where: { id: userId },
      omit: {
        password: true,
      },
    });

    return getUserByIdQuery;
  } catch (error) {
    logError(`User Id ${userId} profile retrieval failed`, error);
    throw error;
  }
};

export const updateUserPasswordInDB = async (userId, newPassword) => {
  try {
    const updatePasswordQuery = await prisma.user.update({

      where: { id: userId },
      data: {
        password: newPassword,
      },
    });

    logPasswordUpdated(userId);

    posthogUserUpdatedPassword(userId);

    return updatePasswordQuery;
  } catch (error) {
    logError(`Password update for userId ${userId} failed`, error);
    throw error;
  }
};

export const getAllUsersInDb = async (filters = {}) => {
  try {
    const getAllUsersQuery = await prisma.user.findMany({
      where: filters,
      omit: {
        password: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return getAllUsersQuery;
  } catch (error) {
    logError('Error getting user by user ID', error);
    throw error;
  }
};

export const deleteUserInDb = async (userId) => {
  try {
    const deleteUserQuery = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  logUserDeleted(userId);

    posthogUserDeleteAccount(userId);

    return deleteUserQuery;
  } catch (error) {
    logError(`User ID: ${userId} deletion failed`, error);
    throw error;
  }
};
