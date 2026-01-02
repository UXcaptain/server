import { logError, logInfo } from '../config/loggerFunctions.js';
import { transcribeRecording } from '../integrations/whisper-asr-webservice/transcribe.js';
import {
  getPendingTranscriptionJobsFromDb,
  storeNormalizedTranscriptionInDb,
  updateStatusSingleTranscriptionJobInDb,
} from '../models/transcriptionModel.js';
import { cleanUpTranscriptSegments } from '../utils/transcription/transcriptionNormalizer.js';

export const processPendingTranscriptionJobs = async () => {
  const pendingTranscriptionJobs = await getPendingTranscriptionJobsFromDb();

  if (pendingTranscriptionJobs.length === 0) {
    logInfo('No pending transcription jobs found');
    return;
  }

  for (const transcriptionJob of pendingTranscriptionJobs) {
    logInfo(`Processing transcription job for analysis entry ID: ${transcriptionJob.analysis_entry_id}`);

    const { analysis_entry_id: analysisEntryId } = transcriptionJob;

    try {
      // Mark job as IN_PROGRESS before making async call to prevent re-queuing
      await updateStatusSingleTranscriptionJobInDb(analysisEntryId, 'IN_PROGRESS');
      logInfo(`Marked transcription job ${analysisEntryId} as IN_PROGRESS`);

      const transcriptionJobResult = await transcribeRecording(transcriptionJob);

      const { segments, text: fullText } = transcriptionJobResult;

      const cleanedUpSegments = await cleanUpTranscriptSegments(segments);

      await storeNormalizedTranscriptionInDb(analysisEntryId, fullText, cleanedUpSegments);

      logInfo(`Transcription job ${analysisEntryId} completed successfully`);
    } catch (error) {
      // Mark job back as PENDING to allow retry
      await updateStatusSingleTranscriptionJobInDb(analysisEntryId, 'IN_PROGRESS');
      logError(`Error processing transcription job, ${analysisEntryId}`, error);
    }
  }
};
