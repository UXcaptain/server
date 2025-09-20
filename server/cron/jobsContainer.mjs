import { logError } from '../config/loggerFunctions.mjs';
import { deletePasswordResetTokensScheduler } from './deletePasswordResetTokensScheduler.mjs';
import { markAnalysisEntriesAsCancelledScheduler } from './markAsCancelledAnalysisEntriesScheduler.mjs';

export const startCronJobs = () => {
  try {
    deletePasswordResetTokensScheduler.start();
    markAnalysisEntriesAsCancelledScheduler.start();

    console.log('Cron jobs started');
  } catch (error) {
    logError('error on startCronJobs', error);
  }
};
