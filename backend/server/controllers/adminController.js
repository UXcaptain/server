import {
  deleteUserInDb,
  getAllUsersInDb,
  getUserById,
} from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
  const params = req.query;

  const users = await getAllUsersInDb(params);

  return res.status(200).json({
    message: 'Users retrieved successfully',
    userCount: users.length,
    users: users,
  });
};

export const getOneUserById = async (req, res) => {
  const { userId } = req.params;

  const getOneUserByIdQuery = await getUserById(userId);

  if (getOneUserByIdQuery === null) {
    return res.status(400).json({
      message: 'User not found',
    });
  }

  return res.status(200).json({
    message: 'User retrieved successfully',
    user: getOneUserByIdQuery,
  });
};

export const deleteOneUserById = async (req, res) => {
  const { userId } = req.params;

  const existingUser = await getUserById(userId);
  if (!existingUser) {
    return res.status(404).json({
      message: 'User deletion failed - User does not exist',
    });
  }

  const deleteUserQuery = await deleteUserInDb(userId);

  return res.status(200).json({
    message: 'User deleted successfully',
    userId: userId,
  });
};
