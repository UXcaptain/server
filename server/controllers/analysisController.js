import {
  createAnalysisInDb,
  getAllAnalysesFromDb,
  getAnalysisDataById,
  getAnalysisDataForParticipantsFromDb,
}
  from '../models/analysisModel.js';

import { createAnalysisEntryInDb } from '../models/analysisEntryModel.js';

export const createAnalysis = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      success: false,
      message: 'Analysis could not be created due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  const analysisData = {
    name: req.body.name,
    url: req.body.url,
    device: req.body.device,
    status: 'published', //* Default until we allow for drafts
    tasks: req.body.tasks,
    maxNumberOfParticipants: req.body.maxNumberOfParticipants,
    scenario: req.body.scenario || 'No debes adoptar ningún rol específico.', // ! Patched for a fast fix - Should be a null value in the DB
    ownerId: req.user.company_id,
    createdBy: req.user.id,
  };

  const analysisCreationResponse = await createAnalysisInDb(analysisData);

  return res.status(201).json({
    success: true,
    message: 'analysis created successfully',
    createdAnalysisId: analysisCreationResponse.id,
  });
};

export const getAllAnalyses = async (req, res) => {
  const { company_id: companyId } = req.user;

  const filters = req.query;

  const analyses = await getAllAnalysesFromDb(companyId, filters);

  return res.status(200).send({
    success: true,
    message: 'analyses retrieved successfully - DB',
    analysisCount: analyses.length,
    analyses: analyses,
  });
};

export const getSingleAnalysisData = async (req, res) => {
  const { id } = req.params;
  const { company_id: companyId, role } = req.user;

  const analysis = await getAnalysisDataById(id);

  if (!analysis) {
    return res.status(404).json({
      success: false,
      message: 'Analysis not found',
    });
  }

  if (analysis.owner_company_id !== companyId && role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'You do not have permission to access this analysis.',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Analysis details retrieved successfully',
    analysisData: analysis,
  });
};

export const checkAnalysisAvailability = async (req, res) => {
  const { analysisId } = req.body;

  const analysisDataForParticipants = await getAnalysisDataForParticipantsFromDb(analysisId);

  if (analysisDataForParticipants === null) {
    return res.status(404).json({
      success: false,
      message: 'Analysis not found',
    });
  }

  if (analysisDataForParticipants._count.AnalysisEntries >= analysisDataForParticipants.max_number_of_participants) {
    return res.status(403).json({
      success: false,
      message: 'The maximum number of participants has been reached.',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'This analysis is accepting participants',
  });
};

export const participateInAnalysis = async (req, res) => {
  const { analysisId } = req.body;

  const analysisDataForParticipants = await getAnalysisDataForParticipantsFromDb(analysisId);

  if (analysisDataForParticipants._count.AnalysisEntries >= analysisDataForParticipants.max_number_of_participants) {
    return res.status(403).json({
      success: false,
      message: 'The maximum number of participants has been reached.',
    });
  }

  const analysisEntry = await createAnalysisEntryInDb(analysisId);

  const analysisData = {
    tasks: analysisDataForParticipants.tasks,
    scenario: analysisDataForParticipants.scenario,
    analysisUrl: analysisDataForParticipants.url,
  };

  return res.status(200).json({
    success: true,
    message: 'Analysis info retrieved successfully',
    analysisData: analysisData,
    analysisEntryId: analysisEntry.id,
  });
};
