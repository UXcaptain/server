export const updateParticipantProfileValidationSchema = {
  name: {
    optional: true,
    isString: {
      errorMessage: 'Name must be a string',
    },
    trim: true,
    escape: true,
  },
  lastName: {
    optional: true,
    isString: {
      errorMessage: 'Last name must be a string',
    },
    trim: true,
    escape: true,
  },
  age: {
    optional: true,
    isInt: {
      options: {
        min: 13,
        max: 120,
      },
      errorMessage: 'Age must be an integer between 13 and 120',
    },
    toInt: true,
  },
  gender: {
    optional: true,
    isIn: {
      options: [['male', 'female', 'prefer_not_to_say']],
      errorMessage: 'Gender must be male, female, or prefer_not_to_say',
    },
  },
  country: {
    optional: true,
    isString: {
      errorMessage: 'Country must be a string',
    },
    isLength: {
      options: {
        min: 2,
        max: 2,
      },
      errorMessage: 'Country must be a 2-letter ISO code',
    },
    trim: true,
    toUpperCase: true,
  },
  educationLevel: {
    optional: true,
    isIn: {
      options: [['no_education', 'primary_education', 'secondary_education', 'university_degree', 'masters_thesis']],
      errorMessage: 'Education level must be one of: no_education, primary_education, secondary_education, university_degree, masters_thesis',
    },
  },
  yearlyIncome: {
    optional: true,
    isInt: {
      options: {
        min: 0,
      },
      errorMessage: 'Yearly income must be a non-negative integer',
    },
    toInt: true,
  },
  parentalStatus: {
    optional: true,
    isIn: {
      options: [['kids', 'no_kids']],
      errorMessage: 'Parental status must be kids or no_kids',
    },
  },
  technicalProficiency: {
    optional: true,
    isIn: {
      options: [['low', 'medium', 'high']],
      errorMessage: 'Technical proficiency must be low, medium, or high',
    },
  },
};
