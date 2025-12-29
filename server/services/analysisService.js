import { logError, logInfo } from '../config/loggerFunctions.js';
import {
  insertTranscriptionJobInDb,
  markInProgressSingleTranscriptionJobInDb,
  getSingleTranscriptionJobDetailsFromDb,
  storeNormalizedTranscriptionInDb,
} from '../models/transcriptionModel.js';
import { normalizeTranscript } from '../utils/transcription/transcriptionNormalizer.js';

const processSingleCompletedTranscriptionJob = async (transcriptionJob) => {
  logInfo(`Processing completed transcription job: ${transcriptionJob.TranscriptionJobName}`);

  try {
    // 1. Get transcription job details from database
    const transcriptionJobDetails = await getSingleTranscriptionJobDetailsFromDb(transcriptionJob.TranscriptionJobName);

    // 3. Parse the transcription job result (JSON string to object)
    const transcriptionJobResult = JSON.parse(transcriptionJobResultString);

    // 4. Normalize transcription job result
    const normalizedTranscriptionJob = await normalizeTranscript(transcriptionJobResult);

    // 5. Store normalized transcript in DB and update status to COMPLETED
    await storeNormalizedTranscriptionInDb(transcriptionJob.TranscriptionJobName, normalizedTranscriptionJob, transcriptionJobResult);

    logInfo(`Successfully processed transcription job: ${transcriptionJob.TranscriptionJobName}`);
  } catch (error) {
    logError(`Error processing transcription job ${transcriptionJob.TranscriptionJobName}`, error);
  }
};
