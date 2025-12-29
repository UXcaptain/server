import { CronJob } from 'cron';
import { processPendingTranscriptionJobs } from '../controllers/transcriptionController.js';
import { logError } from '../config/loggerFunctions.js';

export const getPendingTranscriptionJobScheduler = new CronJob('* * * * *', async () => {
  try {
    await processPendingTranscriptionJobs();
  } catch (error) {
    logError('Error processing transcription request', error);
  }
});
