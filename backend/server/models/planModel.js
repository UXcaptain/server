import { ObjectId } from 'mongodb';
import { initializeMongoDB } from '../db/mongodb.js';
import { incrementFeatureUsage, getAvailableUsage } from './usageModel.js';

/**
 * Get plan by planId (e.g., 'free', 'starter', 'pro')
 * @param {string} planId - The plan identifier
 * @returns {Promise<Object|null>} The plan document or null
 */
export const getPlanByPlanId = async (planId) => {
  const collections = await initializeMongoDB();

  const result = await collections.plan.aggregate([
    {
      $match: {
        planId: planId,
      },
    },
  ]).toArray();

  return result[0] || null;
};

/**
 * Get plan details for a company by joining company subscription with plan collection
 * @param {string} companyId - The company ID
 * @returns {Promise<Object|null>} The company plan details or null
 */
export const getPlanByCompanyId = async (companyId) => {
  const collections = await initializeMongoDB();

  const result = await collections.company.aggregate([
    {
      $match: {
        _id: new ObjectId(companyId),
      },
    },
    {
      $lookup: {
        from: 'plan',
        localField: 'subscription.planName',
        foreignField: 'planId',
        as: 'planDetails',
      },
    },
    {
      $unwind: {
        path: '$planDetails',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 1,
        planId: '$planDetails.planId',
        planName: '$planDetails.planId',
        features: '$planDetails.features',
        subscription: '$subscription',
        usage: '$usage',
      },
    },
  ]).toArray();

  return result[0] || null;
};

/**
 * Get feature details for a specific feature of a company's plan
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name ('transcription', 'inviteYourOwnUsers', 'panelParticipants')
 * @returns {Promise<Object|null>} The feature details or null if not found
 */
export const getFeatureForCompany = async (companyId, featureName) => {
  const companyPlan = await getPlanByCompanyId(companyId);

  if (!companyPlan || !companyPlan.features) {
    return null;
  }

  return companyPlan.features[featureName] || null;
};

/**
 * Check if a feature is included in a company's plan
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name
 * @returns {Promise<boolean>} Whether the feature is included
 */
export const isFeatureIncluded = async (companyId, featureName) => {
  const feature = await getFeatureForCompany(companyId, featureName);

  if (!feature) {
    return false;
  }

  return feature.included === true;
};

/**
 * Get the limit for a feature in a company's plan
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name
 * @returns {Promise<number|null>} The limit or null if unlimited/not found
 */
export const getFeatureLimit = async (companyId, featureName) => {
  const feature = await getFeatureForCompany(companyId, featureName);

  if (!feature || !feature.included) {
    return 0;
  }

  return feature.limit !== undefined ? feature.limit : null;
};

/**
 * Get the type for a feature in a company's plan
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name
 * @returns {Promise<string|null>} The type ('metered', 'fixed', etc.) or null
 */
export const getFeatureType = async (companyId, featureName) => {
  const feature = await getFeatureForCompany(companyId, featureName);

  if (!feature || !feature.included) {
    return null;
  }

  return feature.type || 'metered';
};

/**
 * Get all available plans
 * @returns {Promise<Array>} Array of all plan documents
 */
export const getAllPlans = async () => {
  const collections = await initializeMongoDB();

  const result = await collections.plan.aggregate([]).toArray();

  return result;
};

/**
 * Check transcription limit for a company using usage tracking
 * @param {string} companyId - The company ID
 * @returns {Promise<Object>} Object with allowed: boolean, currentCount: number, maxAllowed: number|null, message?: string
 */
export const checkTranscriptionLimit = async (companyId) => {
  try {
    // Check if the feature is included
    const isIncluded = await isFeatureIncluded(companyId, 'transcription');

    if (!isIncluded) {
      return {
        allowed: false,
        currentCount: 0,
        maxAllowed: 0,
        message: 'The "Transcription" feature is not included in your current plan. Please upgrade your subscription.',
      };
    }

    // Get the feature limit
    const limit = await getFeatureLimit(companyId, 'transcription');

    if (limit === null || limit === undefined) {
      // Unlimited
      return {
        allowed: true,
        currentCount: 0,
        maxAllowed: null,
      };
    }

    // Get available usage from company usage tracking
    const usageInfo = await getAvailableUsage(companyId, 'transcription', limit);

    // Check if limit is exceeded
    if (usageInfo.available <= 0) {
      return {
        allowed: false,
        currentCount: usageInfo.used,
        maxAllowed: limit,
        resetDate: usageInfo.resetDate,
        message: `You have reached your plan limit of ${limit} transcriptions. Your usage will reset on ${usageInfo.resetDate ? new Date(usageInfo.resetDate).toLocaleDateString() : 'the next billing cycle'}.`,
      };
    }

    return {
      allowed: true,
      currentCount: usageInfo.used,
      maxAllowed: limit,
      available: usageInfo.available,
      resetDate: usageInfo.resetDate,
    };
  } catch (error) {
    return {
      allowed: false,
      currentCount: 0,
      maxAllowed: 0,
      message: 'Error checking transcription plan limits',
      error: error.message,
    };
  }
};

