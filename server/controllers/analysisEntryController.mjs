import { generateGetAnalysisEntryPresignedUrl } from '../integrations/aws/s3.mjs';
import { getEntryDetailsById as getAnalysisEntryDetailsById, updateAnalysisEntryDetailsInDB } from '../models/analysisEntryModel.mjs';

export const updateAnalysisEntryDetails = async (req, res) => {
  const { id: analysisEntryId } = req.params;

  const updatedAnalysisEntry = await updateAnalysisEntryDetailsInDB(analysisEntryId);

  return res.status(201).json({
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
