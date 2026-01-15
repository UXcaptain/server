import { CronJob } from 'cron';
import { markAnalysisEntriesAsCancelled } from '../controllers/analysisEntryController.js';

export const markAnalysisEntriesAsCancelledScheduler = new CronJob(
  '0 * * * *',
  () => {
    markAnalysisEntriesAsCancelled(); // Fire-and-forget
  },
);
