import { client } from '../config/posthog-node.mjs';
import { logError } from '../config/loggerFunctions.mjs';

export const posthogUserSignedUp = async (user) => {
  try {
    client.capture({
      distinctId: user.id,
      event: 'userSignedUp',
      properties: {
        $set: {
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    logError('error sending event to posthog', error, 'userSignedUp');
    return;
  } finally {
    await client.shutdown();
  }
};

export const posthogUserSuccessLoggedIn = async (distinctId, loginMethod) => {
  try {
    client.capture({
      distinctId: distinctId,
      event: 'userLoggedIn',
      properties: {
        loginMethod,
      },
    });
  } catch (error) {
    logError('error sending event to posthog', error, 'userSuccessLogin');
  } finally {
    await client.shutdown();
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

export const posthogUserSubscriptionCreated = async (distinctId) => {
  try {
    client.capture({
      distinctId: `${distinctId}`,
      event: 'subscriptionCreated',
      properties: {
        $set: {
          planName: 'basic',
          planBillingCycle: 'monthly',
        },

      },
    });
  } catch (error) {
    logError('error sending event to posthog', error, 'subscriptionCreated');
  } finally {
    client.shutdown();
  }
};

export const posthogUserSubscriptionCancelled = async (distinctId) => {
  try {
    client.capture({
      distinctId: `${distinctId}`,
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
