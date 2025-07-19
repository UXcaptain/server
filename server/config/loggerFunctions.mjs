import { logger } from './logger.mjs';
import { sendErrorLogsToTelegram, sendInfoLogsToTelegram } from '../integrations/telegram/sendLogsToTelegram.mjs';

export const logError = (errorMessage, error, additionalInfo = 'N/A') => {
  logger.error({
    message: errorMessage,
    context: {
      name: error.name,
      errorMessage: error.message,
      // errorStack: error.stack,
      errorDetails: error, // I will log the entire error object for now just in case
      additionalInfo: additionalInfo,
    },
  });

  sendErrorLogsToTelegram(errorMessage, error);
};

export const logWarn = async (message, error, additionalInfo = 'N/A') => {
  logger.warn({
    message: message,
    context: {
      name: error.name || 'no error name',
      errorMessage: error.message || 'no error message',
      errorStack: error.stack || 'no error stack',
      errorDetails: error, // I will log the entire error object for now just in case
      additionalInfo: additionalInfo,
    },
  });
};

export const logInfo = async (message, context) => {
  try {
    logger.info({
      message: message,
      context: context,
    });

    sendInfoLogsToTelegram(message);
  } catch (error) {
    logError(`error in storing INFO logs for: ${message}`, error);
  }
};

export const logUserLoggedInSuccessfully = (userId, loginMethod) => {
  logger.info({
    message: 'User logged in successfully',
    context: {
      userId: userId,
      loginMethod: loginMethod,
      additionalInfo: 'n/a',
    },
  });
};

export const logUserCreatedInDB = (userId) => {
  try {
    logger.info({
      message: 'User succesfully created in database',
      context: {
        userData: {
          userId: userId,
          role: userData.role,
        },
      },
    });
  } catch (error) {
    logError('error in logUserCreatedInDB', error);
  }
};

export const logPasswordResetTokenCreated = (userId) => {
  logger.info({
    message: 'User password reset token succesfully created in database',
    context: {
      userData: {
        userId: userId,
      },
    },
  });
};

export const logUserLoggedOut = (userId) => {
  logger.info({
    message: 'User logged out successfully',
    context: {
      userId: userId,
    },
  });
};

export const logUserDeleted = async (userId) => {
  logger.info({
    message: 'User succesfully deleted in database',
    context: {
      userData: {
        userId: userId,
      },
    },
  });
};

export const logFatalMongoDbConnectionError = (error) => {
  logger.fatal({
    message: `[DB CONNECTION] Can't connect to MongoDB - ${error.errmsg}`,
    context: {
      error: error.message,
    },
  });
};

export const logFatalMongoDBSessionInitError = (error) => {
  logger.fatal({
    message: 'MongoDB session store initialization failed',
    context: {
      name: error.name,
      errorMessage: error.message,
      errorStack: error.stack,
      errorDetails: error, // I will log the entire error object for now just in case}
    },
  });
};

export const logPasswordUpdated = (userId) => {
  logger.info({
    message: 'Password updated successfully',
    context: {
      userId: userId,
    },
  });
};

export const logRateLimited = async (req) => {
  logger.warn({
    message: 'rate limit exceeded',
    context: {
      ipAddress: req.ip,
    },
  });
};
