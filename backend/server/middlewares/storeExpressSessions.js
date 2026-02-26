import session from 'express-session';
import MongoDBStore from 'connect-mongo';

const mongoSessionStore = new MongoDBStore({
  mongoUrl: process.env.MONGODB_URI,
  dbName: 'uxcaptain-next',
  collectionName: 'session',
  // ttl: 14 * 24 * 60 * 60, // 14 days - Reads maxAge from the cookie - No need to set it
  autoRemove: 'native', // Default
});

export const storeSessions = session({
  secret: process.env.SESSION_SECRET,
  resave: false, // https://www.npmjs.com/package/express-session#resave - Set to false because `touch` is implemented
  saveUninitialized: false, // https://www.npmjs.com/package/express-session#saveuninitialized - Set to false because we'll only save sessions with req.session data (eg: logins, storing relevant info that we want to keep)
  cookie: {
    maxAge: 1209600000, // 14 days
    // secure: process.env.DEPLOY_ENVIRONMENT === 'localhost', // Secure in production
    secure: 'auto',
    httpOnly: true,
    SameSite: 'None',
  },
  store: mongoSessionStore,
});
