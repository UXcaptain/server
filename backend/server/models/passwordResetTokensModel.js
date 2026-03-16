import { ObjectId } from 'mongodb';
import { initializeMongoDB, collections } from '../db/mongodb.js';
import { logError, logInfo } from '../config/loggerFunctions.js';

const getCollection = async () => {
  if (!collections) {
    await initializeMongoDB();
  }
  return collections.passwordResetToken;
};

export const createPasswordResetToken = async (userId) => {
  const collection = await getCollection();

  const tokenExpires = new Date(Date.now() + 3600000);
  const now = new Date();

  const result = await collection.bulkWrite([
    {
      insertOne: {
        document: {
          userId: userId,
          tokenExpires: tokenExpires,
          createdAt: now,
          updatedAt: now,
        },
      },
    },
  ]);

  const insertedId = result.insertedIds[0];

  logInfo(`password reset token created for user ${userId}`);

  return insertedId;
};

export const getPasswordResetTokenData = async (token) => {
  const collection = await getCollection();

  const pipeline = [
    {
      $match: {
        _id: new ObjectId(token),
      },
    },
    {
      $lookup: {
        from: 'user',
        localField: 'userId',
        foreignField: '_id',
        as: 'User',
      },
    },
    {
      $unwind: {
        path: '$User',
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  const [passwordResetTokenData] = await collection.aggregate(pipeline).toArray();

  return passwordResetTokenData || null;
};

export const deletePasswordResetTokens = async (userId) => {
  try {
    const collection = await getCollection();

    const result = await collection.bulkWrite([
      {
        deleteMany: {
          filter: {
            userId: userId,
          },
        },
      },
    ]);

    return {
      deletedCount: result.deletedCount,
    };
  } catch (error) {
    return logError(`Token for user ID ${userId} deletion failed`, error);
  }
};

export const deleteExpiredPasswordResetTokens = async () => {
  const collection = await getCollection();

  const now = new Date();

  const expiredTokens = await collection
    .aggregate([
      {
        $match: {
          tokenExpires: {
            $lt: now,
          },
        },
      },
    ])
    .toArray();

  if (expiredTokens.length === 0) {
    return;
  }

  const bulkOperations = expiredTokens.map((token) => ({
    deleteOne: {
      filter: {
        _id: token._id,
      },
    },
  }));

  await collection.bulkWrite(bulkOperations);
};
