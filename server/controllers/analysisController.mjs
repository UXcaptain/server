import {
  createAnalysisInDb,
  getAllAnalysesFromDb,
  getAnalysisDataById,
  getAnalysisDataForParticipantsFromDb,
}
  from '../models/analysisModel.mjs';

import { getFromCache, storeInCache, getTTLfromCache } from '../config/valkey.mjs';
import { generatePutAnalysisEntryPresignedUrl } from '../integrations/aws/s3.mjs';
import { createAnalysisEntry } from '../models/analysisEntryModel.mjs';

export const createAnalysis = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      success: false,
      message: 'Analysis could not be created due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  if (!req.user.id) { //* Defensive programming - Its an error because should never happen
    const error = new Error();
    error.name = 'user ID does not exist';
    error.status = 403;
    error.message = 'User ID should have been sent in the request but has not been received';

    throw error;
  }

  const analysisData = {
    name: req.body.name,
    url: req.body.url,
    device: req.body.device,
    status: 'published', //* Default until we allow for drafts
    tasks: req.body.tasks,
    maxNumberOfParticipants: req.body.maxNumberOfParticipants,
    scenario: req.body.scenario || 'No scenario has been provided.',
    owner_id: req.user.id,
  };

  const analysisCreationResponse = await createAnalysisInDb(analysisData);

  return res.status(201).json({
    success: true,
    message: 'analysis created successfully',
    createdAnalysisId: analysisCreationResponse.id,
  });
};

export const getAllAnalyses = async (req, res) => {
  const { id } = req.user;

  if (!req.user.id) { //* Defensive programming - Its an error because should never happen
    const error = new Error();
    error.name = 'user ID does not exist';
    error.status = 403;
    error.message = 'User ID should have been sent in the request but has not been received';

    throw error;
  }

  const filters = req.query;

  const cacheKey = `Analysis-${id}-${JSON.stringify(filters)}`;

  const cachedAnalysis = await getFromCache(cacheKey);

  if (cachedAnalysis) {
    return res.status(200).json({
      success: true,
      cacheKey: cacheKey,
      message: 'analyses retrieved successfully - cache',
      cacheTTL_seconds: await getTTLfromCache(cacheKey),
      analysisCount: JSON.parse(cachedAnalysis).length,
      analyses: JSON.parse(cachedAnalysis),
    });
  }

  const analyses = await getAllAnalysesFromDb(id, filters);

  await storeInCache(cacheKey, analyses, 60 * 5); //* Cache for 5 minutes

  return res.status(200).send({
    success: true,
    message: 'analyses retrieved successfully - DB',
    analysisCount: analyses.length,
    analyses: analyses,
  });
};

export const getSingleAnalysisData = async (req, res) => {
  const { id } = req.params;

  const cacheKey = `analysis-${id}`; // Cache key for the specific analysis

  const cachedAnalysis = await getFromCache(cacheKey);

  if (cachedAnalysis) {
    return res.status(200).json({
      success: true,
      cacheKey: cacheKey,
      message: 'Analysis data successfully retrieved - cache',
      cacheTTL_seconds: await getTTLfromCache(cacheKey),
      analysisData: JSON.parse(cachedAnalysis),
    });
  }

  const analysis = await getAnalysisDataById(id);

  if (!analysis) {
    return res.status(404).json({
      success: false,
      message: 'Analysis not found',
    });
  }

  if (analysis.owner_id !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'You do not have permission to access this analysis.',
    });
  }

  await storeInCache(cacheKey, analysis, 120);

  return res.status(200).json({
    success: true,
    message: 'Analysis details retrieved successfully',
    analysisData: analysis,
  });
};

export const participateInAnalysis = async (req, res) => {
  const { id: analysisId } = req.params;

  const analysisEntry = await createAnalysisEntry(analysisId);

  const analysisDataForParticipants = await getAnalysisDataForParticipantsFromDb(analysisId);

  if (analysisDataForParticipants._count.AnalysisEntries >= analysisDataForParticipants.max_number_of_participants) {
    return res.status(403).json({
      success: false,
      message: 'The maximum number of participants has been reached.',
    });
  }

  const key = `analysis/${analysisId}/analysisEntry/${analysisEntry.id}`;

  const analysisEntryUploadPresignedUrl = await generatePutAnalysisEntryPresignedUrl(key);

  const analysisData = {
    tasks: analysisDataForParticipants.tasks,
    scenario: analysisDataForParticipants.scenario,
    analysisUrl: analysisDataForParticipants.url,
    presignedUploadUrl: analysisEntryUploadPresignedUrl,
  };

  return res.status(200).json({
    success: true,
    message: 'Analysis info retrieved successfully',
    analysisData: analysisData,
  });
};
