import cors from 'cors';

const origins = [
  process.env.FRONT_WEB_APP_ORIGIN_URL,
  // ADD other origins as required
];

const corsOptions = {
  origin: process.env.NODE_ENV === 'localhost' ? 'http://localhost' : origins,
  optionsSuccessStatus: 200,
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
