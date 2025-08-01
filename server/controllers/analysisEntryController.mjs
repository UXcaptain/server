import { generateGetAnalysisEntryPresignedUrl } from '../integrations/aws/s3.mjs';
import { getEntryDetailsById, updateAnalysisEntryDetailsInDB } from '../models/analysisEntryModel.mjs';

export const updateAnalysisEntryDetails = async (req, res) => {
  const { id: analysisId } = req.params;

  const { awsObjectKey } = req.body;

  const updatedAnalysisEntry = await updateAnalysisEntryDetailsInDB(analysisId, awsObjectKey);

  return res.status(201).json({
    success: true,
    message: 'Analysis entry updated successfully',
    updatedAnalysisEntry: updatedAnalysisEntry,
  });
};

export const getAnalysisEntryDetails = async (req, res) => {
  const userId = req.user.id; // Authenticated user from middleware
  const { id: analysisId } = req.params;

  if (!analysisId) {
    return res.status(400).json({
      success: false,
      message: 'Analysis entry ID has not been provided',
    });
  }

  const analysisEntryDetails = await getEntryDetailsById(analysisId);

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

  //* Should never happen, if analysis is completed but has no video url, it means there was an error while uploading the video
  if (!analysisEntryDetails.aws_object_key) {
    return res.status(404).json({
      success: false,
      message: 'Analysis entry does not have a video url',
    });
  }

  if (analysisEntryDetails.Analysis.owner_id !== userId) {
    return res.status(403).json({
      success: false,
      message: 'Access denied',
    });
  }

  const key = `analysis/${analysisEntryDetails.analysis_id}/analysisEntry/${analysisEntryDetails.id}`;

  const analysisEntryPresignedUrl = await generateGetAnalysisEntryPresignedUrl(key);

  return res.status(200).json({
    success: true,
    analysisEntryPresignedUrl: analysisEntryPresignedUrl,
  });
};
