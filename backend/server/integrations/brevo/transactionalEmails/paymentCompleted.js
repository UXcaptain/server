import { apiInstance, companyEmails, emailInstance } from './brevo.js';
import { logError } from '../../../config/loggerFunctions.js';

export const sendPaymentCompletedTransactionalEmail = async (email, param) => {
  try {
    emailInstance.sender = {
      // name: "XXX", //* Managed in the template
      email: companyEmails.billing,
    };

    emailInstance.to = [{
      email: email,
    }];

    emailInstance.templateId = 2; //* Direct link to the template --> https://my.brevo.com/camp/template/2/setup

    emailInstance.params = {
      param: param,
    };

    await apiInstance.sendTransacEmail(emailInstance);
  } catch (error) {
    logError('error sending sendPaymentCompletedTransactionalEmail', error);
  }
};
