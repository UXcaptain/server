import { CreateContact, ContactsApi } from '@getbrevo/brevo';
import { logError } from '../../../config/loggerFunctions.js';
import { sendInfoLogsToTelegram } from '../../telegram/sendLogsToTelegram.js';

export const createContactInBrevo = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      success: false,
      message: 'User could not be created due to validation errors',
      errors: req.sanitizedErrors,
    });
  }

  const { email } = req.body;

  // Instantiate the Contacts API and set your API key
  const contactAPI = new ContactsApi();
  contactAPI.authentications.apiKey.apiKey = process.env.BREVO_API_KEY; // Replace with your real API key

  // Build your contact object
  const contact = new CreateContact();
  contact.updateEnabled = true;
  contact.email = email;
  contact.listIds = [5]; // Launch waitlist list

  await contactAPI.createContact(contact);

  try {
    sendInfoLogsToTelegram(`user signed up to waitlist, ${email}`);
  } catch (error) {
    logError('error sending waitlist contact to telegram', error);
  }

  return res.status(200).json({
    sucess: true,
    message: 'User was sucessfully added to launch waitlist',
  });
};
