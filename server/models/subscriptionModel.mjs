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

export const storeBillingCustomerIdInDb = async (userId, stripeCustomerId) => {
  const whereClause = {
    id: userId,
  };

  const user = await prisma.user.update({
    where: whereClause,
    data: {
      stripe_customer_id: stripeCustomerId,
    },
  });

  posthogCreateBillingId(userId);

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

export const getBillingDataInDb = async (userId) => {
  const whereClause = {
    id: userId,
  };

  const billingData = await prisma.user.findUnique({
    where: whereClause,
    select: {
      stripe_customer_id: true,
      Subscription: {
        select: {
          id: true,
        },
      },
    },
  });
  return billingData;
};
