import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const insertTranscriptionRequestInDb = async (transcriptionRequest) => {
  await prisma.transcriptionRequest.create({
    data: {
      analysis_entry_id: transcriptionRequest.analysisEntryId,
      status: 'pending',
      type: transcriptionRequest.mediaType,
      language_code: transcriptionRequest.languageCode,
    },
  });
};

export const updateSingleTranscriptionRequestInDb = async (analysisEntryId) => {
  const whereClause = {
    analysis_entry_id: analysisEntryId,
  };

  await prisma.transcriptionJob.update({
    where: whereClause,
    data: {
      status: 'IN_PROGRESS',
    },
  });
};

export const getCompletedTranscriptions = async () => {
  const db = await connectToMongoDB();

  const transcriptionsCollection = db.collection('transcriptionRequests');

  const completedTranscriptions = await transcriptionsCollection.find({
    publishedToQueue: false,
    status: 'COMPLETED',
  }).toArray();

  return completedTranscriptions;
};

export const getSingleTranscriptionJobDetailsFromDb = async (transcriptionJobDetails) => {
  const db = await connectToMongoDB();

  const transcriptionsCollection = db.collection('transcriptionRequests');

  const transcriptionJobDetailsResult = await transcriptionsCollection.findOne(
    { _id: transcriptionJobDetails },
  );

  return transcriptionJobDetailsResult;
};

export const storeNormalizedTranscriptionInDb = async (transcriptionJobInsertId, normalizedTranscriptionJob, transcriptionJobResult) => {
  const db = await connectToMongoDB();

  const transcriptionsCollection = db.collection('transcriptionRequests');

  const updateResult = await transcriptionsCollection.updateOne(
    { _id: transcriptionJobInsertId },
    {
      $set: {
        status: 'COMPLETED',
        transcriptionData: {
          fullTranscript: transcriptionJobResult.results.transcripts[0].transcript,
          segments: normalizedTranscriptionJob.results.segments,
        },
        updatedAt: new Date(),
        publishedToQueue: false,
      },
    },
  );

  return updateResult;
};

