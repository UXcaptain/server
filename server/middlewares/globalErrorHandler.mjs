import { logError } from '../config/loggerFunctions.mjs';

export const globalErrorHandler = (err, req, res, next) => {
  logError('global error handler triggered', err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: 'Unhandled Internal Server Error',
  });
};
