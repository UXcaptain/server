import { PrismaClient } from '@prisma/client';
import { logError } from '../config/loggerFunctions.mjs';

const prisma = new PrismaClient();

export const createAnalysisInDb = async (data) => {
  try {
    const analysisCreationInDbResponse = await prisma.analysis.create({
      data: {
        analysis_name: data.analysis_name,
        analysis_url: data.analysis_url,
        analysis_status: data.analysis_status,
        analysis_tasks: data.analysis_tasks,
        max_number_of_participants: data.max_number_of_participants,
        owner: {
          connect: {
            id: data.analysis_owner_id,
          },
        },
      },
    });

    return {
      success: true,
      response: analysisCreationInDbResponse,
    };
  } catch (error) {
    logError('Error creating analysis in the database', error);
    throw new Error('Database error during analysis creation');
  }
};

export const getAllAnalysesFromDb = async (ownerId) => {
  try {
    const analyses = await prisma.analysis.findMany({
      where: {
        owner_id: ownerId,
      },
    });

    return analyses;
  } catch (error) {
    logError('Error retrieving analyses from the database', error);
    throw new Error('Database error during analysis retrieval');
  }
};
