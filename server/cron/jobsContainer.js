import { logError } from '../config/loggerFunctions.js';
import { deletePasswordResetTokensScheduler } from './deletePasswordResetTokensScheduler.js';
import { markAnalysisEntriesAsCancelledScheduler } from './markAsCancelledAnalysisEntriesScheduler.js';

export const startCronJobs = () => {
  try {
    deletePasswordResetTokensScheduler.start();
    markAnalysisEntriesAsCancelledScheduler.start();

    console.log('Cron jobs started');
  } catch (error) {
    logError('error on startCronJobs', error);
  }
};
