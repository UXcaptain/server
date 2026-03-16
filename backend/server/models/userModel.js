import { ObjectId } from 'mongodb';
import { posthogUserDeleteAccount, posthogCustomerSignedUp, posthogParticipantSignedUp } from './posthogModel.js';
import {
  logError,
  logInfo,
} from '../config/loggerFunctions.js';
import { initializeMongoDB } from '../db/mongodb.js';

const collections = await initializeMongoDB();

export const createCustomerInDB = async (userData) => {
  const date = new Date();

  const result = await collections.user.bulkWrite([{ insertOne: { document: {
    email: userData.email,
    companyId: userData.companyId,
    password: userData.password,
    role: userData.role,
    createdAt: date,
    updatedAt: date,
  } } }]);

  const insertedId = result.insertedIds[0];
  logInfo(`${userData.role} ${insertedId} created in DB`);

  posthogCustomerSignedUp(insertedId, userData); // Fire-and-forget

  return result;
};

export const createParticipantInDb = async (userData) => {
  const date = new Date();

  const result = await collections.user.bulkWrite([{ insertOne: { document: {
    email: userData.email,
    companyId: userData.companyId,
    password: userData.password,
    demographics: {},
    role: userData.role,
    createdAt: date,
    updatedAt: date,
  } } }]);

  const insertedId = result.insertedIds[0];
  logInfo(`${userData.role} ${insertedId} created in DB`);

  posthogParticipantSignedUp(insertedId, userData); // Fire-and-forget

  return result;
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
    const date = new Date();

    return await collections.user.bulkWrite([
      {
        updateOne: {
          filter: { _id: new ObjectId(userId) },
          update: { $set: { lastLoginAt: date } },
        },
      },
    ]);
  } catch (error) {
    return logError(`could not update last login date for userid ${userId}`);
  }
};

export const getUserAuthDetailsByEmail = async (email) => {
  const cursor = collections.user.aggregate([
    {
      $match: {
        email: email,
      },
    },
    {
      $project: {
        _id: 1,
        email: 1,
        password: 1,
        role: 1,
        companyId: 1,
      },
    },
  ]);

  const user = await cursor.next(); // Gets single doc or null

  return user;
};

export const getUserAuthDetailsById = async (userId) => {
  const cursor = collections.user.aggregate([
    {
      $match: {
        _id: new ObjectId(userId),
      },
    },
    {
      $project: {
        password: 1,
      },
    },
  ]);

  const user = await cursor.next(); // Gets single doc or null

  return user;
};

export const getUserById = async (userId) => {
  const cursor = collections.user.aggregate([
    {
      $match: {
        _id: new ObjectId(userId),
      },
    },
    {
      $project: {
        _id: 1,
        email: 1,
        role: 1,
        companyId: { $cond: { if: { $eq: ['$companyId', null] }, then: null, else: '$companyId' } },
      },
    },
  ]);

  const user = await cursor.next();

  return user;
};

export const updateUserPasswordInDB = async (userId, newPassword) => {
  await collections.user.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(userId) },
        update: { $set: { password: newPassword } },
      },
    },
  ]);

  logInfo(`Password updated successfully for User ${userId}`);
};

export const getAllUsersInDb = async (filters = {}) => {
  const cursor = collections.user.aggregate([
    {
      $match: filters,
    },
    {
      $project: {
        _id: 1,
        email: 1,
        role: 1,
        companyId: 1,
        createdAt: '$createdAt',
        updatedAt: '$updatedAt',
        lastLoginAt: 1,
        attribution: 1,
        demographics: 1,
      },
    },
    {
      $sort: { createdAt: -1 },
    },
  ]);

  const users = await cursor.toArray();
  return users;
};

export const deleteUserInDb = async (userId) => {
  const result = await collections.user.bulkWrite([{ deleteOne: { filter: {
    _id: new ObjectId(userId),
  } } }]);

  logInfo(`User ${userId} succesfully deleted`);

  posthogUserDeleteAccount(userId);

  return result;
};

export const getUserByStripeCustomerId = async (stripeCustomerId) => {
  const cursor = collections.user.aggregate([
    {
      $match: {
        stripeCustomerId: stripeCustomerId,
      },
    },
    {
      $project: {
        _id: 1,
        email: 1,
        role: 1,
        companyId: 1,
        createdAt: 1,
        updatedAt: 1,
        lastLoginAt: 1,
        attribution: 1,
        demographics: 1,
        stripeCustomerId: 1,
      },
    },
  ]);

  const user = await cursor.next();

  return user;
};

export const getCustomerProfile = async (customerId) => {
  const cursor = collections.user.aggregate([
    {
      $match: {
        _id: new ObjectId(customerId),
      },
    },
    {
      $project: {
        _id: 1,
        email: 1,
        role: 1,
      },
    },
  ]);

  const customerProfile = await cursor.next();

  return customerProfile;
};

export const getUserWithAcquisition = async (userId) => {
  const collections = await initializeMongoDB();

  const result = await collections.user.aggregate([
    {
      $match: {
        _id: new ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: 'company',
        localField: 'companyId',
        foreignField: '_id',
        as: 'company',
      },
    },
    {
      $project: {
        _id: 1,
        email: 1,
        role: 1,
        companyId: 1,
        'company.acquisition.utmSource': 1,
        'company.acquisition.utmMedium': 1,
        'company.acquisition.utmCampaign': 1,
        'company.acquisition.utmContent': 1,
        'company.acquisition.utmTerm': 1,
        'company.acquisition.gclid': 1,
        'company.acquisition.fbclid': 1,
      },
    },
  ]).toArray();

  const user = result[0] || null;

  return user;
};
