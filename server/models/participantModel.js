import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { posthogUserDeleteAccount, posthogUserSignedUp } from './posthogModel.js';
import {
  logError,
  logInfo,
} from '../config/loggerFunctions.js';

const prisma = new PrismaClient();

export const getParticipantProfileFromDb = async (participantId) => {

  const whereClause = {
    user_id: participantId,
  };

  const participantProfile = await prisma.participantProfile.findUnique({
    where: whereClause,
  });

  return participantProfile;
};

export const updateParticipantProfileInDB = async (userId, profileData) => {
  const updateProfileQuery = await prisma.participantProfile.update({
    where: {
      user_id: userId,
    },
    data: profileData,
  });

  logInfo(`Participant profile updated successfully for User ${userId}`);

  return updateProfileQuery;
};
