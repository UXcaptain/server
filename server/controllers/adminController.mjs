import { logError } from '../config/loggerFunctions.mjs';
import {
  deleteUserInDb,
  getAllCustomersInDb,
  getUserById,
} from '../models/userModel.mjs';

export const getAllCustomers = async (req, res) => {
  try {
    const query = await getAllCustomersInDb();

    res.status(200).json({
      success: true,
      userCount: query.length,
      users: query,
    });
  } catch (error) {
    logError('Error getting all customers', error);
    res.status(500).json({
      success: false,
      message: 'Error getting all customers',
    });
  }
};

export const getOneUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const queryResult = await getUserById(userId);

    if (queryResult === null) {
      return res.status(400).json({
        success: false,
        message: 'User not found',
      });
    }

    return res.status(200).json({
      success: true,
      user: queryResult,
    });
  } catch (error) {
    return res.status(502).json({
      success: false,
      errorMessage: 'Error retrieving user',
    });
  }
};

export const deleteOneUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const existingUser = await getUserById(userId);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: 'User does not exist',
      });
    }

    const deletedUser = await deleteUserInDb(userId);

    return res.status(200).json({
      success: true,
      message: 'User successfully deleted',
      userId: deletedUser.user.id,
    });
  } catch (error) {
    return res.status(502).json({
      success: false,
      message: 'Error deleting user',
    });
  }
};
