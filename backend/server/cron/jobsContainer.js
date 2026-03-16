import { logError, logInfo } from '../config/loggerFunctions.js';
import { deletePasswordResetTokensScheduler } from './deletePasswordResetTokensScheduler.js';
import { getPendingTranscriptionJobScheduler } from './getPendingTranscriptionJobScheduler.js';
import { markAnalysisEntriesAsCancelledScheduler } from './markAsCancelledAnalysisEntriesScheduler.js';
import { resetUsageScheduler } from './resetUsageScheduler.js';

export const startCronJobs = () => {
  logInfo('Starting cron jobs');
  try {
    deletePasswordResetTokensScheduler.start();

    getPendingTranscriptionJobScheduler.start();

    markAnalysisEntriesAsCancelledScheduler.start();
    
    resetUsageScheduler.start();
  } catch (error) {
    logError('error on startCronJobs', error);
  }
};
