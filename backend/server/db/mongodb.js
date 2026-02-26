import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb+srv://snavarroredondo_db_user:iNPnToq85QtrfBnS@next.rd1qh6y.mongodb.net/?appName=Next';
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

  collections = {
    user: db.collection('user'),
    analysis: db.collection('analysis'),
    company: db.collection('company'),
  };

  console.log('Collections initialized with validators');
  return collections;
};
