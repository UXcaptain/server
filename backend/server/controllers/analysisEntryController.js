import { logError, logInfo } from '../config/loggerFunctions.js';
import { generateS3GetPresignedUrl } from '../integrations/s3-client/s3.js';
import {
  createAnalysisEntryInDb, findExpiredAnalysisEntriesInDb, getAnalysisEntryDetailsById, markAnalysisEntriesAsCancelledInDb, markAnalysisEntryAsSubmitted,
} from '../models/analysisEntryModel.js';
import { insertTranscriptionJobInDb } from '../models/transcriptionModel.js';

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
  const { analysisEntryId } = req.body;

  const updatedAnalysisEntry = await markAnalysisEntryAsSubmitted(analysisEntryId);

  const transcriptionJob = {
    analysisEntryId: analysisEntryId,
    analysisId: updatedAnalysisEntry.analysis_id,
    languageCode: 'es',
  };

  try {
    await insertTranscriptionJobInDb(transcriptionJob);
    logInfo(`Transcription job for ${transcriptionJob.analysisEntryId} stored in DB`, transcriptionJob);
  } catch (error) {
    logError(`error inserting ${transcriptionJob.analysisEntryId} analysisEntry's transcription request`, error);
  }

  return res.status(200).json({
    message: 'Analysis entry updated successfully',
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

  if (analysisEntryDetails.Analysis.owner_company_id !== companyId) {
    return res.status(403).json({
      success: false,
      message: 'Access denied',
    });
  }

  const key = `analysis/${analysisEntryDetails.Analysis.id}/${analysisEntryDetails.id}`;

  const analysisEntryRecordingPresignedUrl = await generateS3GetPresignedUrl(`${key}/recording.mp4`);

  return res.status(200).json({
    message: 'recording & transcription links retrieved successfully',
    analysisEntryGetRecordingPresignedUrl: analysisEntryRecordingPresignedUrl,
    transcriptionSegments: analysisEntryDetails.transcription_segments,
  });
};

export const markAnalysisEntriesAsCancelled = async () => {
  const expiredAnalysisEntries = await findExpiredAnalysisEntriesInDb();

  if (expiredAnalysisEntries.length === 0) {
    console.log('No expired analysis entries found');
    return;
  }

  // Helper function to group entries by analysis_id - returns array of [analysisId, count] pairs
  const groupEntriesByAnalysisId = (entries) => {
    const grouped = entries.reduce((acc, entry) => {
      acc[entry.analysis_id] = (acc[entry.analysis_id] || 0) + 1;
      return acc;
    }, {});

    // Convert object to array of [key, value] pairs
    // analysis_id is a String (UUID), not a number
    return Object.entries(grouped).map(([analysisId, count]) => [
      analysisId,
      count,
    ]);
  };

  const groupedEntries = groupEntriesByAnalysisId(expiredAnalysisEntries);

  console.log(groupedEntries);

  const markedAnalysisEntries = await markAnalysisEntriesAsCancelledInDb(expiredAnalysisEntries, groupedEntries);

  if (markedAnalysisEntries.count > 0) {
    console.log(`Marked ${markedAnalysisEntries.count} analysis entries as cancelled automatically`);
  }
};
