import passport from 'passport';
import { getUserById } from '../models/userModel.js';

import { localStrategy } from './strategies/passportLocalStrategy.js';

//* Register the different strategies
passport.use(localStrategy);

//*  Serialize and deserialize the user
//* This is necessary to keep the user logged in on localStrategy
export const serializeUser = passport.serializeUser((user, done) => {
  // Convert ObjectId to string for session storage
  const userIdString = String(user._id);

  done(null, userIdString);
});

export const deserializeUser = passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUserById(id);

    if (!user) {
      return done(new Error('User not found in database during deserialization'), null);
    }

    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
