import {
  getCustomerProfile,
  getParticipantProfile,
  deleteUserInDb,
} from '../models/userModel.js';
import { logError } from '../config/loggerFunctions.js';

export const getUserProfile = async (req, res) => {
  const { id: userId, role } = req.user;

  if (role === 'customer') {
    const customerProfile = await getCustomerProfile(userId);

    return res.status(200).json({
      success: true,
      message: 'user profile retrieved successfully - DB',
      user: customerProfile,
    });
  }

  if (role === 'participant') {
    const participantProfile = await getParticipantProfile(req.userId);

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
