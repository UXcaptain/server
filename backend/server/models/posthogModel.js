import { client } from '../config/posthog-node.js';
import { logError } from '../config/loggerFunctions.js';

export const posthogCustomerSignedUp = async (userId, userData, companyId, acquisitionData) => {
  try {
    client.groupIdentify({
      groupType: 'company',
      groupKey: companyId,
      properties: {
        name: companyId, // Sending ID until we have a name for the company
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
          company: companyId,
        },
        acquisitionSource: acquisitionData.utmSource || 'unknown',
        acquisitionMedium: acquisitionData.utmMedium || 'unknown',
        acquisitionCampaign: acquisitionData.utmCampaign || 'unknown',
        acquisitionContent: acquisitionData.utmContent || 'unknown',
        acquisitionTerm: acquisitionData.utmTerm || 'unknown',
        googleClickId: acquisitionData.gclid || 'none',
        facebookClickId: acquisitionData.fbclid || 'none',
      },
      groups: { company: companyId },
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
      distinctId: analysisData.createdBy,
      event: 'AnalysisCreated',
      properties: {
        companyId: analysisData.ownerCompanyId,
        analysisDevice: analysisData.device,
        analysisUrl: analysisData.url,
        analysisName: analysisData.name,
        maxNumberOfParticipants: analysisData.maxNumberOfParticipants,
        analysisId: analysisId,
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

export const posthogUserSubscriptionTrialWillEnd = async (trialWillEndData) => {
  try {
    client.capture({
      distinctId: trialWillEndData.userId,
      event: 'subscriptionTrialWillEnd',
      properties: {
        subscriptionId: trialWillEndData.subscriptionId,
        customerId: trialWillEndData.customerId,
        trialEnd: trialWillEndData.trialEnd,
      },
      groups: trialWillEndData.companyId ? { company: trialWillEndData.companyId } : undefined,
    });
  } catch (error) {
    logError('error sending posthogUserSubscriptionTrialWillEnd event to posthog', error, 'subscriptionTrialWillEnd');
  }
};

export const posthogUserSubscriptionInvoiceUpcoming = async (invoiceUpcomingData) => {
  try {
    client.capture({
      distinctId: invoiceUpcomingData.userId,
      event: 'invoiceUpcoming',
      properties: {
        subscriptionId: invoiceUpcomingData.subscriptionId,
        customerId: invoiceUpcomingData.customerId,
        invoiceId: invoiceUpcomingData.invoiceId,
        amount: invoiceUpcomingData.amount,
        currency: invoiceUpcomingData.currency,
        nextPaymentAttempt: invoiceUpcomingData.nextPaymentAttempt,
        isTrial: invoiceUpcomingData.isTrial,
      },
      groups: invoiceUpcomingData.companyId ? { company: invoiceUpcomingData.companyId } : undefined,
    });
  } catch (error) {
    logError('error sending posthogUserSubscriptionInvoiceUpcoming event to posthog', error, 'invoiceUpcoming');
  }
};
