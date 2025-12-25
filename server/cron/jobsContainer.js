import { logError } from '../config/loggerFunctions.js';
import { deletePasswordResetTokensScheduler } from './deletePasswordResetTokensScheduler.js';
import { getCompletedTranscriptionJobsScheduler } from './getCompletedTranscriptionJobsScheduler.js';
import { markAnalysisEntriesAsCancelledScheduler } from './markAsCancelledAnalysisEntriesScheduler.js';

export const startCronJobs = () => {
  try {
    deletePasswordResetTokensScheduler.start();

    if (process.env.TRANSCRIPTION_ENABLED === true) {
      getCompletedTranscriptionJobsScheduler.start();
    }

    markAnalysisEntriesAsCancelledScheduler.start();
    

    console.log('Cron jobs started');
  } catch (error) {
    logError('error on startCronJobs', error);
  }
};
