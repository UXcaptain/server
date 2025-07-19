import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const createAnalysisInDb = async (analysisData) => {
  console.log(analysisData);

  const analysisCreationInDbResponse = await prisma.analysis.create({
    data: {
      name: analysisData.name,
      url: analysisData.url,
      device: analysisData.device,
      status: analysisData.status,
      tasks: analysisData.tasks,
      max_number_of_participants: analysisData.maxNumberOfParticipants,
      scenario: analysisData.scenario,
      owner: {
        connect: {
          id: analysisData.owner_id,
        },
      },
    },
  });

  // TODO -- add posthog event

  // TODO -- add logs for analysis creation

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

  // TODO - add logs for analysis retrieved
  // TODO - add logs for analysis retrieved

  return analysis;
};
