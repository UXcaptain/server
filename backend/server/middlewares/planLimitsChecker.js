import { checkInviteYourOwnUsersLimit, checkTranscriptionLimit, checkPanelParticipantsLimit } from '../models/planModel.js';

/**
 * Check if the company's plan includes the 'inviteYourOwnUsers' feature
 * and if they haven't exceeded the limit before creating an analysis
 */
export const checkInviteYourOwnUsersBeforeCreateAnalysis = async (req, res, next) => {
  const { companyId } = req.user;

  try {
    const limitCheck = await checkInviteYourOwnUsersLimit(companyId);

    if (!limitCheck.allowed) {
      return res.status(403).json({
        message: limitCheck.message,
        currentCount: limitCheck.currentCount,
        maxAllowed: limitCheck.maxAllowed,
        resetDate: limitCheck.resetDate,
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'Error checking plan limits',
      error: error.message,
    });
  }
};

/**
 * Check if the company's plan includes the 'transcription' feature
 * and if they haven't exceeded the limit before creating a transcription job
 */
export const checkTranscriptionBeforeCreateJob = async (req, res, next) => {
  const { companyId } = req.user;

  try {
    const limitCheck = await checkTranscriptionLimit(companyId);

    if (!limitCheck.allowed) {
      return res.status(403).json({
        message: limitCheck.message,
        currentCount: limitCheck.currentCount,
        maxAllowed: limitCheck.maxAllowed,
        resetDate: limitCheck.resetDate,
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'Error checking transcription plan limits',
      error: error.message,
    });
  }
};

/**
 * Check if the company's plan includes the 'panelParticipants' feature
 * and if they haven't exceeded the limit
 */
export const checkPanelParticipants = async (companyId) => {
  try {
    const limitCheck = await checkPanelParticipantsLimit(companyId);

    if (!limitCheck.allowed) {
      return {
        allowed: false,
        message: limitCheck.message,
        currentCount: limitCheck.currentCount,
        maxAllowed: limitCheck.maxAllowed,
        resetDate: limitCheck.resetDate,
      };
    }

    return {
      allowed: true,
      currentCount: limitCheck.currentCount,
      maxAllowed: limitCheck.maxAllowed,
      available: limitCheck.available,
      resetDate: limitCheck.resetDate,
    };
  } catch (error) {
    return {
      allowed: false,
      message: 'Error checking panel participants plan limits',
      error: error.message,
    };
  }
};
