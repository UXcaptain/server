import { ObjectId } from 'mongodb';
import { initializeMongoDB } from '../db/mongodb.js';
import { stripeInstance } from '../config/stripe.js';

export const updateSubscriptionInDb = async (checkoutSessionData) => {
  const { companyId, userId, subscriptionId, planName, planBillingCycle } = checkoutSessionData;

  const collections = await initializeMongoDB();
  const companyCollection = collections.company;

  const currentDate = new Date();

  let status, currentPeriodStart, currentPeriodEnd, cancelAtPeriodEnd, canceledAt;

  try {
    const stripeSubscription = await stripeInstance.subscriptions.retrieve(subscriptionId);

    status = stripeSubscription.status;
    currentPeriodStart = new Date(stripeSubscription.current_period_start * 1000);
    currentPeriodEnd = new Date(stripeSubscription.current_period_end * 1000);
    cancelAtPeriodEnd = stripeSubscription.cancel_at_period_end;
    canceledAt = stripeSubscription.canceled_at ? new Date(stripeSubscription.canceled_at * 1000) : null;
  } catch (error) {
    throw new Error(`Failed to fetch subscription from Stripe: ${error.message}`);
  }

  const updateResult = await companyCollection.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(companyId) },
        update: {
          $set: {
            subscription: {
              stripeSubscriptionId: subscriptionId,
              status: status,
              planName: planName,
              planBillingCycle: planBillingCycle,
              currentPeriodStart: currentPeriodStart,
              currentPeriodEnd: currentPeriodEnd,
              createdAt: currentDate,
              updatedAt: currentDate,
              cancelAtPeriodEnd: cancelAtPeriodEnd,
              canceledAt: canceledAt
            },
            updatedAt: currentDate
          }
        }
      }
    }
  ]);

  return updateResult;
};

export const storeBillingCompanyIdInDb = async (companyId, stripeCustomerId) => {
  const collections = await initializeMongoDB();
  const companyCollection = collections.company;

  await companyCollection.bulkWrite([
    {
      updateOne: {
        filter: { _id: new ObjectId(companyId) },
        update: {
          $set: {
            stripeId: stripeCustomerId,
            updatedAt: new Date()
          }
        }
      }
    }
  ]);

  const updateResult = await companyCollection.aggregate([
    { $match: { _id: new ObjectId(companyId) } },
    { $project: { stripeId: 1, updatedAt: 1 } }
  ]).toArray();

  return updateResult[0];
};

export const deleteSubscriptionInDb = async (subscriptionDeletionData) => {
  const { customerId } = subscriptionDeletionData;

  const collections = await initializeMongoDB();
  const companyCollection = collections.company;

  await companyCollection.bulkWrite([
    {
      updateOne: {
        filter: { stripeId: customerId },
        update: {
          $unset: {
            subscription: 1
          },
          $set: {
            updatedAt: new Date()
          }
        }
      }
    }
  ]);

  const updateResult = await companyCollection.aggregate([
    { $match: { stripeId: customerId } },
    { $project: { stripeId: 1, subscription: 1, updatedAt: 1 } }
  ]).toArray();

  return updateResult[0];
};

export const getSubscriptionDataInDb = async (companyId) => {
  const collections = await initializeMongoDB();
  const companyCollection = collections.company;

  const companyData = await companyCollection.aggregate([
    { $match: { _id: new ObjectId(companyId) } },
    { $project: { stripeId: 1, subscription: 1 } }
  ]).toArray();

  if (!companyData || companyData.length === 0) {
    return null;
  }

  const data = companyData[0];

  return {
    id: data.subscription?.stripeSubscriptionId || null,
    expiresAt: data.subscription?.currentPeriodEnd || null,
    nextChargeAt: data.subscription?.currentPeriodEnd || null,
    planName: data.subscription?.planName || 'free',
    status: data.subscription?.status || 'trialing',
    cancelAtPeriodEnd: data.subscription?.cancelAtPeriodEnd || false,
    canceledAt: data.subscription?.canceledAt || null,
    company: {
      stripeId: data.stripeId
    }
  };
};

export const updateSubscriptionFromStripeInDb = async (subscriptionId, stripeSubscriptionData) => {
  const collections = await initializeMongoDB();
  const companyCollection = collections.company;

  const currentDate = new Date();

  const companyData = await companyCollection.aggregate([
    { $match: { 'subscription.stripeSubscriptionId': subscriptionId } },
    { $project: { 'subscription.planName': 1, 'subscription.planBillingCycle': 1 } }
  ]).toArray();

  if (!companyData || companyData.length === 0) {
    return null;
  }

  const existingPlanName = companyData[0].subscription?.planName || 'free';
  const existingPlanBillingCycle = companyData[0].subscription?.planBillingCycle || 'monthly';

  const canceledAt = stripeSubscriptionData.canceled_at
    ? new Date(stripeSubscriptionData.canceled_at * 1000)
    : null;

  await companyCollection.bulkWrite([
    {
      updateOne: {
        filter: { 'subscription.stripeSubscriptionId': subscriptionId },
        update: {
          $set: {
            subscription: {
              stripeSubscriptionId: stripeSubscriptionData.id,
              status: stripeSubscriptionData.status,
              planName: existingPlanName,
              planBillingCycle: existingPlanBillingCycle,
              currentPeriodStart: new Date(stripeSubscriptionData.current_period_start * 1000),
              currentPeriodEnd: new Date(stripeSubscriptionData.current_period_end * 1000),
              cancelAtPeriodEnd: stripeSubscriptionData.cancel_at_period_end,
              canceledAt: canceledAt,
              updatedAt: currentDate
            },
            updatedAt: currentDate
          }
        }
      }
    }
  ]);

  const updatedData = await companyCollection.aggregate([
    { $match: { 'subscription.stripeSubscriptionId': subscriptionId } },
    { $project: { stripeId: 1, subscription: 1, updatedAt: 1 } }
  ]).toArray();

  return updatedData[0];
};
