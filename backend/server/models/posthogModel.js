import { client } from '../config/posthog-node.js';
import { logError } from '../config/loggerFunctions.js';

export const posthogCustomerSignedUp = async (userId, userData) => {
  try {
    client.groupIdentify({
      groupType: 'company',
      groupKey: userData.companyId,
      properties: {
        name: userData.companyId, // Sending ID until we have a name for the company
        signUpDate: new Date().toISOString(),
      },
    });

    client.capture({
      distinctId: userId,
      event: 'CustomerSignedUp',
      properties: {
        $set_once: {
          email: userData.email,
          role: userData.role,
          company: userData.companyId,
        },
      },
      groups: { company: userData.companyId },
    });
  } catch (error) {
    logError('error sending posthogCustomerSignedUp event to posthog', error, 'CustomerSignedUp');
  }
};

export const posthogParticipantSignedUp = async (userId, userData) => {
  try {
    client.capture({
      distinctId: userId,
      event: 'ParticipantSignedUp',
      properties: {
        $set_once: {
          email: userData.email,
          role: userData.role,
        },
      },
    });
  } catch (error) {
    logError('error sending posthogParticipantSignedUp event to posthog', error, 'ParticipantSignedUp');
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

export const posthogAnalysisCreated = async (analysisData, analysisId) => {
  try {
    client.capture({
      distinctId: analysisData.created_by,
      event: 'AnalysisCreated',
      properties: {
        company_id: analysisData.owner_company_id,
        analysis_device: analysisData.device,
        analysis_url: analysisData.url,
        analysis_name: analysisData.name,
        max_number_of_participants: analysisData.maxNumberOfParticipants,
        analysis_id: analysisId,
      },
    });
  } catch (error) {
    logError('error sending posthogAnalysisCreated event to posthog', error, 'analysisCreated');
  }
};

export const posthogPasswordRequestTokenRequested = async (distinctId, passwordResetToken) => {
  try {
    client.capture({
      distinctId: distinctId,
      event: 'passwordResetTokenRequested',
      properties: {
        passwordResetToken: passwordResetToken,
      },
    });
  } catch (error) {
    logError('error sending posthogPasswordRequestTokenRequested event to posthog', error, 'passwordResetTokenRequested');
  }
};
