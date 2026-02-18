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
  const [createAnalysisEntry, decrementAvailableSpotsInAnalysis] = await prisma.$transaction([

    prisma.analysisEntry.create({
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
    }),

    prisma.analysis.update({
      where: {
        id: analysisId,
      },
      data: {
        available_spots: {
          decrement: 1,
        },
      },
    }),
  ]);

  return createAnalysisEntry;
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

export const findExpiredAnalysisEntriesInDb = async () => {
  const sixtyMinutesAgo = new Date(Date.now() - 60 * 60 * 1000);

  const whereClause = {
    status: 'in_progress',
    created_at: {
      lt: sixtyMinutesAgo,
    },
  };

  const expiredAnalysisEntriesQuery = await prisma.analysisEntry.findMany({
    where: whereClause,
    select: {
      id: true,
      analysis_id: true,
    },
  });

  return expiredAnalysisEntriesQuery;
};

export const markAnalysisEntriesAsCancelledInDb = async (expiredAnalysisEntries, groupedEntries) => {
  const markedAnalysisEntries = await prisma.$transaction(
    async (tx) => {
      // Update all entries to cancelled
      const markedEntries = await tx.analysisEntry.updateMany({
        where: {
          id: {
            in: expiredAnalysisEntries.map((entry) => entry.id),
          },
        },
        data: {
          status: 'cancelled',
        },
      });

      // Update each analysis's available_spots by the count of entries
      // groupedEntries is [[analysisId, count], ...]
      await Promise.all(groupedEntries.map(([analysisId, count]) => tx.analysis.update({
        where: { id: analysisId },
        data: {
          available_spots: {
            increment: count,
          },
        },
      })));

      return markedEntries;
    },
  );

  return markedAnalysisEntries;
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
