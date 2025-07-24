import {
  deleteUserInDb,
  getAllUsersInDb,
  getUserById,
} from '../models/userModel.mjs';
import { getTTLfromCache, getFromCache, storeInCache } from '../config/valkey.mjs';

export const getAllUsers = async (req, res) => {
  const params = req.query;
  const cacheKey = `allUsers-${JSON.stringify(params)}-all`;

  const cachedUsers = await getFromCache(cacheKey);

  if (cachedUsers) {
    return res.status(200).json({
      success: true,
      cacheKey: cacheKey,
      message: 'Users successfully retrieved - cache',
      cacheTTL_seconds: await getTTLfromCache(cacheKey),
      userCount: JSON.parse(cachedUsers).length,
      users: JSON.parse(cachedUsers),
    });
  }

  const users = await getAllUsersInDb(params);

  await storeInCache(cacheKey, users, 60);

  return res.status(200).json({
    success: true,
    message: 'Users successfully retrieved - DB',
    userCount: users.length,
    users: users,
  });
};

export const getOneUserById = async (req, res) => {
  const { userId } = req.params;

  const getOneUserByIdQuery = await getUserById(userId);

  if (getOneUserByIdQuery === null) {
    return res.status(400).json({
      success: false,
      message: 'User not found',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'User successfully retrieved - DB',
    user: getOneUserByIdQuery,
  });
};

export const deleteOneUserById = async (req, res) => {
  const { userId } = req.params;

  const existingUser = await getUserById(userId);
  if (!existingUser) {
    return res.status(404).json({
      success: false,
      message: 'User deletion failed - User does not exist',
    });
  }

  const deleteUserQuery = await deleteUserInDb(userId);

  return res.status(200).json({
    success: true,
    message: 'User successfully deleted',
    userId: deleteUserQuery.id,
  });
};
