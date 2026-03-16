import { CronJob } from 'cron';
import { logError, logInfo } from '../config/loggerFunctions.js';
import { checkAndResetUsage } from '../models/usageModel.js';
import { initializeMongoDB } from '../db/mongodb.js';

/**
 * Cron job to reset usage for all companies whose reset date has passed
 * Runs daily at 2 AM
 */
export const resetUsageScheduler = new CronJob(
  '0 2 * * *', // Run daily at 2 AM
  async () => {
    try {
      logInfo('Starting usage reset cron job');

      const collections = await initializeMongoDB();
      const currentDate = new Date();

      // Find all companies with usage that needs to be reset
      const companiesNeedingReset = await collections.company.aggregate([
        {
          $match: {
            'usage.transcription.resetDate': { $lte: currentDate },
          },
        },
        {
          $project: {
            _id: 1,
            'usage.transcription.resetDate': 1,
            'usage.inviteYourOwnUsers.resetDate': 1,
            'usage.panelParticipants.resetDate': 1,
          },
        },
      ]).toArray();

      logInfo(`Found ${companiesNeedingReset.length} companies needing usage reset`);

      let resetCount = 0;

      for (const company of companiesNeedingReset) {
        const companyId = company._id.toString();

        try {
          // Check and reset usage for all features
          await checkAndResetUsage(companyId);
          resetCount++;

          logInfo(`Reset usage for company ${companyId}`);
        } catch (error) {
          logError(`Error resetting usage for company ${companyId}`, error);
        }
      }

      logInfo(`Usage reset cron job completed. Reset ${resetCount} companies.`);
    } catch (error) {
      logError('Error on usage reset cron job', error);
    }
  },
);
