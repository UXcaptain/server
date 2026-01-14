import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logInfo } from '../config/loggerFunctions.js';

const prisma = new PrismaClient();

export const getAnalysisEntryDetailsById = async (entryId) => {
  const whereClause = {
    id: entryId,
  };

  const getEntryDetailsByIdQuery = await prisma.analysisEntry.findUnique({
    where: whereClause,
    select: {
      id: true,
      transcription_segments: true,
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

export const createAnalysisEntryInDb = async (analysisId, userId) => {
  const createAnalysisEntryQuery = await prisma.analysisEntry.create({
    data: {
      status: 'in_progress',
      Analysis: {
        connect: {
          id: analysisId,
        },
      },
      ...(userId && {
        ParticipantProfile: {
          connect: {
            user_id: userId,
          },
        },
      }),
    },
    select: {
      id: true,
    },
  });

  return createAnalysisEntryQuery;
};

export const markAnalysisEntryAsSubmitted = async (analysisEntryId) => {
  const whereClause = {
    id: analysisEntryId,
  };

  const analysisEntryUpdateQuery = await prisma.analysisEntry.update({
    where: whereClause,
    data: {
      status: 'submitted',
    },
    select: {
      analysis_id: true,
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
    id: transcriptionCompletedMessage.analysisEntryId,
  };

  const transcriptionInsertion = await prisma.analysisEntry.update({
    where: whereClause,
    data: {
      transcription_segments: transcriptionCompletedMessage.transcriptionSegments,
      full_transcript: transcriptionCompletedMessage.fullTranscript,
    },
    select: {
      id: true,
    },
  });

  return transcriptionInsertion;
};
