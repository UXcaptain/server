import { ObjectId } from 'mongodb';
import { initializeMongoDB } from '../db/mongodb.js';

let collections;

const getCollections = async () => {
  if (!collections) {
    collections = await initializeMongoDB();
  }
  return collections;
};

export const insertTranscriptionJobInDb = async (transcriptionRequest) => {
  const { transcriptionJob } = await getCollections();

  const doc = {
    analysisEntryId: new ObjectId(transcriptionRequest.analysisEntryId),
    analysisId: new ObjectId(transcriptionRequest.analysisId),
    status: 'pending',
    languageCode: transcriptionRequest.languageCode,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await transcriptionJob.bulkWrite([
    { insertOne: { document: doc } },
  ]);
};

export const getPendingTranscriptionJobFromDb = async () => {
  const { transcriptionJob } = await getCollections();

  const job = await transcriptionJob.findOneAndUpdate(
    { status: 'pending' },
    { $set: { status: 'inProgress', updatedAt: new Date() } },
    { returnDocument: 'after' }
  );

  if (!job) {
    return null;
  }

  return job;
};

export const updateStatusSingleTranscriptionJobInDb = async (transcriptionJobId, status) => {
  const { transcriptionJob } = await getCollections();

  await transcriptionJob.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(transcriptionJobId) },
        update: { $set: { status, updatedAt: new Date() } },
      },
    },
  ]);
};

export const storeNormalizedTranscriptionInDb = async (analysisId, analysisEntryId, fullText, normalizedSegments) => {
  const { insertAnalysisEntryTranscriptionInDb } = await import('./analysisModel.js');
  
  return await insertAnalysisEntryTranscriptionInDb(analysisId, analysisEntryId, {
    fullTranscript: fullText,
    transcriptionSegments: normalizedSegments,
  });
};
