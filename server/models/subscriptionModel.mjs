import { PrismaClient } from '../config/generated/prisma/client/index.js';
import { logError } from '../config/loggerFunctions.mjs';

const prisma = new PrismaClient();

export const storeSubscriptionInDb = async (subscriptionData) => {
  try {
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
  } catch (error) {
    logError('Error storing transaction:', error);
  }
};

export const storeStripeCustomerIdInDb = async (userId, stripeCustomerId) => {
  try {
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
  } catch (error) {
    logError('Error storing Stripe customer ID:', error);
    throw error;
  }
};

export const markSubscriptionAsCancelledInDb = async (cancelData) => {
  try {
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
  } catch (error) {
    logError('error marking subscription as cancelled', error);
  }
};

export const getSubscriptionDataInDb = async (userId) => {
  try {
    const whereClause = {
      AND: [
        {
          user_id: userId,
        },
        {
          status: 'active',
        },
      ],

    };

    const subscriptionData = await prisma.subscription.findFirst({
      where: whereClause,
      select: {
        status: true,
        plan_name: true,
      },
    });

    return subscriptionData;
  } catch (error) {
    logError('error checking for active subscriptions', error);
    throw error;
  }
};
