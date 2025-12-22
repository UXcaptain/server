import { logError, logInfo } from '../config/loggerFunctions.js';
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
    logInfo('Transcription request stored in DB', transcriptionRequest);

    try { // Handle errors gracefully - errors will be picked up by a cron job if failed
      await requestAnalysisEntryTranscriptionToAWSTranscribe(transcriptionRequest);
      logInfo('Transcription request sent to AWS Transcribe', transcriptionRequest);

      await updateSingleTranscriptionRequestInDb(transcriptionRequest.analysisEntryId);
      logInfo('Transcription request updated in DB', transcriptionRequest);
    } catch (error) {
      logError('Error requesting transcription to AWS Transcribe', error);
    }
  } catch (error) {
    logError('Error storing transcription request in DB', error);
  } catch (error) {
    logError('Error processing transcription request', error);
  }
};
