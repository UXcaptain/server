import { logError, logInfo } from '../config/loggerFunctions.js';
import { transcribeRecording } from '../integrations/whisper-asr-webservice/transcribe.js';
import { getPendingTranscriptionJobsFromDb, storeNormalizedTranscriptionInDb } from '../models/transcriptionModel.js';
import { normalizeTranscript } from '../utils/transcription/transcriptionNormalizer.js';

export const processPendingTranscriptionJobs = async (transcriptionRequest) => {
  try {
    const pendingTranscriptionJobs = await getPendingTranscriptionJobsFromDb();

    if (pendingTranscriptionJobs.length === 0) {
      logInfo('No pending transcription jobs found');
      return;
    }

    for (const transcriptionJob of pendingTranscriptionJobs) {
      logInfo(`Processing transcription job for analysis entry ID: ${transcriptionJob.analysis_entry_id}`, transcriptionJob);

      try {
        const { analysis_entry_id: analysisEntryId } = transcriptionJob;

        const transcriptionJobResult = await transcribeRecording(transcriptionJob);

        const { segments, text: fullText } = transcriptionJobResult;
        // 4. Normalize transcription job result
        const normalizedSegments = await normalizeTranscript(segments);

        console.log('normalizedNONparsed', normalizedSegments);

        //   store transcriptionResult & mark job as completed
        // await storeNormalizedTranscriptionInDb(analysisEntryId, fullText, normalizedSegments);

        // logInfo(`Transcription job ${transcriptionJob.analysis_entry_id} completed`, transcriptionJobResult);
      } catch (error) {
        logError(`Error processing transcription job, ${transcriptionJob.analysis_entry_id}`, error);
      }
    }

    logInfo('Transcription request updated in DB', transcriptionRequest);
  } catch (error) {
    logError('Error requesting analysisEntry <id> transcription', error);
  }
};
