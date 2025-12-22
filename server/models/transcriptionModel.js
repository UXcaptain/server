import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const insertTranscriptionRequestInDb = async (transcriptionRequest) => {
  await prisma.transcriptionJob.create({
    data: {
      analysis_entry_id: transcriptionRequest.analysisEntryId,
      status: 'PENDING',
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
    analysis_entry_id: transcriptionJobName,
  };

  const transcriptionJobDetailsResult = await prisma.transcriptionJob.findUnique({
    where: whereClause,
    select: {
      status: true,
      AnalysisEntry: {
        select: {
          analysis_id: true,
        },
      },
    },
  });

  return transcriptionJobDetailsResult;
};

export const storeNormalizedTranscriptionInDb = async (transcriptionJobName, normalizedTranscriptionJob, transcriptionJobResult) => {
  const whereClause = {
    id: transcriptionJobName,
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
