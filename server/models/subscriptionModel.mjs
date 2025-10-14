import { PrismaClient } from '../config/generated/prisma/client/index.js';
// import { posthogCreateBillingId, posthogUserSubscriptionCreated, posthogUserSubscriptionEnded } from './posthogModel.mjs';

const prisma = new PrismaClient();

export const updateSubscriptionInDb = async (checkoutSessionData) => {
  const whereClause = {
    company_id: checkoutSessionData.companyId,
  };

  await prisma.subscription.update({
    where: whereClause,
    data: {
      id: checkoutSessionData.subscriptionId,
      isTrial: false,
    },
  });

  // posthogUserSubscriptionCreated(checkoutSessionData);// TODO -- fix the associated of the event
};

export const storeBillingCompanyIdInDb = async (companyId, stripeCustomerId) => {
  const whereClause = {
    id: companyId,
  };

  const user = await prisma.company.update({
    where: whereClause,
    data: {
      stripe_id: stripeCustomerId,
    },
  });

  // posthogCreateBillingId(companyId); // TODO -- fix the associated of the event

  return user;
};

export const deleteSubscriptionInDb = async (subscriptionDeletionData) => {
  const whereClause = {
    id: subscriptionDeletionData.subscriptionId,
  };

  await prisma.subscription.delete({
    where: whereClause,
  });

  // posthogUserSubscriptionEnded(subscriptionDeletionData);
};

export const getBillingDataInDb = async (companyId) => {
  const whereClause = {
    id: companyId,
  };

  const billingData = await prisma.company.findUnique({
    where: whereClause,
    select: {
      stripe_id: true,
      Subscription: {
        select: {
          id: true,
          expires_at: true,
        },
      },
    },

  });
  return billingData;
};

export const createFreeTrialSubscription = async (companyId) => {
  const createCustomerSubscriptionQuery = await prisma.subscription.create({
    data: {
      company_id: companyId,
      expires_at: new Date(Date.now() + 604800000),
    },
  });
  return createCustomerSubscriptionQuery;
};
