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
  // Validate request data
  if (req.sanitizedErrors && req.sanitizedErrors.length > 0) {
    return res.status(422).json({
      success: false,
      message: 'Request contains validation errors',
      errors: req.sanitizedErrors,
    });
  }

  const userId = req.user.id; // Authenticated user from middleware
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      success: false,
      message: 'Analysis ID not provided',
    });
  }

  const analysisEntryDetails = await getEntryDetailsById(id);

  if (!analysisEntryDetails) {
    return res.status(404).json({
      success: false,
      message: 'Analysis not found',
    });
  }

  if (!analysisEntryDetails.aws_object_key) {
    return res.status(404).json({
      success: false,
      message: 'Analysis does not have a video url',
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
