import { logError } from '../config/loggerFunctions.js';
import { updateParticipantProfileInDB } from '../models/participantModel.js';

export const updateParticipantProfile = async (req, res) => {
  try {
    const { id: userId, role } = req.user;

    if (role !== 'participant') {
      return res.status(403).json({
        success: false,
        message: 'Only participants can update their profile',
      });
    }

    const updatedProfile = await updateParticipantProfileInDB(userId, req.body);

    return res.status(200).json({
      success: true,
      message: 'Participant profile updated successfully',
      profile: updatedProfile,
    });
  } catch (error) {
    logError('Participant profile update failed', error);

    return res.status(500).json({
      success: false,
      message: 'Profile update failed - Please try again later',
    });
  }
};
