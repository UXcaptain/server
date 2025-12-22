import { logError, logInfo } from '../config/loggerFunctions.js';
import {
  insertTranscriptionRequestInDb,
  updateSingleTranscriptionRequestInDb,
  getSingleTranscriptionJobDetailsFromDb,
  storeNormalizedTranscriptionInDb,
} from '../models/transcriptionModel.js';
import {
  requestAnalysisEntryTranscriptionToAWSTranscribe, deleteCompletedTranscriptionJobFromAWS,
  fetchSingleTranscriptionJob,
  listCompletedTranscriptionJobsFromAWS,
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
  }
};

const processSingleCompletedTranscriptionJob = async (transcriptionJob) => {
  logInfo(`Processing completed transcription job: ${transcriptionJob.TranscriptionJobName}`);

  try {
    // 1. Get transcription job details from database
    const transcriptionJobDetails = await getSingleTranscriptionJobDetailsFromDb(transcriptionJob.TranscriptionJobName);

    // Delete from AWS Transcribe if already processed - Shouldnt happen if AWS Transcribe job deletion is working properly

    if (transcriptionJobDetails.transcriptionJob.status === 'COMPLETED') { // Handle duplicate entries to avoid normalization reprocessing
      logInfo(`Deleting already processed job: ${transcriptionJob.TranscriptionJobName}`);
      await deleteCompletedTranscriptionJobFromAWS(transcriptionJob.TranscriptionJobName);
    }

    // 2. Construct S3 key and fetch transcription file from AWS
    const transcriptionJobResultString = await fetchSingleTranscriptionJob(transcriptionJobDetails.analysis_id, transcriptionJob.TranscriptionJobName);

    // 3. Parse the transcription job result (JSON string to object)
    const transcriptionJobResult = JSON.parse(transcriptionJobResultString);

    // 4. Normalize transcription job result
    const normalizedTranscriptionJob = await normalizeTranscript(transcriptionJobResult);

    // 5. Store normalized transcript in DB and update status to COMPLETED
    await storeNormalizedTranscriptionInDb(transcriptionJob.TranscriptionJobName, normalizedTranscriptionJob, transcriptionJobResult);

    try {
      await deleteCompletedTranscriptionJobFromAWS(transcriptionJob.TranscriptionJobName);
    } catch (error) {
      logError(`Error deleting transcription job ${transcriptionJob.TranscriptionJobName} from AWS Transcribe`, error);
    // AWS Transcribe deletion failing is not an issue since it will be caught by a CRON-based retry mechanism
    }

    logInfo(`Successfully processed transcription job: ${transcriptionJob.TranscriptionJobName}`);
  } catch (error) {
    logError(`Error processing transcription job ${transcriptionJob.TranscriptionJobName}`, error);
  }
};

export const handleCompletedVideoTranscriptionJobs = async () => {
  try {
    // Get the completed Jobs from AWS Transcribe
    logInfo('Retrieving completed transcription jobs');
    const completedTranscriptionJobsSummary = await listCompletedTranscriptionJobsFromAWS();

    if (completedTranscriptionJobsSummary.length === 0) {
      logInfo('no completed transcription jobs available to process');
      return;
    }

    for (const transcriptionJob of completedTranscriptionJobsSummary) {
      await processSingleCompletedTranscriptionJob(transcriptionJob);
    }
  } catch (error) {
    logError('Error processing transcription jobs', error);
  }
};
