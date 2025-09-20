import { client } from '../config/posthog-node.mjs';
import { logError } from '../config/loggerFunctions.mjs';

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
        loginMethod: loginMethod,
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
      distinctId: checkoutSessionData.userId,
      event: 'subscriptionCreated',
      /* properties: {
        $set: { // TODO - decide if this should be a person or event property & probably should be a company ID
        planName: checkoutSessionData.metadata.planName, // TODO - ADD THIS VALUE
        planBillingCycle: checkoutSessionData.metadata.planBillingCycle, // TODO - ADD THIS VALUE
      },
    }, */
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

export const posthogUserDeleteAccount = async (distinctId) => {
  try {
    client.capture({
      distinctId: distinctId,
      event: 'userDeletedAccount',
      properties: {
        $set: {
          isDeleted: true,
        },
        $unset: ['email'],
      },
    });
  } catch (error) {
    logError('error sending posthogUserDeleteAccount event to posthog', error, 'userDeletedAccount');
  }
};

export const posthogAnalysisCreated = async (analysisData) => {
  try {
    client.capture({
      distinctId: analysisData.owner_id,
      event: 'AnalysisCreated',
      properties: {
        device: analysisData.device,
        // status: analysisData.status, //* for now, will always be created as 'published'
        max_number_of_participants: analysisData.maxNumberOfParticipants,
      },
    });
  } catch (error) {
    logError('error sending posthogUserUpdatedPassword event to posthog', error, 'userUpdatedPassword');
  }
};
