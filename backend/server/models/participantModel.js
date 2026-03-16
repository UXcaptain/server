import { ObjectId } from 'mongodb';
import { initializeMongoDB, collections } from '../db/mongodb.js';
import { logInfo } from '../config/loggerFunctions.js';

const getCollection = async () => {
  if (!collections) {
    await initializeMongoDB();
  }
  return collections.participantProfile;
};

const transformToId = (doc) => {
  if (!doc) return null;
  return {
    _id: doc._id,
    name: doc.name,
    lastName: doc.lastName,
    nif: doc.nif,
    paymentAddress: doc.paymentAddress,
    birthDate: doc.birthDate,
    gender: doc.gender,
    country: doc.country,
    availableDevices: doc.availableDevices,
    educationLevel: doc.educationLevel,
    yearlyIncome: doc.yearlyIncome,
    parentalStatus: doc.parentalStatus,
    technicalProficiency: doc.technicalProficiency,
    approved: doc.approved,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    userId: doc.userId,
  };
};

export const getParticipantProfileFromDb = async (participantId) => {
  const collection = await getCollection();

  const pipeline = [
    {
      $match: {
        userId: participantId,
      },
    },
  ];

  const [participantProfile] = await collection.aggregate(pipeline).toArray();

  return transformToId(participantProfile);
};

export const updateParticipantProfileInDB = async (userId, profileData) => {
  const collection = await getCollection();

  const updateData = {
    ...profileData,
    updatedAt: new Date(),
  };

  const result = await collection.bulkWrite([
    {
      updateOne: {
        filter: { userId: userId },
        update: { $set: updateData },
        upsert: false,
      },
    },
  ]);

  logInfo(`Participant profile updated successfully for User ${userId}`);

  if (result.modifiedCount === 0) {
    return null;
  }

  const [updatedProfile] = await collection
    .aggregate([
      {
        $match: { userId: userId },
      },
    ])
    .toArray();

  return transformToId(updatedProfile);
};
