import { sendTelegramMessage } from '../../config/telegramBotConfig.js';

const chatIds = {
  latest_info: '-1003027633123',
  latest_errors: '-1002911182457',
  next_info: '-1002613952187',
  next_errors: '-1002730767538',
};

export const sendErrorLogsToTelegram = async (errorMessage, error) => {
  const chatId = process.env.DEPLOY_ENVIRONMENT === 'latest' ? chatIds.latest_errors : chatIds.next_errors;
  const telegramMessage = `
  🚨 <b>New error logged at ${new Date()}</b> 🚨
  \n<b>Error Name</b>: ${error.name}
  \n<b>Error Message</b>: ${errorMessage}
  \n<b>Error Details</b>: ${error}
  \n<b>Additional Info</b>: ${error.additionalInfo}
  `;

  await sendTelegramMessage(chatId, telegramMessage);
};

export const sendInfoLogsToTelegram = async (message) => {
  const chatId = process.env.DEPLOY_ENVIRONMENT === 'latest' ? chatIds.latest_info : chatIds.next_info;

  const telegramMessage = `
  ✅ <b>New event logged at ${new Date()}</b> ✅
  \n<b>event Name</b>: ${message}
  `;

  await sendTelegramMessage(chatId, telegramMessage);
};
