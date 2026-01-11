import { logError, logInfo } from '../config/loggerFunctions.js';
import { transcribeRecording } from '../integrations/whisper-asr-webservice/transcribe.js';
import {
  getFirstTranscriptionJobFromDbByStatus,
  storeNormalizedTranscriptionInDb,
  updateStatusSingleTranscriptionJobInDb,
} from '../models/transcriptionModel.js';
import { cleanUpTranscriptSegments } from '../utils/transcription/transcriptionNormalizer.js';

export const processPendingTranscriptionJobs = async () => {
  // check if there is an ongoing transcription job

  let inProgressTranscriptionJob;

  try {
    inProgressTranscriptionJob = await getFirstTranscriptionJobFromDbByStatus('IN_PROGRESS');
  } catch (error) {
    return logError('error fetching first transcription job from DB', error);
  }
  if (inProgressTranscriptionJob) {
    return console.log(`Transcription job id: ${inProgressTranscriptionJob.id} is in progress Skipping new jobs.`); // * Set as console log for registering but not cluttering logs
  }

  let pendingTranscriptionJob;

  try {
    pendingTranscriptionJob = await getFirstTranscriptionJobFromDbByStatus('PENDING');
  } catch (error) {
    return logError('Error fetching first pending transcription job from DB', error);
  }

  if (!pendingTranscriptionJob) {
    return console.log('No pending transcription jobs found.'); // * Set as console log for registering but not cluttering logs
  }

  const {
    id: transcriptionJobId,
    analysis_entry_id: analysisEntryId,
  } = pendingTranscriptionJob;

  logInfo(`Processing transcription job ${transcriptionJobId} for analysis entry ID: ${analysisEntryId}`);

  try { // Mark job as IN_PROGRESS before making async call to prevent re-queuing
    await updateStatusSingleTranscriptionJobInDb(transcriptionJobId, 'IN_PROGRESS');
    logInfo(`Marked transcription job ${transcriptionJobId} for analysis entry ID ${analysisEntryId} as IN_PROGRESS`);
  } catch (error) {
    return logError(`error updating status for transcription job ${transcriptionJobId} to IN_PROGRESS`, error);
  }

  let transcriptionJobResult;

  try {
    transcriptionJobResult = await transcribeRecording(pendingTranscriptionJob);
  } catch (error) {
    logError(`error transcribing recording for transcription job ${transcriptionJobId}`, error);
    return await updateStatusSingleTranscriptionJobInDb(transcriptionJobId, 'PENDING');
  }
  const {
    segments,
    text: fullText,
  } = transcriptionJobResult;

  let cleanedUpSegments;

  try {
    cleanedUpSegments = await cleanUpTranscriptSegments(segments);
  } catch (error) {
    logError(`error cleaning up transcript segments for transcription job ${transcriptionJobId}`, error);
    return await updateStatusSingleTranscriptionJobInDb(transcriptionJobId, 'PENDING');
  }

  try {
    await storeNormalizedTranscriptionInDb(analysisEntryId, fullText, cleanedUpSegments);
  } catch (error) {
    logError(`error inserting normalized transcription from transcription job ${transcriptionJobId} in analysis entry ${analysisEntryId}`, error);
    return await updateStatusSingleTranscriptionJobInDb(transcriptionJobId, 'PENDING');
  }

  try {
    await updateStatusSingleTranscriptionJobInDb(transcriptionJobId, 'COMPLETED');
    logInfo(`Marked transcription job ${transcriptionJobId} for analysis entry ID ${analysisEntryId} as COMPLETED`);
  } catch (error) {
    logError(`error updating status for transcription job ${transcriptionJobId} to COMPLETED`, error);
    return await updateStatusSingleTranscriptionJobInDb(transcriptionJobId, 'PENDING');
  }

  return logInfo(`Transcription job ${transcriptionJobId} for analysis entry ID ${analysisEntryId} completed successfully`);
};
