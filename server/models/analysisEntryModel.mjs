import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const getEntryDetailsById = async (entryId) => {
  const whereClause = {
    id: entryId,
  };

  const getEntryDetailsByIdQuery = await prisma.analysisEntries.findUnique({
    where: whereClause,
    select: {
      id: true,
      Analysis: {
        select: {
          id: true,
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

export const updateAnalysisEntryDetailsInDB = async (analysisEntryId) => {
  const whereClause = {
    id: analysisEntryId,
  };

  const analysisEntryUpdateQuery = await prisma.analysisEntries.update({
    where: whereClause,
    data: {
      status: 'submitted',
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
    create_at: {
      lt: sixtyMinutesAgo,
    },
  };

  const analysisEntriesMarkedAsCancelledQuery = await prisma.analysisEntries.updateMany({
    where: whereClause,
    data: {
      status: 'cancelled',
    },
  });

  console.log(analysisEntriesMarkedAsCancelledQuery);
};
