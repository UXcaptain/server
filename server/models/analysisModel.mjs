import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const createAnalysisInDb = async (data) => {
  const analysisCreationInDbResponse = await prisma.analysis.create({
    data: {
      name: data.name,
      url: data.url,
      device: data.device,
      status: data.status,
      tasks: data.tasks,
      max_number_of_participants: data.maxNumberOfParticipants,
      scenario: data.scenario,
      owner: {
        connect: {
          id: data.owner_id,
        },
      },
    },
  });

  return analysisCreationInDbResponse;
};

export const getAllAnalysesFromDb = async (ownerId, filters = {}) => {
  const whereClause = {
    owner_id: ownerId,
    ...filters,
  };

  const analyses = await prisma.analysis.findMany({
    where: whereClause,
    omit: {
      owner_id: true,
      tasks: true,
      scenario: true,
      updated_at: true,
    },
    include: {
      _count: {
        select: {
          entries: {
            where: {
              status: 'submitted',
            },
          },
        },
      },
    },
  });

  return analyses;
};

export const getAnalysisDataById = async (analysisId) => {
  const analysis = await prisma.analysis.findUnique({
    where: {
      id: analysisId,
    },
    omit: {
      owner_id: true,
      id: true,
    },
    include: {
      entries: {
        where: {
          status: 'submitted',
        },
        omit: {
          analysis_id: true,
          user_id: true,
          status: true,
          created_at: true,
        },
      },
    },
  });

  return analysis;
};
