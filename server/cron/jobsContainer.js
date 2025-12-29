import { logError, logInfo } from '../config/loggerFunctions.js';
import { deletePasswordResetTokensScheduler } from './deletePasswordResetTokensScheduler.js';
import { getCompletedTranscriptionJobsScheduler } from './getCompletedTranscriptionJobsScheduler.js';
import { getPendingTranscriptionJobScheduler } from './getPendingTranscriptionJobScheduler.js';
import { markAnalysisEntriesAsCancelledScheduler } from './markAsCancelledAnalysisEntriesScheduler.js';

export const startCronJobs = () => {
  logInfo('Starting cron jobs');
  try {
    deletePasswordResetTokensScheduler.start();

    if (process.env.TRANSCRIPTION_ENABLED === 'true') {
      getPendingTranscriptionJobScheduler.start();
    }

    markAnalysisEntriesAsCancelledScheduler.start();
    

    console.log('Cron jobs started');
  } catch (error) {
    logError('error on startCronJobs', error);
  }
};
