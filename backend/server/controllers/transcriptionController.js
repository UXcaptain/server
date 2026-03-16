import { logError, logInfo } from '../config/loggerFunctions.js';
import { transcribeRecording } from '../integrations/whisper-asr-webservice/transcribe.js';
import {
  getPendingTranscriptionJobFromDb,
  updateStatusSingleTranscriptionJobInDb,
  storeNormalizedTranscriptionInDb,
} from '../models/transcriptionModel.js';
import { cleanUpTranscriptSegments } from '../utils/transcription/transcriptionNormalizer.js';

export const processPendingTranscriptionJobs = async () => {
  let transcriptionJob;

  try {
    transcriptionJob = await getPendingTranscriptionJobFromDb();
  } catch (error) {
    return logError('Error fetching pending transcription job', error);
  }

  if (!transcriptionJob) {
    return;
  }

  const {
    _id: jobId,
    analysisEntryId,
    analysisId,
  } = transcriptionJob;

  const transcriptionJobForProcessing = {
    analysisId,
    analysisEntryId,
  };

  logInfo(`Processing transcription for analysis entry ID: ${analysisEntryId}`);

  let transcriptionJobResult;

  try {
    transcriptionJobResult = await transcribeRecording(transcriptionJobForProcessing);
  } catch (error) {
    logError(`error transcribing recording for analysis entry ${analysisEntryId}`, error);
    await updateStatusSingleTranscriptionJobInDb(jobId, 'failed');
    return;
  }

  const {
    segments,
    text: fullText,
  } = transcriptionJobResult;

  let cleanedUpSegments;

  try {
    cleanedUpSegments = await cleanUpTranscriptSegments(segments);
  } catch (error) {
    logError(`error cleaning up transcript segments for analysis entry ${analysisEntryId}`, error);
    await updateStatusSingleTranscriptionJobInDb(jobId, 'failed');
    return;
  }

  try {
    await storeNormalizedTranscriptionInDb(analysisId, analysisEntryId, fullText, cleanedUpSegments);
    await updateStatusSingleTranscriptionJobInDb(jobId, 'completed');
  } catch (error) {
    logError(`error inserting normalized transcription for analysis entry ${analysisEntryId}`, error);
    await updateStatusSingleTranscriptionJobInDb(jobId, 'failed');
    return;
  }

  return logInfo(`Transcription for analysis entry ID ${analysisEntryId} completed successfully`);
};
