import { CronJob } from 'cron';
import { logError } from '../config/loggerFunctions.mjs';
import { deleteExpiredPasswordResetTokens } from '../models/passwordResetTokensModel.mjs';

export const deletePasswordResetTokensScheduler = new CronJob(
  '0 3 * * *',
  async () => {
    try {
      await deleteExpiredPasswordResetTokens();
    } catch (error) {
      logError('Error deleting expired password reset tokens:', error);
    }
  },
);
