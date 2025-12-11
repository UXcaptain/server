import { logError } from '../config/loggerFunctions.js';
import { publishToTranscriptionRequestedQueue } from '../config/messageBroker/LavinMQ.js';
import { generateS3GetPresignedUrl, generateS3PutPresignedUrl } from '../integrations/aws/s3.js';
import { createAnalysisEntryInDb, getAnalysisEntryDetailsById, updateAnalysisEntryInDb } from '../models/analysisEntryModel.js';

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
  const { analysisEntryId, analysisEntryStatus, analysisId } = req.body;

  await updateAnalysisEntryInDb(analysisEntryId, analysisEntryStatus);

  try {
    const message = {
      analysisEntryId: analysisEntryId,
      analysisId: analysisId,
      timestamp: new Date().toISOString(),
      mediaType: 'video',
      languageCode: 'es-ES',
    };

    const stringifiedMessage = JSON.stringify(message);

    await publishToTranscriptionRequestedQueue(stringifiedMessage);
  } catch (error) {
    logError(`Error sending transcription request analysisEntry ${analysisEntryId}`, error);
  }

  return res.status(200).json({
    success: true,
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

export const getAnalysisEntryPresignedUploadUrl = async (req, res) => {
  const { analysisEntryId, analysisId } = req.body;

  const key = `analysis/${analysisId}/${analysisEntryId}/recording.mp4`;

  const analysisEntryPresignedUrl = await generateS3PutPresignedUrl(key);

  return res.status(200).json({
    success: true,
    message: 'PresignedUploadUrl retrieved successfully',
    analysisEntryPresignedUploadUrl: analysisEntryPresignedUrl,
  });
};
