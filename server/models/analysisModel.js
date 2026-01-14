import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logInfo } from '../config/loggerFunctions.js';
import { posthogAnalysisCreated } from './posthogModel.js';

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

  posthogAnalysisCreated(analysisCreationInDbResponse, analysisCreationInDbResponse.id);

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
          AnalysisEntry: {
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
      AnalysisEntry: {
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
          AnalysisEntry: {
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

export const getAvailableAnalysesForParticipant = async (participantProfile) => {
  const availableAnalyses = await prisma.analysis.findMany({
    where: {
      status: 'published',
      recruitment_type: 'panel_provided',
      available_spots: {
        gt: 0,
      },
      device: {
        in: participantProfile.available_devices,
      },
      min_age: {
        gte: participantProfile.age,
      },
      max_age: {
        lte: participantProfile.age,
      },
      gender: participantProfile.gender,
      country: participantProfile.country,
      education_level: participantProfile.education_level,
      min_yearly_income: {
        gte: participantProfile.yearly_income,
      },
      max_yearly_income: {
        lte: participantProfile.yearly_income,
      },
      parental_status: participantProfile.parental_status,
      technical_proficiency: participantProfile.technical_proficiency,
    },
    select: {
      id: true,
    },
  });

  return availableAnalyses;
};
