import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const getEntryDetailsById = async (entryId) => {
  const whereClause = {
    id: entryId,
  };

  const getEntryDetailsByIdQuery = await prisma.analysisEntries.findUnique({
    where: whereClause,
    select: {
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
