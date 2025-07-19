import { logError } from '../config/loggerFunctions.mjs';

export const globalErrorHandler = (err, req, res, next) => {
  logError('global error handler triggered', err);
  res.status(err.status || 500).json({
    success: false,
    name: err.name || 'Internal Server Error',
    message: err.message || '',
  });
};
