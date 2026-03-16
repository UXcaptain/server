import { ObjectId } from 'mongodb';
import {
  createAnalysisInDb,
  getAllAnalysesFromDb,
  getAnalysisDataById,
  getAnalysisDataForParticipantsFromDb,
  getAvailableAnalysesForParticipant,
  createAnalysisEntryInDb,
}
  from '../models/analysisModel.js';

import { generateS3PutPresignedUrl } from '../integrations/s3-client/s3.js';
import { getParticipantProfileFromDb } from '../models/participantModel.js';
import { incrementFeatureUsage } from '../models/usageModel.js';

export const createAnalysis = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      message: 'Analysis could not be created due to validation errors',
      errors: req.sanitizedErrors,
    });
  }
  const { companyId } = req.user;

  const analysisCreationResponse = await createAnalysisInDb(req.body, req.user);

  // Increment usage for inviteYourOwnUsers
  // try {
  //   await incrementFeatureUsage(companyId, 'inviteYourOwnUsers');
  // } catch (error) {
  //   console.error('Error incrementing usage for inviteYourOwnUsers:', error);
  //   // Don't fail the analysis creation if usage tracking fails
  // }

  return res.status(201).json({
    message: 'analysis created successfully',
    createdAnalysisId: analysisCreationResponse._id,
  });
};

export const getAllAnalyses = async (req, res) => {
  const { companyId } = req.user;

  const filters = req.query;

  const analyses = await getAllAnalysesFromDb(companyId, filters);

  return res.status(200).send({
    message: 'analyses retrieved successfully - DB',
    analysisCount: analyses.length,
    analyses: analyses,
  });
};

export const getSingleAnalysisData = async (req, res) => {
  const { id } = req.params;
  const { companyId, role } = req.user;

  const analysis = await getAnalysisDataById(id);

  if (!analysis) { 
    return res.status(404).json({
      message: 'Analysis not found',
    });
  }

  if (!analysis.ownerCompanyId.equals(companyId) && role !== 'admin') {
    return res.status(403).json({
      message: 'You do not have permission to access this analysis.',
    });
  }

  return res.status(200).json({
    message: 'Analysis details retrieved successfully',
    analysisData: analysis,
  });
};

export const participateInAnalysis = async (req, res) => {
  const { analysisId, demographics } = req.body;

  let userId;

  if (req.user) {
    userId = req.user.id;
  }

  const analysisDataForParticipants = await getAnalysisDataForParticipantsFromDb(analysisId);

  if (!analysisDataForParticipants) {
    return res.status(404).json({
      message: 'Analysis not found',
    });
  }

  if (analysisDataForParticipants.availableSpots <= 0) {
    return res.status(403).json({
      message: 'The maximum number of participants has been reached.',
    });
  }

  const analysisEntry = await createAnalysisEntryInDb(analysisId, userId, demographics);

  const analysisData = {
    tasks: analysisDataForParticipants.tasks,
    scenario: analysisDataForParticipants.generalDetails?.scenario,
    analysisUrl: analysisDataForParticipants.generalDetails?.url,
  };

  const key = `analysis/${analysisId}/${analysisEntry._id}/recording.mp4`;

  const s3PresignedUrl = await generateS3PutPresignedUrl(key);

  return res.status(200).json({
    message: 'You have successfully joined the analysis',
    analysisEntryId: analysisEntry._id,
    analysisData,
    s3PresignedUrl,
  });
};

export const getAvailableAnalyses = async (req, res) => {
  const userId = req.user._id;

  const participantProfile = await getParticipantProfileFromDb(userId);

  const availableAnalyses = await getAvailableAnalysesForParticipant(participantProfile);

  return res.status(200).send({
    message: 'Available analyses retrieved successfully',
    analyses: availableAnalyses,
  });
};
