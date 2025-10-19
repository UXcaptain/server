import { CronJob } from 'cron';
import { logError } from '../config/loggerFunctions.mjs';
import { markAnalysisEntriesAsCancelled } from '../models/analysisEntryModel.mjs';

export const markAnalysisEntriesAsCancelledScheduler = new CronJob(
  '0 * * * *',
  async () => {
    try {
      await markAnalysisEntriesAsCancelled();
    } catch (error) {
      logError('Error marking expired analysis entries as cancelled:', error);
    }
  },
);
