import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logInfo } from '../config/loggerFunctions.mjs';

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
          owner_company_id: true,
        },
      },
    },
  });

  return getEntryDetailsByIdQuery;
};

export const createAnalysisEntryInDb = async (analysisId) => {
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

export const markAnalysisEntryAsSubmittedInDb = async (analysisEntryId) => {
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
    created_at: {
      lt: sixtyMinutesAgo,
    },
  };

  const analysisEntriesMarkedAsCancelledQuery = await prisma.analysisEntries.updateMany({
    where: whereClause,
    data: {
      status: 'cancelled',
    },
  });

  logInfo(`Marked ${analysisEntriesMarkedAsCancelledQuery.count} analysis entries as cancelled automatically`);
};
