import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logInfo } from '../config/loggerFunctions.js';

const prisma = new PrismaClient();

export const getEntryDetailsById = async (entryId) => {
  const whereClause = {
    id: entryId,
  };

  const getEntryDetailsByIdQuery = await prisma.analysisEntry.findUnique({
    where: whereClause,
    select: {
      id: true,
      transcription: true,
      Analysis: {
        select: {
          id: true,
          owner_company_id: true,
        },
      },
    },
  });

  return getEntryDetailsByIdQuery;
};

export const createAnalysisEntryInDb = async (analysisId) => {
  const createAnalysisEntryQuery = await prisma.analysisEntry.create({
    data: {
      status: 'in_progress',
      Analysis: {
        connect: {
          id: analysisId,
        },
      },
    },
    select: {
      id: true,
    },
  });

  return createAnalysisEntryQuery;
};

export const updateAnalysisEntryInDb = async (analysisEntryId, status) => {
  const whereClause = {
    id: analysisEntryId,
  };

  const analysisEntryUpdateQuery = await prisma.analysisEntry.update({
    where: whereClause,
    data: {
      status: status,
    },
    select: {
      status: true,
    },
  });

  return analysisEntryUpdateQuery;
};

export const markAnalysisEntriesAsCancelled = async () => {
  const sixtyMinutesAgo = new Date(Date.now() - 60 * 60 * 1000);

  const whereClause = {
    status: 'in_progress',
    created_at: {
      lt: sixtyMinutesAgo,
    },
  };

  const analysisEntriesMarkedAsCancelledQuery = await prisma.analysisEntry.updateMany({
    where: whereClause,
    data: {
      status: 'cancelled',
    },
  });

  if (analysisEntriesMarkedAsCancelledQuery.count > 0) {
    logInfo(`Marked ${analysisEntriesMarkedAsCancelledQuery.count} analysis entries as cancelled automatically`);
  }
};

export const insertAnalysisEntryTranscriptionInDb = async (transcriptionCompletedMessage) => {
  const whereClause = {
    // id: transcriptionCompletedMessage.analysisEntryId,
    id: '040e27d4-d229-4410-936b-d8fdca68b89a',
  };

  const transcriptionInsertion = await prisma.analysisEntry.update({
    where: whereClause,
    data: {
      transcription: transcriptionCompletedMessage.transcriptionData,
    },
    select: {
      id: true,
    },
  });

  return transcriptionInsertion;
};
