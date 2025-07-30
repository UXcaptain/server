import {
  getCustomerProfile,
  getParticipantProfile,
} from '../models/userModel.mjs';
import { getFromCache, storeInCache, getTTLfromCache } from '../config/valkey.mjs';

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
