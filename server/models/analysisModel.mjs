import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logInfo } from '../config/loggerFunctions.mjs';
import { posthogAnalysisCreated } from './posthogModel.mjs';

const prisma = new PrismaClient();

export const createAnalysisInDb = async (analysisData) => {
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

  logInfo(`analysis ${analysisCreationInDbResponse.id} created in db`, analysisData);

  posthogAnalysisCreated(analysisData);

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

  //* No need for logs or posthog event

  return analysis;
};
