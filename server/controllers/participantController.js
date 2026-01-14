import { logError } from '../config/loggerFunctions.js';
import { updateParticipantProfileInDB } from '../models/participantModel.js';

export const updateParticipantProfile = async (req, res) => {
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
};

export const getParticipantProfile = async (req, res) => {

// TODO -- complete this function
}
