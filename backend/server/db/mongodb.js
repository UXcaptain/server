import { MongoClient } from 'mongodb';

// Connection URL
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'uxcaptain-next';

// Create Collections

let db;
let collections;

export const initializeMongoDB = async () => {
  if (collections) {
    return collections;
  }

  await client.connect();
  db = client.db(dbName);

  // ✅ Creates IMMEDIATELY with indexes/validators
  await db.createCollection('user', {
  });

  await db.createCollection('analysis', {
  });

  await db.createCollection('company', {
  });

  await db.createCollection('passwordResetToken', {
  });

  collections = {
    user: db.collection('user'),
    analysis: db.collection('analysis'),
    company: db.collection('company'),
    passwordResetToken: db.collection('passwordResetToken'),
  };

  console.log('Collections created');
  return collections;
};
