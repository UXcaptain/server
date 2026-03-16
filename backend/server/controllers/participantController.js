import { updateParticipantProfileInDB } from '../models/participantModel.js';

export const updateParticipantProfile = async (req, res) => {
  const { id: userId, role } = req.user;

  if (role !== 'participant') {
    return res.status(403).json({
      message: 'Only participants can update their profile',
    });
  }

  const updatedProfile = await updateParticipantProfileInDB(userId, req.body);

  return res.status(200).json({
    message: 'Participant profile updated successfully',
    profile: updatedProfile,
  });
};
