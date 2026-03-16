import { logError, logInfo } from '../config/loggerFunctions.js';
import { generateS3GetPresignedUrl } from '../integrations/s3-client/s3.js';
import {
  createAnalysisEntryInDb, getAnalysisEntryDetailsById, markAnalysisEntryAsSubmittedById, findExpiredAnalysisEntriesInDb, markAnalysisEntriesAsCancelledInDb,
  getAnalysisDataById,
} from '../models/analysisModel.js';
import { insertTranscriptionJobInDb } from '../models/transcriptionModel.js';
import { checkTranscriptionLimit } from '../models/planModel.js';
import { incrementFeatureUsage } from '../models/usageModel.js';

export const createAnalysisEntry = async (req, res) => {
  const { analysisId, demographics } = req.body;

  try {
    const analysisEntry = await createAnalysisEntryInDb(analysisId, null, demographics);

    return res.status(201).json({
      message: 'Analysis entry created successfully',
      analysisEntryId: analysisEntry._id,
    });
  } catch (error) {
    if (error.message === 'Maximum number of participants (20) reached for this analysis') {
      return res.status(403).json({
        message: error.message,
      });
    }
    if (error.message === 'Analysis not found') {
      return res.status(404).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message: 'Error creating analysis entry',
      error: error.message,
    });
  }
};

export const updateAnalysisEntry = async (req, res) => {
  const { analysisEntryId } = req.body;

  const updatedAnalysisEntry = await markAnalysisEntryAsSubmittedById(analysisEntryId);

  if (!updatedAnalysisEntry) {
    return res.status(404).json({
      message: 'Analysis entry not found',
    });
  }

  const { analysisId } = updatedAnalysisEntry;

  // Check transcription limit before creating transcription job
  const analysisData = await getAnalysisDataById(analysisId);

  if (!analysisData) {
    return res.status(404).json({
      message: 'Analysis not found',
    });
  }

  const ownerCompanyId = analysisData.ownerCompanyId.toString();
  const transcriptionCheck = await checkTranscriptionLimit(ownerCompanyId);

  if (!transcriptionCheck.allowed) {
    logError(`Transcription limit check failed for company ${ownerCompanyId}`, new Error(transcriptionCheck.message));

    // Still mark the analysis entry as submitted, but don't create a transcription job
    return res.status(200).json({
      message: 'Analysis entry updated successfully (transcription skipped due to plan limit)',
      transcriptionSkipped: true,
      transcriptionLimitMessage: transcriptionCheck.message,
    });
  }

  const transcriptionJob = {
    analysisEntryId: analysisEntryId,
    analysisId: analysisId,
    languageCode: 'es',
  };

  try {
    await insertTranscriptionJobInDb(transcriptionJob);
    logInfo(`Transcription job for ${transcriptionJob.analysisEntryId} stored in DB`, transcriptionJob);

    // Increment usage for transcription
    try {
      await incrementFeatureUsage(ownerCompanyId, 'transcription');
    } catch (error) {
      console.error('Error incrementing usage for transcription:', error);
      // Don't fail the transcription job creation if usage tracking fails
    }
  } catch (error) {
    logError(`error inserting ${transcriptionJob.analysisEntryId} analysisEntry's transcription request`, error);
  }

  return res.status(200).json({
    message: 'Analysis entry updated successfully',
  });
};

export const getAnalysisEntryDetails = async (req, res) => {
  const { companyId } = req.user;
  const { analysisId, entryId } = req.params;

  if (!analysisId || !entryId) {
    return res.status(400).json({
      message: 'Analysis ID and entry ID have not been provided',
    });
  }

  const analysisEntryDetails = await getAnalysisEntryDetailsById(analysisId, entryId);

  if (!analysisEntryDetails) {
    return res.status(404).json({
      message: 'Analysis entry not found',
    });
  }

  if (!analysisEntryDetails.ownerCompanyId.equals(companyId)) {
    return res.status(403).json({
      message: 'Access denied',
    });
  }

  const key = `analysis/${analysisId}/${entryId}`;

  const analysisEntryRecordingPresignedUrl = await generateS3GetPresignedUrl(`${key}/recording.mp4`);

  return res.status(200).json({
    message: 'recording & transcription links retrieved successfully',
    analysisEntryGetRecordingPresignedUrl: analysisEntryRecordingPresignedUrl,
    transcriptionSegments: analysisEntryDetails.analysisEntries.transcriptionSegments,
  });
};

export const markAnalysisEntriesAsCancelled = async () => {
  const expiredAnalysisEntries = await findExpiredAnalysisEntriesInDb();

  if (expiredAnalysisEntries.length === 0) {
    return;
  }

  const markedAnalysisEntries = await markAnalysisEntriesAsCancelledInDb(expiredAnalysisEntries);
};