/**
 * Check inviteYourOwnUsers limit for a company using usage tracking
 * @param {string} companyId - The company ID
 * @returns {Promise<Object>} Object with allowed: boolean, currentCount: number, maxAllowed: number|null, message?: string
 */
export const checkInviteYourOwnUsersLimit = async (companyId) => {
  try {
    // Check if the feature is included
    const isIncluded = await isFeatureIncluded(companyId, 'inviteYourOwnUsers');

    if (!isIncluded) {
      return {
        allowed: false,
        currentCount: 0,
        maxAllowed: 0,
        message: 'The "Invite Your Own Users" feature is not included in your current plan. Please upgrade your subscription.',
      };
    }

    // Get the feature limit
    const limit = await getFeatureLimit(companyId, 'inviteYourOwnUsers');

    if (limit === null || limit === undefined) {
      // Unlimited
      return {
        allowed: true,
        currentCount: 0,
        maxAllowed: null,
      };
    }

    // Get available usage from company usage tracking
    const usageInfo = await getAvailableUsage(companyId, 'inviteYourOwnUsers', limit);

    // Check if limit is exceeded
    if (usageInfo.available <= 0) {
      return {
        allowed: false,
        currentCount: usageInfo.used,
        maxAllowed: limit,
        resetDate: usageInfo.resetDate,
        message: `You have reached your plan limit of ${limit} analyses. Your usage will reset on ${usageInfo.resetDate ? new Date(usageInfo.resetDate).toLocaleDateString() : 'the next billing cycle'}.`,
      };
    }

    return {
      allowed: true,
      currentCount: usageInfo.used,
      maxAllowed: limit,
      available: usageInfo.available,
      resetDate: usageInfo.resetDate,
    };
  } catch (error) {
    return {
      allowed: false,
      currentCount: 0,
      maxAllowed: 0,
      message: 'Error checking inviteYourOwnUsers plan limits',
      error: error.message,
    };
  }
};

/**
 * Check panelParticipants limit for a company using usage tracking
 * @param {string} companyId - The company ID
 * @returns {Promise<Object>} Object with allowed: boolean, currentCount: number, maxAllowed: number|null, message?: string
 */
export const checkPanelParticipantsLimit = async (companyId) => {
  try {
    // Check if the feature is included
    const isIncluded = await isFeatureIncluded(companyId, 'panelParticipants');

    if (!isIncluded) {
      return {
        allowed: false,
        currentCount: 0,
        maxAllowed: 0,
        message: 'The "Panel Participants" feature is not included in your current plan. Please upgrade your subscription.',
      };
    }

    // Get the feature limit
    const limit = await getFeatureLimit(companyId, 'panelParticipants');

    if (limit === null || limit === undefined) {
      // Unlimited
      return {
        allowed: true,
        currentCount: 0,
        maxAllowed: null,
      };
    }

    // Get available usage from company usage tracking
    const usageInfo = await getAvailableUsage(companyId, 'panelParticipants', limit);

    // Check if limit is exceeded
    if (usageInfo.available <= 0) {
      return {
        allowed: false,
        currentCount: usageInfo.used,
        maxAllowed: limit,
        resetDate: usageInfo.resetDate,
        message: `You have reached your plan limit of ${limit} panel participants. Your usage will reset on ${usageInfo.resetDate ? new Date(usageInfo.resetDate).toLocaleDateString() : 'the next billing cycle'}.`,
      };
    }

    return {
      allowed: true,
      currentCount: usageInfo.used,
      maxAllowed: limit,
      available: usageInfo.available,
      resetDate: usageInfo.resetDate,
    };
  } catch (error) {
    return {
      allowed: false,
      currentCount: 0,
      maxAllowed: 0,
      message: 'Error checking panelParticipants plan limits',
      error: error.message,
    };
  }
};
