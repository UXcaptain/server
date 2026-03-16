import { ObjectId } from 'mongodb';
import { initializeMongoDB } from '../db/mongodb.js';

/**
 * Initialize usage tracking for a new company
 * @param {string} companyId - The company ID
 */
export const initializeUsageForCompany = async (companyId) => {
  const collections = await initializeMongoDB();
  const currentDate = new Date();
  
  // Calculate next month for reset date
  const resetDate = new Date(currentDate);
  resetDate.setMonth(resetDate.getMonth() + 1);
  resetDate.setDate(1);
  resetDate.setHours(0, 0, 0, 0);

  await collections.company.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(companyId) },
        update: {
          $set: {
            usage: {
              transcription: {
                used: 0,
                resetDate: resetDate,
              },
              inviteYourOwnUsers: {
                used: 0,
                resetDate: resetDate,
              },
              panelParticipants: {
                used: 0,
                resetDate: resetDate,
              },
            },
            updatedAt: currentDate,
          },
        },
      },
    },
  ]);
};

/**
 * Get company usage data
 * @param {string} companyId - The company ID
 * @returns {Promise<Object>} Company usage data
 */
export const getCompanyUsage = async (companyId) => {
  const collections = await initializeMongoDB();

  const result = await collections.company.aggregate([
    {
      $match: {
        _id: new ObjectId(companyId),
      },
    },
    {
      $project: {
        _id: 1,
        usage: 1,
      },
    },
  ]).toArray();

  const company = result[0] || null;

  return company?.usage || null;
};

/**
 * Increment usage for a specific feature
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name ('transcription', 'inviteYourOwnUsers', 'panelParticipants')
 * @param {number} increment - The amount to increment (default: 1)
 */
export const incrementFeatureUsage = async (companyId, featureName, increment = 1) => {
  const collections = await initializeMongoDB();
  const currentDate = new Date();

  // Check if usage exists and reset date has passed
  const companyData = await collections.company.aggregate([
    {
      $match: {
        _id: new ObjectId(companyId),
      },
    },
    {
      $project: {
        'usage.resetDate': 1,
      },
    },
  ]).toArray();

  if (!companyData[0]?.usage) {
    // Usage not initialized, initialize it
    await initializeUsageForCompany(companyId);
  } else {
    const resetDate = companyData[0].usage.resetDate;
    const featureResetDate = resetDate?.[featureName] || resetDate;

    // Check if we need to reset usage
    if (featureResetDate && currentDate >= featureResetDate) {
      await resetFeatureUsage(companyId, featureName);
    }
  }

  // Increment the usage
  const usagePath = `usage.${featureName}.used`;
  
  await collections.company.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(companyId) },
        update: {
          $inc: {
            [usagePath]: increment,
          },
          $set: {
            updatedAt: currentDate,
          },
        },
      },
    },
  ]);
};

/**
 * Reset usage for a specific feature
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name
 * @param {Date} newResetDate - The new reset date (optional, defaults to next month)
 */
export const resetFeatureUsage = async (companyId, featureName, newResetDate = null) => {
  const collections = await initializeMongoDB();
  const currentDate = new Date();

  // Calculate next month for reset date if not provided
  const resetDate = newResetDate || new Date(currentDate);
  resetDate.setMonth(resetDate.getMonth() + 1);
  resetDate.setDate(1);
  resetDate.setHours(0, 0, 0, 0);

  await collections.company.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(companyId) },
        update: {
          $set: {
            [`usage.${featureName}.used`]: 0,
            [`usage.${featureName}.resetDate`]: resetDate,
            updatedAt: currentDate,
          },
        },
      },
    },
  ]);
};

/**
 * Check if usage needs to be reset and reset if necessary
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name (optional, checks all if not provided)
 */
export const checkAndResetUsage = async (companyId, featureName = null) => {
  const collections = await initializeMongoDB();
  const currentDate = new Date();

  const matchStage = {
    _id: new ObjectId(companyId),
  };

  if (featureName) {
    matchStage[`usage.${featureName}.resetDate`] = { $lte: currentDate };
  } else {
    matchStage['usage.inviteYourOwnUsers.resetDate'] = { $lte: currentDate };
  }

  const companyData = await collections.company.aggregate([
    {
      $match: matchStage,
    },
    {
      $project: {
        usage: 1,
      },
    },
  ]).toArray();

  if (!companyData[0]?.usage) {
    return;
  }

  const usage = companyData[0].usage;

  // Check and reset each feature that needs it
  const features = featureName ? [featureName] : ['transcription', 'inviteYourOwnUsers', 'panelParticipants'];

  for (const feature of features) {
    if (usage[feature]?.resetDate && currentDate >= usage[feature].resetDate) {
      await resetFeatureUsage(companyId, feature);
    }
  }
};

/**
 * Get available usage for a feature
 * @param {string} companyId - The company ID
 * @param {string} featureName - The feature name
 * @param {number} limit - The limit from the plan
 * @returns {Promise<Object>} Object with available count and reset date
 */
export const getAvailableUsage = async (companyId, featureName, limit) => {
  await checkAndResetUsage(companyId, featureName);

  const usage = await getCompanyUsage(companyId);

  if (!usage || !usage[featureName]) {
    return {
      used: 0,
      available: limit,
      resetDate: null,
    };
  }

  const used = usage[featureName].used || 0;
  const resetDate = usage[featureName].resetDate;

  return {
    used,
    available: limit - used,
    resetDate,
  };
};

/**
 * Reset all usage for a company (for testing or manual reset)
 * @param {string} companyId - The company ID
 */
export const resetAllUsageForCompany = async (companyId) => {
  const collections = await initializeMongoDB();
  const currentDate = new Date();

  // Calculate next month for reset date
  const resetDate = new Date(currentDate);
  resetDate.setMonth(resetDate.getMonth() + 1);
  resetDate.setDate(1);
  resetDate.setHours(0, 0, 0, 0);

  await collections.company.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(companyId) },
        update: {
          $set: {
            'usage.transcription.used': 0,
            'usage.transcription.resetDate': resetDate,
            'usage.inviteYourOwnUsers.used': 0,
            'usage.inviteYourOwnUsers.resetDate': resetDate,
            'usage.panelParticipants.used': 0,
            'usage.panelParticipants.resetDate': resetDate,
            updatedAt: currentDate,
          },
        },
      },
    },
  ]);
};
