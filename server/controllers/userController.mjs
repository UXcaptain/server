import {
  getUserById,
} from '../models/userModel.mjs';
import { logError } from '../config/loggerFunctions.mjs';
import { getFromCache, storeInCache, getTTLfromCache } from '../config/valkey.mjs';

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const cacheKey = userId;

    const cachedUser = await getFromCache(cacheKey);

    if (cachedUser) {
      return res.status(200).json({
        success: true,
        message: 'user profile retrieved successfully - cache',
        cacheKey: cacheKey,
        cacheTTL_seconds: await getTTLfromCache(cacheKey),
        user: JSON.parse(cachedUser),
      });
    }

    const user = await getUserById(cacheKey);

    await storeInCache(cacheKey, user, 60 * 5); //* Cache for 5 minutes

    return res.status(200).json({
      success: true,
      message: 'user profile retrieved successfully - DB',
      user: user,
    });
  } catch (error) {
    logError('User profile retrieval failed', error);
    return res.status(500).json({
      success: false,
      message: 'User profile retrieval failed',
    });
  }
};
