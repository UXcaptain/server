import express from 'express';
import passport from 'passport';
import { createServer } from 'http';
import { cookieParserMiddleware } from './middlewares/cookieParser.mjs';
import { corsMiddleware } from './middlewares/cors.mjs';
import { helmetMiddleware } from './middlewares/helmet.mjs';
import { apiRouter } from './API/apiRouter.mjs';
import { storeSessions } from './middlewares/storeExpressSessions.mjs';
import { indexRouter } from './routers/indexRouter.mjs';
import { limiter } from './middlewares/express-rate-limiter.mjs';
import { slowLimiter } from './middlewares/express-slow-down.mjs';
import { startCronJobs } from './cron/jobsContainer.mjs';
import { globalErrorHandler } from './middlewares/globalErrorHandler.mjs';
import { webhookRouter } from './webhooks/webhooksRouter.mjs';

const app = express();
const server = createServer(app);

//* Middleware for ExpressJS securization
app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(cookieParserMiddleware);
if (process.env.NODE_ENV !== 'localhost') app.use(slowLimiter);
if (process.env.NODE_ENV !== 'localhost') app.use(limiter);

//* Webhooks router
app.use('/webhooks', webhookRouter);

//* Middleware to create parse request (read req.body from form data & JSON) & parse query
app.use(express.urlencoded());
app.use(express.json());

//* Middleware to store sessions in DB
app.use(storeSessions);

app.use(passport.session());

//* Router selectors

app.use('/api/', apiRouter);
app.use('/', indexRouter);

//* Middleware to catch & handle errors
app.use(globalErrorHandler);

//* Start the server
server.listen(process.env.PORT, () => {
// eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});

// startCronJobs(); // Disabled temporarily during dev

const gracefulShutdown = () => {
  console.log('Received shutdown signal, closing server...');

  server.close(() => {
    console.log('Express server closed');
    // TODO - Close other resources (database connections, etc.)
    // ...
    process.exit(0);
  });

  // Force shutdown after timeout
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
