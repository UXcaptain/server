import { getSubscriptionDataInDb } from '../models/subscriptionModel.js';

const isSubscriptionActive = (subscription) => {
  if (!subscription) {
    return false;
  }

  const { status, currentPeriodEnd, cancelAtPeriodEnd } = subscription;
  const now = new Date();
  const periodEndDate = new Date(currentPeriodEnd);

  const statusesGrantingAccess = ['active', 'trialing', 'past_due'];

  if (!statusesGrantingAccess.includes(status)) {
    return false;
  }

  if (periodEndDate <= now) {
    return false;
  }

  if (status === 'canceled' && cancelAtPeriodEnd) {
    return periodEndDate > now;
  }

  return true;
};

export const subscriptionChecker = async (req, res, next) => {
  const { companyId } = req.user;

  const subscriptionData = await getSubscriptionDataInDb(companyId);

  if (!subscriptionData) {
    return res.status(401).json({
      message: 'You need an active subscription to access this resource',
    });
  }

  if (!isSubscriptionActive(subscriptionData)) {
    return res.status(401).json({
      message: 'You need an active subscription to access this resource',
    });
  }

  next();
};

export { isSubscriptionActive };
