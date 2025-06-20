import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { posthogUserUpdatedPassword, posthogUserDeleteAccount, posthogUserSignedUp } from './posthogModel.mjs';
import {
  logUserCreatedInDB,
  logPasswordUpdated,
  logUserDeleted,
} from '../config/loggerFunctions.mjs';

const prisma = new PrismaClient();

export const createUserInDB = async (user) => {
  const createUserInDbQuery = await prisma.user.create({
    data: {
      email: user.userDetails.email,
      password: user.userDetails.password,
    },
  });

  logUserCreatedInDB(createUserInDbQuery.id, user);

  posthogUserSignedUp(createUserInDbQuery);

  return createUserInDbQuery;
};

export const getUserByEmail = async (userEmail) => {
  const getUserByEmailQuery = await prisma.user.findUnique({
    where: { email: userEmail },
    // omit: { //! Do not uncomment - Needed for passport auth login
    //   password: true,
    // },
  });

  return getUserByEmailQuery;
};

export const updateUserLastLoginDate = async (userId) => {
  const queryResult = await prisma.user.update({
    where: { id: userId },
    data: {
      last_login_at: new Date(),
    },
  });

  return queryResult;
};

export const getUserPassword = async (userId) => {
  const whereClause = {
    id: userId,
  };

  const getUserPasswordQuery = await prisma.user.findUnique({
    where: whereClause,
    select: {
      password: true,
    },
  });

  return getUserPasswordQuery;
};

export const getUserById = async (userId) => {
  const getUserByIdQuery = await prisma.user.findUnique({
    where: { id: userId },
    omit: {
      password: true,
    },
  });

  return getUserByIdQuery;
};

export const updateUserPasswordInDB = async (userId, newPassword) => {
  const updatePasswordQuery = await prisma.user.update({

    where: { id: userId },
    data: {
      password: newPassword,
    },
  });

  logPasswordUpdated(userId);

  posthogUserUpdatedPassword(userId);

  return updatePasswordQuery;
};

export const getAllUsersInDb = async (filters = {}) => {
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
};

export const deleteUserInDb = async (userId) => {
  const deleteUserQuery = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  logUserDeleted(userId);

  posthogUserDeleteAccount(userId);

  return deleteUserQuery;
};
