import {
  createAnalysisInDb,
  getAllAnalysesFromDb,
  getAnalysisDataById,
}
  from '../models/analysisModel.mjs';

import { logError } from '../config/loggerFunctions.mjs';
import { Analysis } from '../utils/classes/Analysis.mjs';

export const createAnalysis = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      success: false,
      message: 'Validation error on createAnalysis',
      errors: req.sanitizedErrors,
    });
  }

  try {
    const analysisOwner = req.user.id;

    const analysis = new Analysis(req.body, analysisOwner);

    const analysisCreationResponse = await createAnalysisInDb(analysis);

    return res.status(201).json({
      success: true,
      message: 'analysis created successfully',
      createdAnalysis: analysisCreationResponse,
    });
  } catch (error) {
    logError('Error in createAnalysis endpoint', error);
    return res.status(500).json({
      success: false,
      message: 'analysis could not be created',
    });
  }
};

export const getAllAnalyses = async (req, res) => {
  try {
    const { id } = req.user;

    const ownerId = id;

    const analyses = await getAllAnalysesFromDb(ownerId);

    return res.status(200).send({
      success: true,
      message: 'analyses retrieved successfully',
      analysisCount: analyses.length,
      analyses: analyses,
    });
  } catch (error) {
    logError('Error in get all analyses endpoint', error);
    return res.status(500).send({
      success: false,
      message: 'analyses could not be retrieved',
    });
  }
};

export const getSinglesAnalysisData = async (req, res) => {
  try {
    const { id } = req.params;

    const analysis = await getAnalysisDataById(id);

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: 'Analysis not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Analysis details retrieved successfully',
      analysisData: analysis,
    });
  } catch (error) {
    logError('Error in analysis details endpoint', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve analysis details',
    });
  }
};
