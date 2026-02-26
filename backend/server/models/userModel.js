import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { posthogUserDeleteAccount, posthogCustomerSignedUp, posthogParticipantSignedUp } from './posthogModel.js';
import {
  logError,
  logInfo,
} from '../config/loggerFunctions.js';
import { initializeMongoDB } from '../db/mongodb.js';

const prisma = new PrismaClient();

const collections = await initializeMongoDB();

export const createCustomerInDB = async (userData) => {
  const date = new Date();

  const user = await collections.user.insertOne({
    email: userData.email,
    companyId: userData.companyId,
    password: userData.password,
    role: userData.role,
    attribution: {
      utmSource: userData.utmSource,
      utmMedium: userData.utmMedium,
      utmCampaign: userData.utmCampaign,
      utmContent: userData.utmContent,
      utmTerm: userData.utmTerm,
      gclid: userData.gclid,
      fbclid: userData.fbclid,
    },
    createdAt: date,
    updatedAt: date,
  });

  logInfo(`${userData.role} ${user.insertedId} created in DB`);

  posthogCustomerSignedUp(user.insertedId, userData); // Fire-and-forget

  return user;
};


export const createParticipantInDb = async (userData) => {
  const date = new Date();

  const user = await collections.user.insertOne({
    email: userData.email,
    companyId: userData.companyId,
    password: userData.password,
    demographics: {},
    role: userData.role,
    attribution: {
      utmSource: userData.utmSource,
      utmMedium: userData.utmMedium,
      utmCampaign: userData.utmCampaign,
      utmContent: userData.utmContent,
      utmTerm: userData.utmTerm,
      gclid: userData.gclid,
      fbclid: userData.fbclid,
    },
    createdAt: date,
    updatedAt: date,
  });

  logInfo(`${userData.role} ${user.insertedId} created in DB`);

  posthogParticipantSignedUp(user.insertedId, userData); // Fire-and-forget

  return user;
};

export const getUserByEmail = async (username) => {
  const cursor = collections.user.aggregate([ // No await here
    {
      $match: {
        email: username,
      },
    },
    {
      $project: {
        _id: 1,
      },
    },
  ]);

  const user = await cursor.next(); // Gets single doc or null
  return user;
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
    return logError(`could not update last login date for userid ${userId}`);
  }
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
