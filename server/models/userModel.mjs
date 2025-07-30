import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { posthogUserDeleteAccount, posthogUserSignedUp } from './posthogModel.mjs';
import {
  logInfo,
} from '../config/loggerFunctions.mjs';

const prisma = new PrismaClient();

export const createCustomerInDB = async (userData) => {
  const createUserInDbQuery = await prisma.user.create({
    data: {
      email: userData.username,
      password: userData.password,
      role: userData.role,
      CustomerProfile: {
        create: {
        },
      },
    },
  });

  logInfo(`${userData.role} ${createUserInDbQuery.id} created in DB`, createUserInDbQuery);

  posthogUserSignedUp(createUserInDbQuery);

  return createUserInDbQuery;
};

export const createParticipantInDB = async (userData) => {
  const createUserInDbQuery = await prisma.user.create({
    data: {
      email: userData.username,
      password: userData.password,
      role: userData.role,
      ParticipantProfile: {
        create: {
        },
      },
    },
  });

  logInfo(`${userData.role} ${createUserInDbQuery.id} created in DB`, createUserInDbQuery);

  posthogUserSignedUp(createUserInDbQuery);

  return createUserInDbQuery;
};

export const getUserByEmail = async (userEmail) => {
  const whereClause = {
    email: userEmail,
  };

  const getUserByEmailQuery = await prisma.user.findUnique({
    where: whereClause,
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
  const whereClause = {
    id: userId,
  };

  const getUserByIdQuery = await prisma.user.findUnique({
    where: whereClause,
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

  logInfo(`Password updated successfully for User ${userId}`);

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

  logInfo(`User ${userId} succesfully deleted`);

  posthogUserDeleteAccount(userId);

  return deleteUserQuery;
};

export const getUserByStripeCustomerId = async (stripeCustomerId) => {
  const whereClause = {
    stripe_customer_id: stripeCustomerId,
  };

  const user = await prisma.user.findUnique({
    where: whereClause,
  });

  return user;
};

export const getParticipantProfile = async (participantId) => {
  const whereClause = {
    user_id: participantId,
  };

  const participantProfile = await prisma.participantProfile.findUnique({
    where: whereClause,
  });

  return participantProfile;
};

export const getCustomerProfile = async (customerId) => {
  const whereClause = {
    id: customerId,
  };

  const customerProfile = await prisma.user.findUnique({
    where: whereClause,
    select: {
      email: true,
      role: true,
      // CustomerProfile: { //* No point in returning this until we set up the companies model
      //   select: {
      //     company_name: true,
      //   },
      // },
    },
  });

  return customerProfile;
};
