import { ObjectId } from 'mongodb';
import { initializeMongoDB } from '../db/mongodb.js';
import { logInfo } from '../config/loggerFunctions.js';
import { posthogAnalysisCreated } from './posthogModel.js';

// Get analysis collection
const getAnalysisCollection = async () => {
  const collections = await initializeMongoDB();
  return collections.analysis;
};

export const createAnalysisInDb = async (analysisData, userData) => {
  const analysisCollection = await getAnalysisCollection();

  if (!userData._id) {
    throw new Error('User ID is required for creating analysis');
  }
  if (!userData.companyId) {
    throw new Error('Company ID is required for creating analysis');
  }

  const now = new Date();
  const documentData = {
    name: analysisData.name,
    status: 'published',
    tasks: analysisData.tasks || [],
    generalDetails: {
      device: analysisData.generalDetails?.device,
      url: analysisData.generalDetails?.url,
      scenario: analysisData.generalDetails?.scenario || null,
      recruitmentType: analysisData.generalDetails?.recruitmentType,
      maxNumberOfParticipants: parseInt(analysisData.generalDetails?.maxNumberOfParticipants, 10),
    },
    demographicFilters: {
      minAge: analysisData.minAge || null,
      maxAge: analysisData.maxAge || null,
      gender: analysisData.gender || null,
      country: analysisData.country || null,
      educationLevel: analysisData.educationLevel || null,
      minYearlyIncome: analysisData.minYearlyIncome || null,
      maxYearlyIncome: analysisData.maxYearlyIncome || null,
      technicalProficiency: analysisData.technicalProficiency || null,
      parentalStatus: analysisData.parentalStatus || null,
    },
    availableSpots: parseInt(analysisData.generalDetails?.maxNumberOfParticipants, 10),
    analysisEntries: [],
    createdBy: new ObjectId(userData._id),
    ownerCompanyId: new ObjectId(userData.companyId),
    createdAt: now,
    updatedAt: now,
  };

  // Use bulkWrite with insertOne for single document creation
  const result = await analysisCollection.bulkWrite([
    { insertOne: { document: documentData } },
  ]);

  const insertedId = result.insertedIds[0];

  // Create response object that matches Prisma's structure
  const analysisCreationInDbResponse = {
    ...documentData,
    _id: insertedId,
  };

  logInfo(`analysis ${analysisCreationInDbResponse._id} created in db`, analysisData);

  posthogAnalysisCreated(analysisCreationInDbResponse, analysisCreationInDbResponse._id.toString());

  return analysisCreationInDbResponse;
};

export const getAllAnalysesFromDb = async (ownerId, filters = {}) => {
  const analysisCollection = await getAnalysisCollection();

  const matchStage = {
    ownerCompanyId: new ObjectId(ownerId),
  };

  // Add any additional filters
  Object.keys(filters).forEach((key) => {
    matchStage[key] = filters[key];
  });

  const pipeline = [
    { $match: matchStage },
    {
      $addFields: {
        filteredEntries: {
          $filter: {
            input: '$analysisEntries',
            as: 'entry',
            cond: { $in: ['$$entry.status', ['submitted', 'accepted']] },
          },
        },
      },
    },
    {
      $addFields: {
        _count: {
          analysisEntry: { $size: '$filteredEntries' },
        },
      },
    },
    {
      $project: {
        generalDetails: 1,
        name: 1,
        status: 1,
        createdAt: 1,
        _count: 1,
        ownerCompanyId: 1,
      },
    },
  ];

  const analyses = await analysisCollection.aggregate(pipeline).toArray();

  return analyses;
};

export const getAnalysisDataById = async (analysisId) => {
  const analysisCollection = await getAnalysisCollection();

  const pipeline = [
    {
      $match: {
        _id: new ObjectId(analysisId),
      },
    },
    {
      $addFields: {
        filteredEntries: {
          $filter: {
            input: '$analysisEntries',
            as: 'entry',
            cond: { $in: ['$$entry.status', ['submitted', 'accepted']] },
          },
        },
      },
    },
    {
      $project: {
        generalDetails: 1,
        name: 1,
        status: 1,
        createdAt: 1,
        analysisEntry: '$filteredEntries',
        ownerCompanyId: 1,
        tasks: 1,
      },
    },
  ];

  const result = await analysisCollection.aggregate(pipeline).toArray();

  if (result.length === 0) {
    return null;
  }

  return result[0];
};

