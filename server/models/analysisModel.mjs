import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logError } from '../config/loggerFunctions.mjs';

const prisma = new PrismaClient();

export const createAnalysisInDb = async (data) => {
  try {
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
  } catch (error) {
    logError('Error creating analysis in the database', error);
    throw new Error('DatabaseError: Failed to create analysis');
  }
};

export const getAllAnalysesFromDb = async (ownerId, filters = {}) => {
  try {
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
        entries: {
          where: {
            status: 'submitted',
          },
          select: {
            id: true,
          },
        },
      },
    });

    return analyses;
  } catch (error) {
    logError('Error retrieving analyses from the database', error);
    throw new Error('DatabaseError: Failed to retrieve all analyses');
  }
};

export const getAnalysisDataById = async (analysisId) => {
  try {
    const analysis = await prisma.analysis.findUnique({
      where: {
        id: analysisId,
      },
      include: {
        entries: {
          where: {
            status: 'submitted',
          },
          include: {
            user: true,
          },
        },
      },
    });

    return analysis;
  } catch (error) {
    logError('Error getting analysisDetailsById', error);
    throw new Error('DatabaseError: Failed to retrieve analysis');
  }
};
