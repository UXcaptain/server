import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
import { getUserAuthDetailsByEmail } from '../../models/userModel.js';

export const localStrategy = new LocalStrategy(async (email, password, done) => {
  try {
    const user = await getUserAuthDetailsByEmail(email);

    if (!user) {
      return done(null, false, { message: 'User does not exist' });
    }

    return bcrypt.compare(password, user.password, (err, res) => {
      if (res) {
        return done(null, user);
      }

      return done(null, false, { message: 'Password is incorrect' });
    });
  } catch (err) {
    return done(err);
  }
});
