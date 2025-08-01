import {
  getCustomerProfile,
  getParticipantProfile,
  deleteUserInDb,
} from '../models/userModel.mjs';
import { getFromCache, storeInCache, getTTLfromCache } from '../config/valkey.mjs';
import { logError } from '../config/loggerFunctions.mjs';

export const getUserProfile = async (req, res) => {
  const { id: userId, role } = req.user;

  const cacheKey = `userId-${userId}`;

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

  if (role === 'customer') {
    const customerProfile = await getCustomerProfile(userId);

    await storeInCache(cacheKey, customerProfile, 60 * 5); //* Cache for 5 minutes

    return res.status(200).json({
      success: true,
      message: 'user profile retrieved successfully - DB',
      user: customerProfile,
    });
  }

  if (role === 'participant') {
    const participantProfile = await getParticipantProfile(req.userId);

    await storeInCache(cacheKey, participantProfile, 60 * 5); //* Cache for 5 minutes

    return res.status(200).json({
      success: true,
      message: 'participant profile retrieved successfully - DB',
      user: participantProfile,
    });
  }

  throw new Error('User role could not be detected');
};

export const deleteUser = async (req, res) => {
  try {
    await deleteUserInDb(req.user.id);

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    logError('User deletion failed', error);

    if (error.code === 'P2003') {
      return res.status(409).json({
        success: false,
        message: 'User deletion failed - Related DB entries exist',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'User deletion failed - Please try again later',
    });
  }
};
