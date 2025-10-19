import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logInfo } from '../config/loggerFunctions.mjs';
// import { posthogAnalysisCreated } from './posthogModel.mjs';

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
      User: {
        connect: {
          id: analysisData.createdBy,
        },
      },
      Company: {
        connect: {
          id: analysisData.ownerId,
        },
      },
    },
  });

  logInfo(`analysis ${analysisCreationInDbResponse.id} created in db`, analysisData);

  // posthogAnalysisCreated(analysisData); // TODO -- think how to set the events in posthog

  return analysisCreationInDbResponse;
};

export const getAllAnalysesFromDb = async (ownerId, filters = {}) => {
  const whereClause = {
    owner_company_id: ownerId,
    ...filters,
  };

  const analyses = await prisma.analysis.findMany({
    where: whereClause,
    select: {
      id: true,
      device: true,
      name: true,
      url: true,
      status: true,
      created_at: true,
      max_number_of_participants: true,
      _count: {
        select: {
          AnalysisEntries: {
            where: {
              status: {
                in: ['submitted', 'accepted'],
              },
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
    include: {
      AnalysisEntries: {
        where: {
          status: {
            in: ['submitted', 'accepted'],
          },
        },
        select: {
          id: true,
          updated_at: true,
        },
      },
    },
  });

  return analysis;
};

export const getAnalysisDataForParticipantsFromDb = async (analysisId) => {
  const whereClause = {
    id: analysisId,
  };

  const analysisDataForParticipants = await prisma.analysis.findUnique({
    where: whereClause,
    select: {
      tasks: true,
      url: true,
      status: true,
      scenario: true,
      max_number_of_participants: true,
      _count: {
        select: {
          AnalysisEntries: {
            where: {
              status: {
                in: ['in_progress', 'submitted', 'accepted'],
              },
            },
          },
        },
      },
    },
  });

  return analysisDataForParticipants;
};
