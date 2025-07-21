import { client } from '../config/posthog-node.mjs';
import { logError } from '../config/loggerFunctions.mjs';
import { getUserByStripeCustomerId } from './userModel.mjs';

export const posthogUserSignedUp = async (user) => {
  try {
    client.capture({
      distinctId: user.id,
      event: 'userSignedUp',
      properties: {
        $set_once: {
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    logError('error sending posthogUserSignedUp event to posthog', error, 'userSignedUp');
  }
};

export const posthogUserSuccessLoggedIn = async (distinctId, loginMethod) => {
  try {
    client.capture({
      distinctId: distinctId,
      event: 'userLoggedIn',
      properties: {
        $set: {
          loginMethod: loginMethod,
        },
      },
    });
  } catch (error) {
    logError('error sending posthogUserSuccessLoggedIn event to posthog', error, 'userSuccessLogin');
  }
};

// NOT being used currently due to implementation issues - cant figure how to get the distinctId
export const posthogUserLoggedOut = async (distinctId) => {
  try {
    client.capture({
      distinctId,
      event: 'userLoggedOut',
    });
  } catch (error) {
    logError('error sending posthogUserLoggedOut event to posthog', error, 'userLoggedOut');
  }
};

export const posthogUserSubscriptionCreated = async (checkoutSessionData) => {
  try {
    client.capture({
      distinctId: checkoutSessionData.metadata.userId,
      event: 'subscriptionCreated',
      properties: {
        $set: {
          planName: checkoutSessionData.metadata.planName,
          planBillingCycle: checkoutSessionData.metadata.planBillingCycle,
        },
      },
    });
  } catch (error) {
    logError('error sending posthogUserSubscriptionCreated event to posthog', error, 'subscriptionCreated');
  }
};

export const posthogUserSubscriptionEnded = async (subscriptionDeletionData) => {
  try {
    client.capture({
      distinctId: subscriptionDeletionData.metadata.userId,
      event: 'subscriptionCancelled',
    });
  } catch (error) {
    logError('error sending posthogUserSubscriptionEnded event to posthog', error, 'subscriptionEnded');
  }
};

export const posthogUserDeleteAccount = async (distinctId) => {
  try {
    client.capture({
      distinctId: distinctId,
      event: 'userDeletedAccount',
      properties: {
        set: {
          isDeleted: true,
        },
        $unset: ['email'],
      },
    });
  } catch (error) {
    logError('error sending posthogUserDeleteAccount event to posthog', error, 'userDeletedAccount');
  }
};

export const posthogUserUpdatedPassword = async (distinctId) => {
  try {
    client.capture({
      distinctId,
      event: 'userUpdatedPassword',
    });
  } catch (error) {
    logError('error sending posthogUserUpdatedPassword event to posthog', error, 'userUpdatedPassword');
  }
};

export const posthogAnalysisCreated = async (distinctId) => {
  try {
    client.capture({
      distinctId,
      event: 'userUpdatedPassword',
    });
  } catch (error) {
    logError('error sending posthogUserUpdatedPassword event to posthog', error, 'userUpdatedPassword');
  }
};

export const posthogCreateBillingId = (distinctId) => {
  try {
    client.capture({
      distinctId: distinctId,
      event: 'createBillingId',
    });
  } catch (error) {
    logError('error sending event to posthog', error, 'subscriptionCanceled');
  }
};
