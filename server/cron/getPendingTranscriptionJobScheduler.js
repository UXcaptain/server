import { CronJob } from 'cron';
import { processPendingTranscriptionJobs } from '../controllers/transcriptionController.js';

export const getPendingTranscriptionJobScheduler = new CronJob('*/5 * * * *', async () => {
  processPendingTranscriptionJobs();
});
