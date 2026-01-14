import { CronJob } from 'cron';
import { markAnalysisEntriesAsCancelled } from '../models/analysisEntryModel.js';

export const markAnalysisEntriesAsCancelledScheduler = new CronJob(
  '0 * * * *',
  () => {
    markAnalysisEntriesAsCancelled();
  },
);
