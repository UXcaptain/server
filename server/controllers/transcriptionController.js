import { logError, logInfo } from '../config/loggerFunctions.js';
import { transcribeRecording } from '../integrations/whisper-asr-webservice/transcribe.js';
import { getPendingTranscriptionJobsFromDb, markInProgressSingleTranscriptionJobInDb } from '../models/transcriptionModel.js';

export const processPendingTranscriptionJobs = async (transcriptionRequest) => {
  try {
    const pendingTranscriptionJobs = await getPendingTranscriptionJobsFromDb();

    if (pendingTranscriptionJobs.length === 0) {
      logInfo('No pending transcription jobs found');
      return;
    }

    console.log('pendingTranscriptionJobs', pendingTranscriptionJobs);

    for (const transcriptionJob of pendingTranscriptionJobs) {
      logInfo(`Processing transcription job for analysis entry ID: ${transcriptionJob.analysis_entry_id}`, transcriptionJob);
      //   await requestAnalysisEntryTranscription(transcriptionJob);
      //   logInfo('Transcription request sent to AWS Transcribe', transcriptionJob);

      const transcriptionResult = transcribeRecording(transcriptionJob.analysis_entry_id);

      await markInProgressSingleTranscriptionJobInDb(transcriptionJob.analysis_entry_id);
      logInfo('Transcription request updated in DB', transcriptionJob);

      //   store transcriptionResult & mark job as completed

      logInfo('Transcription result', transcriptionResult);
    }

    logInfo('Transcription request updated in DB', transcriptionRequest);
  } catch (error) {
    logError('Error requesting analysisEntry <id> transcription', error);
  }
};
