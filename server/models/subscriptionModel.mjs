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

export const getSubscriptionDataInDb = async (companyId) => {
  const whereClause = {
    company_id: companyId,
  };

  const subscriptionData = await prisma.subscription.findUnique({
    where: whereClause,
    select: {
      id: true,
      expires_at: true,
    },
          id: true,
          expires_at: true,
        },
      },
    },

  });

  return subscriptionData;
};

export const createFreeTrialSubscription = async (companyId) => {
  const createCustomerSubscriptionQuery = await prisma.subscription.create({
    data: {
      company_id: companyId,
      // expires_at: new Date(Date.now() + 604800000), // TODO - ENABLE after open beta finishes
      expires_at: new Date('3000-01-01T23:59:59.999Z'), // TODO - REMOVE after open beta finishes

    },
  });
  return createCustomerSubscriptionQuery;
};
