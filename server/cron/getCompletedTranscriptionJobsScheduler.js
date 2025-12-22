import { CronJob } from 'cron';
import { handleCompletedVideoTranscriptionJobs } from '../services/analysisService.js';
import { logError, logInfo } from '../config/loggerFunctions.js';

export const getCompletedTranscriptionJobsScheduler = new CronJob('15 * * * *', async () => {
  try {
    logInfo('Checking transcription job status');
    await handleCompletedVideoTranscriptionJobs();
  } catch (error) {
    logError('Error checking transcription job status', error);
  }
});
