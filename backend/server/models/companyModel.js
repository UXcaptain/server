import { ObjectId } from 'mongodb';
import { initializeMongoDB } from '../db/mongodb.js';

export const createCompanyInDb = async () => {
  const collections = await initializeMongoDB();
  
  const date = new Date();
  
  // Calculate next month for reset date
  const resetDate = new Date(date);
  resetDate.setMonth(resetDate.getMonth() + 1);
  resetDate.setDate(1);
  resetDate.setHours(0, 0, 0, 0);
  
  const result = await collections.company.bulkWrite([
    {
      insertOne: {
        document: {
          name: null,
          subscription: {},
          stripeId: null,
          usage: {
            transcription: {
              used: 0,
              resetDate: resetDate,
            },
            inviteYourOwnUsers: {
              used: 0,
              resetDate: resetDate,
            },
            panelParticipants: {
              used: 0,
              resetDate: resetDate,
            },
          },
          acquisition: {
            utmSource: null,
            utmMedium: null,
            utmCampaign: null,
            utmContent: null,
            utmTerm: null,
            gclid: null,
            fbclid: null,
          },
          createdAt: date,
          updatedAt: date,
        },
      },
    },
  ]);
  
  const insertedId = result.insertedIds[0];
  
  return { ...result, insertedId };
}; // unused

export const getCompanyById = async (companyId) => {
  const collections = await initializeMongoDB();
  
  const result = await collections.company.aggregate([
    {
      $match: {
        _id: new ObjectId(companyId),
      },
    },
  ]).toArray();
  
  const company = result[0] || null;
  
  return company;
};
