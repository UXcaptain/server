import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const getEntryDetailsById = async (entryId) => {
  const whereClause = {
    id: entryId,
  };

  const getEntryDetailsByIdQuery = await prisma.analysisEntries.findUnique({
    where: whereClause,
    select: {
      analysis_id: true,
      aws_object_key: true,
      Analysis: {
        select: {
          owner_id: true,
        },
      },
    },
  });

  return getEntryDetailsByIdQuery;
};

export const createAnalysisEntry = async (analysisId) => {
  const createAnalysisEntryQuery = await prisma.analysisEntries.create({
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

export const updateAnalysisEntryDetailsInDB = async (analysisEntryId, awsObjectKey) => {
  const whereClause = {
    id: analysisEntryId,
  };

  const analysisEntryUpdateQuery = await prisma.analysisEntries.update({
    where: whereClause,
    data: {
      aws_object_key: awsObjectKey,
      status: 'submitted',
    },
  });

  return analysisEntryUpdateQuery;
};

export const markAnalysisEntriesAsCancelled = async () => {
  const sixtyMinutesAgo = new Date(Date.now() - 60 * 60 * 1000);

  const whereClause = {
    status: 'in_progress',
    create_at: {
      lt: sixtyMinutesAgo,
    },
  };

  prisma.analysisEntries.updateMany({
    where: whereClause,
    data: {
      status: 'cancelled',
    },
  });
};
