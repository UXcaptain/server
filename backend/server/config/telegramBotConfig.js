import axios from 'axios';

export const sendTelegramMessage = async (chatId, message) => {
  try {
    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_API_KEY}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    });
  } catch (error) {
    // Fail silently - Telegram logging is optional and should not crash the application
    // Errors will be logged to the application logger if needed
  }
};
