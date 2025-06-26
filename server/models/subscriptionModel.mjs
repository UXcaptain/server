import { PrismaClient } from '../config/generated/prisma/client/index.js';

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

  return user;
};

export const deleteSubscriptionInDb = async (subscriptionDeletionData) => {
  const whereClause = {
    stripe_subscription_id: subscriptionDeletionData.subscriptionId,
  };

  await prisma.subscription.delete({
    where: whereClause,
  });
};

export const getBillingDataInDb = async (userId) => {
  const whereClause = {
    id: userId,
  };

  const billingData = await prisma.user.findUnique({
    where: whereClause,
    omit: {
      id: true,
      email: true,
      role: true,
      created_at: true,
      last_updated_at: true,
      last_login_at: true,
      password: true,
    },
    include: {
      Subscription: {
        omit: {
          id: true,
          user_id: true,
          created_at: true,
          updated_at: true,
        },
        where: {
          status: 'active',
        },
      },
    },
  });
  return billingData;
};
