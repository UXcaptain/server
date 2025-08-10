import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { posthogCreateBillingId, posthogUserSubscriptionCreated, posthogUserSubscriptionEnded } from './posthogModel.mjs';

const prisma = new PrismaClient();

export const storeSubscriptionInDb = async (checkoutSessionData) => {
  await prisma.subscription.create({
    data: {
      user: {
        connect: {
          id: checkoutSessionData.userId,
        },
      },
      id: checkoutSessionData.subscriptionId,
    },
  });

  posthogUserSubscriptionCreated(checkoutSessionData);
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

  posthogCreateBillingId(companyId); // TODO -- fix the associated of the event

  return user;
};

export const deleteSubscriptionInDb = async (subscriptionDeletionData) => {
  const whereClause = {
    stripe_subscription_id: subscriptionDeletionData.subscriptionId,
  };

  await prisma.subscription.delete({
    where: whereClause,
  });

  posthogUserSubscriptionEnded(subscriptionDeletionData);
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
    },
  });
  return createCustomerSubscriptionQuery;
};
