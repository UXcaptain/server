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
    logError('error sending event to posthog', error, 'userSignedUp');
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
    logError('error sending event to posthog', error, 'userSuccessLogin');
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
    logError('error sending event to posthog', error, 'userLoggedOut');
  } finally {
    await client.shutdown();
  }
};

export const posthogUserSubscriptionCreated = async (checkoutSessionData) => {
  try {
    client.capture({
      distinctId: checkoutSessionData.userId,
      event: 'subscriptionCreated',
    });
  } catch (error) {
    logError('error sending event to posthog', error, 'subscriptionCreated');
  } finally {
    client.shutdown();
  }
};

export const posthogUserSubscriptionEnded = async (subscriptionDeletionData) => {
  try {
    const user = await getUserByStripeCustomerId(subscriptionDeletionData.customerId);

    client.capture({
      distinctId: user.id,
      event: 'subscriptionCancelled',
    });
  } catch (error) {
    logError('error sending event to posthog', error, 'subscriptionCanceled');
  } finally {
    client.shutdown();
  }
};

export const posthogUserDeleteAccount = async (distinctId) => {
  try {
    client.capture({
      distinctId: distinctId,
      event: 'userDeletedAccount',
    });
  } catch (error) {
    logError('error sending posthogUserDeleteAccount event to posthog', error, 'userDeletedAccount');
  } finally {
    await client.shutdown();
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
  } finally {
    await client.shutdown();
  }
};
