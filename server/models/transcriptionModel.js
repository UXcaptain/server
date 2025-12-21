import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const insertTranscriptionRequestInDb = async (transcriptionRequest) => {
  await prisma.transcriptionJob.create({
    data: {
      analysis_entry_id: transcriptionRequest.analysisEntryId,
      status: 'pending',
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

export const getSingleTranscriptionJobDetailsFromDb = async (transcriptionJobName) => {
  const whereClause = {
    id: transcriptionJobName,
  };

  const transcriptionJobDetailsResult = await prisma.analysisEntry.findUnique({
    where: whereClause,
    select: {
      analysis_id: true,
      transcriptionJob: {
        select: {
          status: true,
        },
      },
    },
  });

  return transcriptionJobDetailsResult;
};

export const storeNormalizedTranscriptionInDb = async (transcriptionJobName, normalizedTranscriptionJob, transcriptionJobResult) => {
  const whereClause = {
    analysis_entry_id: transcriptionJobName,
  };

  await prisma.analysisEntry.update({
    where: whereClause,
    data: {
      full_transcript: transcriptionJobResult.results.transcripts[0].transcript,
      transcription_segments: normalizedTranscriptionJob.results.segments,
      transcriptionJob: {
        update: {
          status: 'COMPLETED',
        },
      },
    },
  });
};
