import { generateGetAnalysisEntryPresignedUrl } from '../integrations/aws/s3.mjs';
import { createAnalysisEntryInDb, getEntryDetailsById as getAnalysisEntryDetailsById, markAnalysisEntryAsSubmittedInDb } from '../models/analysisEntryModel.mjs';

export const createAnalysisEntry = async (req, res) => {
  const { analysisId } = req.body;

  const analysisEntry = await createAnalysisEntryInDb(analysisId);

  return res.status(201).json({
    success: true,
    message: 'Analysis entry created successfully',
    analysisEntryid: analysisEntry.id,
  });
};

export const updateAnalysisEntry = async (req, res) => {
  const { id: analysisEntryId } = req.body;

  const updatedAnalysisEntry = await markAnalysisEntryAsSubmittedInDb(analysisEntryId);

  return res.status(200).json({
    success: true,
    message: 'Analysis entry updated successfully',
    updatedAnalysisEntry: updatedAnalysisEntry,
  });
};

export const getAnalysisEntryDetails = async (req, res) => {
  const companyId = req.user.company_id; // Authenticated user from middleware
  const { id: analysisEntryId } = req.params;

  if (!analysisEntryId) {
    return res.status(400).json({
      success: false,
      message: 'Analysis entry ID has not been provided',
    });
  }

  const analysisEntryDetails = await getAnalysisEntryDetailsById(analysisEntryId);

  if (!analysisEntryDetails) {
    return res.status(404).json({
      success: false,
      message: 'Analysis not found',
    });
  }

  //* Should never happen, customers dont have access to non-completed analysis entries
  if (analysisEntryDetails.status === 'in_progress') {
    return res.status(403).json({
      success: false,
      message: 'Analysis entry has not been completed yet',
    });
  }

  if (analysisEntryDetails.Analysis.owner_company_id !== companyId) {
    return res.status(403).json({
      success: false,
      message: 'Access denied',
    });
  }

  const key = `analysis/${analysisEntryDetails.Analysis.id}/analysisEntry/${analysisEntryDetails.id}`;

  const analysisEntryPresignedUrl = await generateGetAnalysisEntryPresignedUrl(key);

  return res.status(200).json({
    success: true,
    analysisEntryPresignedUrl: analysisEntryPresignedUrl,
  });
};

export const getAnalysisEntryPresignedUploadUrl = async (req, res) => {
  const { analysisEntryId, analysisId } = req.body;

  const key = `analysis/${analysisId}/analysisEntry/${analysisEntryId}`;

  const analysisEntryPresignedUrl = await generateGetAnalysisEntryPresignedUrl(key);

  return res.status(200).json({
    success: true,
    message: 'PresignedUploadUrl retrieved successfully',
    analysisEntryPresignedUploadUrl: analysisEntryPresignedUrl,
  });
};
