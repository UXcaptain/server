import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logInfo } from '../config/loggerFunctions.js';
import { posthogAnalysisCreated } from './posthogModel.js';

const prisma = new PrismaClient();

export const createAnalysisInDb = async (analysisData, userData) => {
  const analysisCreationInDbResponse = await prisma.analysis.create({
    data: {
      name: analysisData.name,
      url: analysisData.url,
      device: analysisData.device,
      status: 'published',
      tasks: analysisData.tasks,
      max_number_of_participants: analysisData.maxNumberOfParticipants,
      scenario: null,
      recruitment_type: analysisData.recruitmentType,
      min_age: analysisData.minAge,
      max_age: analysisData.maxAge,
      gender: analysisData.gender,
      country: analysisData.country,
      education_level: analysisData.educationLevel,
      min_yearly_income: analysisData.minYearlyIncome,
      max_yearly_income: analysisData.maxYearlyIncome,
      technical_proficiency: analysisData.technicalProficiency,
      parental_status: analysisData.parentalStatus,
      available_spots: analysisData.maxNumberOfParticipants,
      User: {
        connect: {
          id: userData.id,
        },
      },
      Company: {
        connect: {
          id: userData.company_id,
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
      recruitment_type: 'PANEL_PROVIDED',
      available_spots: {
        gt: 0,
      },
      device: {
        in: participantProfile.available_devices,
      },
      // min_age: {
      //   // gte: 1, // FIX
      //   gte: participantProfile.age, // !FIX - this shouldnt work
      // },
      // max_age: {
      //   // lte: 100, // FIX
      //   lte: participantProfile.age, // !FIX - this shouldnt work -- change it to birthdate
      // },
      // gender: {
      //   in: [participantProfile.gender, 'ANY'].filter(Boolean),
      // },
      // country: {
      //   in: [participantProfile.country, 'ANY'].filter(Boolean),
      // },
      // education_level: {
      //   in: [participantProfile.education_level, 'ANY'].filter(Boolean),
      // },
      // min_yearly_income: {
      //   gte: participantProfile.yearly_income,
      // },
      // max_yearly_income: {
      //   lte: participantProfile.yearly_income,
      // },
      // parental_status: {
      //   in: [participantProfile.parental_status, 'ANY'].filter(Boolean),
      // },
      // technical_proficiency: {
      //   in: [participantProfile.technical_proficiency, 'ANY'].filter(Boolean),
      // },
    },
    select: {
      id: true,
    },
  });

  return availableAnalyses;
};
