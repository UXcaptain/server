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

export const updateStatusSingleTranscriptionJobInDb = async (transcriptionJobId, status) => {
  const whereClause = {
    id: transcriptionJobId,
  };

  await prisma.transcriptionJob.update({
    where: whereClause,
    data: {
      status: status,
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
    },
  });
};

export const getFirstTranscriptionJobFromDbByStatus = async (status) => {
  const whereClause = {
    status: status,
  };

  const pendingTranscriptionJobs = await prisma.transcriptionJob.findFirst({
    where: whereClause,
    select: {
      id: true,
      analysis_entry_id: true,
      language_code: true,
      AnalysisEntry: {
        select: {
          analysis_id: true,
        },
      },
    },
  });

  return pendingTranscriptionJobs;
};
