import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const insertTranscriptionJobInDb = async (transcriptionRequest) => {
  await prisma.transcriptionJob.create({
    data: {
      analysis_entry_id: transcriptionRequest.analysisEntryId,
      status: 'PENDING',
      language_code: transcriptionRequest.languageCode,
    },
  });
};

export const markInProgressSingleTranscriptionJobInDb = async (analysisEntryId) => {
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

export const storeNormalizedTranscriptionInDb = async (analysisEntryId, fullText, normalizedSegments) => {
  const whereClause = {
    id: analysisEntryId,
  };

  await prisma.analysisEntry.update({
    where: whereClause,
    data: {
      full_transcript: fullText,
      transcription_segments: normalizedSegments,
      transcriptionJob: {
        update: {
          status: 'COMPLETED',
        },
      },
    },
  });
};

export const getPendingTranscriptionJobsFromDb = async () => {
  const whereClause = {
    status: 'PENDING',
  };

  const pendingTranscriptionJobs = await prisma.transcriptionJob.findMany({
    where: whereClause,
    select: {
      analysis_entry_id: true,
      language_code: true,
      AnalysisEntry: {
        select: {
          analysis_id: true,
        },
      },
    },
    take: 10,
  });

  return pendingTranscriptionJobs;
};
