import { initializeMongoDB } from '../db/mongodb.js';

export const createCompanyInDb = async () => {
  const collections = await initializeMongoDB();

  const date = new Date();

  const company = await collections.company.insertOne({
    name: null,
    subscription: {},
    stripeId: null,
    createdAt: date,
    updatedAt: date,
  });

  return company;
};
