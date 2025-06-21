import { PrismaClient } from '../config/generated/prisma/client/index.js';

const prisma = new PrismaClient();

export const storeSubscriptionInDb = async (subscriptionData) => {
  await prisma.subscription.create({
    data: {
      user: {
        connect: {
          stripe_customer_id: subscriptionData.customer,
        },
      },
      plan_name: subscriptionData.planType || 'basic',
      status: subscriptionData.status,
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

export const markSubscriptionAsCancelledInDb = async (cancelData) => {
  const whereClause = {
    stripe_subscription_id: cancelData.id,
  };

  await prisma.subscription.update({
    where: whereClause,
    data: {
      status: 'cancelled',
      current_period_end_date: new Date(cancelData.cancelAt * 1000),
    },
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