export const getAnalysisDataForParticipantsFromDb = async (analysisId) => {
  const analysisCollection = await getAnalysisCollection();

  const pipeline = [
    {
      $match: {
        _id: new ObjectId(analysisId),
      },
    },
    {
      $addFields: {
        filteredEntries: {
          $filter: {
            input: '$analysisEntries',
            as: 'entry',
            cond: { $in: ['$$entry.status', ['in_progress', 'submitted', 'accepted']] },
          },
        },
      },
    },
    {
      $addFields: {
        _count: {
          analysisEntry: { $size: '$filteredEntries' },
        },
      },
    },
    {
      $project: {
        tasks: 1,
        generalDetails: 1,
        status: 1,
        availableSpots: 1,
        _count: 1,
      },
    },
  ];

  const result = await analysisCollection.aggregate(pipeline).toArray();

  if (result.length === 0) {
    return null;
  }

  return result[0];
};

export const getAvailableAnalysesForParticipant = async (participantProfile) => {
  const analysisCollection = await getAnalysisCollection();

  const matchConditions = [
    { status: 'published' },
    { 'generalDetails.recruitmentType': 'panelProvided' },
    { availableSpots: { $gt: 0 } },
    { 'generalDetails.device': { $in: participantProfile.availableDevices || [] } },
  ];

  // Demographic filters (commented out as in original)
  // if (participantProfile.age) {
  //   matchConditions.push({ 'demographicFilters.minAge': { $gte: participantProfile.age } });
  //   matchConditions.push({ 'demographicFilters.maxAge': { $lte: participantProfile.age } });
  // }
  // if (participantProfile.gender) {
  //   matchConditions.push({ 'demographicFilters.gender': { $in: [participantProfile.gender, 'any'] } });
  // }
  // if (participantProfile.country) {
  //   matchConditions.push({ 'demographicFilters.country': { $in: [participantProfile.country, 'any'] } });
  // }
  // if (participantProfile.educationLevel) {
  //   matchConditions.push({ 'demographicFilters.educationLevel': { $in: [participantProfile.educationLevel, 'any'] } });
  // }
  // if (participantProfile.yearlyIncome) {
  //   matchConditions.push({ 'demographicFilters.minYearlyIncome': { $gte: participantProfile.yearlyIncome } });
  //   matchConditions.push({ 'demographicFilters.maxYearlyIncome': { $lte: participantProfile.yearlyIncome } });
  // }
  // if (participantProfile.parentalStatus) {
  //   matchConditions.push({ 'demographicFilters.parentalStatus': { $in: [participantProfile.parentalStatus, 'any'] } });
  // }
  // if (participantProfile.technicalProficiency) {
  //   matchConditions.push({ 'demographicFilters.technicalProficiency': { $in: [participantProfile.technicalProficiency, 'any'] } });
  // }

  const pipeline = [
    {
      $match: {
        $and: matchConditions,
      },
    },
    {
      $project: {
        _id: 1,
      },
    },
  ];

  const availableAnalyses = await analysisCollection.aggregate(pipeline).toArray();

  return availableAnalyses;
};

export const createAnalysisEntryInDb = async (analysisId, userId, demographics = null) => {
  const analysisCollection = await getAnalysisCollection();

  const pipeline = [
    { $match: { _id: new ObjectId(analysisId) } },
  ];
  const aggResult = await analysisCollection.aggregate(pipeline).toArray();
  const analysis = aggResult[0] || null;
  if (!analysis) {
    throw new Error('Analysis not found');
  }

  const currentEntriesCount = analysis.analysisEntries?.length || 0;
  if (currentEntriesCount >= 20) {
    throw new Error('Maximum number of participants (20) reached for this analysis');
  }

  const entryId = new ObjectId();
  const now = new Date();

  const newEntry = {
    _id: entryId,
    participantUserId: userId ? new ObjectId(userId) : null,
    demographics: demographics || null,
    status: 'in_progress',
    fullTranscript: null,
    transcriptionSegments: null,
    createdAt: now,
    updatedAt: now,
  };

  const result = await analysisCollection.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(analysisId), availableSpots: { $gt: 0 } },
        update: {
          $push: { analysisEntries: newEntry },
          $inc: { availableSpots: -1 },
        },
      },
    },
  ]);

  if (result.modifiedCount === 0) {
    throw new Error('Could not create entry - no available spots or analysis not found');
  }

  return { _id: entryId };
};

export const getAnalysisEntryDetailsById = async (analysisId, entryId) => {
  const analysisCollection = await getAnalysisCollection();

  const pipeline = [
    {
      $match: { _id: new ObjectId(analysisId) },
    },
    {
      $unwind: '$analysisEntries',
    },
    {
      $match: { 'analysisEntries._id': new ObjectId(entryId) },
    },
    {
      $project: {
        _id: 1,
        ownerCompanyId: 1,
        analysisEntries: 1,
      },
    },
  ];

  const result = await analysisCollection.aggregate(pipeline).toArray();
  return result[0] || null;
};

