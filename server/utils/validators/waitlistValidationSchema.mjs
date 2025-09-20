export const waitlistValidationSchema = {
  email: {
    isEmail: {
      errorMessage: 'Invalid email or password',
    },
    normalizeEmail: {
      options: {
        gmail_remove_dots: true,
        gmail_remove_subaddress: true,
        gmail_convert_googlemaildotcom: true,
        outlookdotcom_remove_subaddress: true,
        yahoo_remove_subaddress: true,
        icloud_remove_subaddress: true,
      },
    },
    escape: true,
  },
  consent: {
    notEmpty: {
      errorMessage: 'Terms and conditions must be accepted',
    },
  },
};
