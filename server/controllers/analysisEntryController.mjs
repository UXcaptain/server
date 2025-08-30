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

//     "message": "\nInvalid `prisma.analysisEntries.findUnique()` invocation:\n\n{\n  where: {\n    id: \"4a197cf4-f604-41e3-b811-3d42d0f2d22d\"\n  },\n  select: {\n    id: true,\n    Analysis: {\n      select: {\n        id: true,\n        owner_id: true,\n        ~~~~~~~~\n?       owner_company_id?: true,\n?       device?: true,\n?       name?: true,\n?       scenario?: true,\n?       created_by?: true,\n?       tasks?: true,\n?       url?: true,\n?       status?: true,\n?       created_at?: true,\n?       updated_at?: true,\n?       max_number_of_participants?: true,\n?       Company?: true,\n?       User?: true,\n?       AnalysisEntries?: true,\n?       _count?: true\n      }\n    }\n  }\n}\n\nUnknown field `owner_id` for select statement on model `Analysis`. Available options are marked with ?."