export const markAnalysisEntryAsSubmitted = async (analysisId, entryId) => {
  const analysisCollection = await getAnalysisCollection();

  const result = await analysisCollection.bulkWrite([
    {
      updateOne: {
        filter: {
          _id: new ObjectId(analysisId),
          'analysisEntries._id': new ObjectId(entryId),
        },
        update: {
          $set: {
            'analysisEntries.$.status': 'submitted',
            'analysisEntries.$.updatedAt': new Date(),
          },
        },
      },
    },
  ]);

  if (result.matchedCount === 0) {
    return null;
  }

  return { analysisId, entryId };
};

export const markAnalysisEntryAsSubmittedById = async (entryId) => {
  const analysisCollection = await getAnalysisCollection();

  // First, find the analysis that contains this entry
  const pipeline = [
    {
      $match: {
        'analysisEntries._id': new ObjectId(entryId),
      },
    },
    {
      $project: {
        _id: 1,
      },
    },
  ];

  const analyses = await analysisCollection.aggregate(pipeline).toArray();

  if (analyses.length === 0) {
    return null;
  }

  const analysisId = analyses[0]._id;

  // Now update the entry status
  const result = await analysisCollection.bulkWrite([
    {
      updateOne: {
        filter: {
          _id: analysisId,
          'analysisEntries._id': new ObjectId(entryId),
        },
        update: {
          $set: {
            'analysisEntries.$.status': 'submitted',
            'analysisEntries.$.updatedAt': new Date(),
          },
        },
      },
    },
  ]);

  if (result.matchedCount === 0) {
    return null;
  }

  return { analysisId: analysisId.toString(), entryId };
};

export const findExpiredAnalysisEntriesInDb = async () => {
  const analysisCollection = await getAnalysisCollection();
  const sixtyMinutesAgo = new Date(Date.now() - 60 * 60 * 1000);

  const pipeline = [
    {
      $match: {
        'analysisEntries.status': 'in_progress',
        'analysisEntries.createdAt': { $lt: sixtyMinutesAgo },
      },
    },
    {
      $unwind: '$analysisEntries',
    },
    {
      $match: {
        'analysisEntries.status': 'in_progress',
        'analysisEntries.createdAt': { $lt: sixtyMinutesAgo },
      },
    },
    {
      $project: {
        _id: 1,
        analysisEntries: 1,
      },
    },
  ];

  const result = await analysisCollection.aggregate(pipeline).toArray();
  return result;
};

export const markAnalysisEntriesAsCancelledInDb = async (expiredAnalysisEntries) => {
  const analysisCollection = await getAnalysisCollection();

  const groupedByAnalysis = new Map();
  for (const entry of expiredAnalysisEntries) {
    const count = (groupedByAnalysis.get(entry._id) || 0) + 1;
    groupedByAnalysis.set(entry._id, count);
  }

  const operations = [];

  for (const entry of expiredAnalysisEntries) {
    operations.push({
      updateOne: {
        filter: {
          _id: entry._id,
          'analysisEntries._id': entry.analysisEntries._id,
        },
        update: {
          $set: {
            'analysisEntries.$.status': 'cancelled',
            'analysisEntries.$.updatedAt': new Date(),
          },
        },
      },
    });
  }

  for (const [analysisId, count] of groupedByAnalysis.entries()) {
    operations.push({
      updateOne: {
        filter: { _id: analysisId },
        update: {
          $inc: { availableSpots: count },
        },
      },
    });
  }

  if (operations.length === 0) {
    return { modifiedCount: 0 };
  }

  const result = await analysisCollection.bulkWrite(operations);
  return { modifiedCount: result.modifiedCount };
};

export const insertAnalysisEntryTranscriptionInDb = async (analysisId, entryId, transcriptionData) => {
  const analysisCollection = await getAnalysisCollection();

  const result = await analysisCollection.bulkWrite([
    {
      updateOne: {
        filter: {
          _id: new ObjectId(analysisId),
          'analysisEntries._id': new ObjectId(entryId),
        },
        update: {
          $set: {
            'analysisEntries.$.transcriptionSegments': transcriptionData.transcriptionSegments,
            'analysisEntries.$.fullTranscript': transcriptionData.fullTranscript,
            'analysisEntries.$.updatedAt': new Date(),
          },
        },
      },
    },
  ]);

  return { _id: entryId };
};


