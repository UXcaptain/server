import { logError } from '../config/loggerFunctions.js';
import {
  insertTranscriptionRequestInDb,
  updateSingleTranscriptionRequestInDb,
  getSingleTranscriptionJobDetailsFromDb,
  storeNormalizedTranscriptionInDb,
  markTranscriptionAsPublishedToQueue,
} from '../models/transcriptionModel.js';
import {
  requestAnalysisEntryTranscriptionToAWSTranscribe, deleteCompletedTranscriptionJobFromAWS,
  fetchSingleTranscriptionJob,
} from '../integrations/aws/Transcribe.js';
import { normalizeTranscript } from '../utils/transcription/transcriptionNormalizer.js';

export const processTranscriptionRequest = async (transcriptionRequest) => {
  try {
    await insertTranscriptionRequestInDb(transcriptionRequest);

    await requestAnalysisEntryTranscriptionToAWSTranscribe(transcriptionRequest);
  } catch (error) {
    logError('Error processing transcription request', error);
  }
};
