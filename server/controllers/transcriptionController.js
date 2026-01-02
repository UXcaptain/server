import { logError, logInfo } from '../config/loggerFunctions.js';
import { transcribeRecording } from '../integrations/whisper-asr-webservice/transcribe.js';
import { getPendingTranscriptionJobsFromDb, storeNormalizedTranscriptionInDb } from '../models/transcriptionModel.js';
import { cleanUpTranscriptSegments } from '../utils/transcription/transcriptionNormalizer.js';

export const processPendingTranscriptionJobs = async () => {
  const pendingTranscriptionJobs = await getPendingTranscriptionJobsFromDb();

  if (pendingTranscriptionJobs.length === 0) {
    logInfo('No pending transcription jobs found');
    return;
  }

  for (const transcriptionJob of pendingTranscriptionJobs) {
    logInfo(`Processing transcription job for analysis entry ID: ${transcriptionJob.analysis_entry_id}`);

    try {
      const { analysis_entry_id: analysisEntryId } = transcriptionJob;

      const transcriptionJobResult = await transcribeRecording(transcriptionJob);

      const { segments, text: fullText } = transcriptionJobResult;

      const cleanedUpSegments = await cleanUpTranscriptSegments(segments);

      await storeNormalizedTranscriptionInDb(analysisEntryId, fullText, cleanedUpSegments);

      logInfo(`Transcription job ${transcriptionJob.analysis_entry_id} completed successfully`);
    } catch (error) {
      logError(`Error processing transcription job, ${transcriptionJob.analysis_entry_id}`, error);
    }
  }
};
