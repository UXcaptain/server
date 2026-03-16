export const createAnalysisSchema = {
  name: {
    notEmpty: {
      errorMessage: 'Analysis name is required',
    },
    isString: true,
    trim: true,
    escape: true,
  },
  'generalDetails.device': {
    notEmpty: {
      errorMessage: 'Device information is required',
    },
    isString: true,
    trim: true,
    escape: true,
  },
  'generalDetails.url': {
    notEmpty: {
      errorMessage: 'Analysis URL is required',
    },
    isURL: {
      errorMessage: 'Please enter a valid URL',
    },
    trim: true,
  },
  tasks: {
    notEmpty: {
      errorMessage: 'Analysis tasks are required',
    },
    isArray: {
      errorMessage: 'Analysis tasks must be an array',
    },
    custom: {
      options: (value) => {
        if (value.length < 1) {
          throw new Error('Analysis tasks must have at least one task');
        }
        return true;
      },
    },
  },
  'generalDetails.maxNumberOfParticipants': {
    notEmpty: {
      errorMessage: 'Max number of participants is required',
    },
    isInt: {
      errorMessage: 'Max number of participants must be an integer',
    },
    custom: {
      options: (value) => {
        if (value < 1) {
          throw new Error('Max number of participants must be greater than 0');
        }
        return true;
      },
    },
  },
  'generalDetails.scenario': {
    trim: true,
    escape: true,
  },
  'generalDetails.recruitmentType': {
    isIn: {
      options: [['userProvided', 'panelProvided']],
      errorMessage: 'Recruitment type must be userProvided or panelProvided',
    },
  },
  'demographicFilters.minAge': {
    optional: true,
    isInt: {
      errorMessage: 'Min age must be an integer',
    },
    custom: {
      options: (value) => {
        if (value < 18) {
          throw new Error('Min age must be greater than or equal to 18');
        }
        return true;
      },
    },
  },
  'demographicFilters.maxAge': {
    optional: true,
    isInt: {
      errorMessage: 'Max age must be an integer',
    },
    custom: {
      options: (value, { req }) => {
        if (value > 100) {
          throw new Error('Max age must be less than or equal to 100');
        }
        if (req.body.demographicFilters?.minAge && value < req.body.demographicFilters.minAge) {
          throw new Error('Max age must be greater than or equal to min age');
        }
        return true;
      },
    },
  },
  'demographicFilters.gender': {
    optional: true,
    isIn: {
      options: [['male', 'female', 'any']],
      errorMessage: 'Gender must be male, female, or any',
    },
  },
  'demographicFilters.country': {
    optional: true,
    isIn: {
      options: [['any', 'es']],
      errorMessage: 'Country must be any or es',
    },
  },
  'demographicFilters.educationLevel': {
    optional: true,
    isIn: {
      options: [['noEducation', 'primaryEducation', 'secondaryEducation', 'universityDegree', 'mastersThesis', 'any']],
      errorMessage: 'Education level must be noEducation, primaryEducation, secondaryEducation, universityDegree, mastersThesis or any',
    },
  },
  'demographicFilters.minYearlyIncome': {
    optional: true,
    isInt: {
      errorMessage: 'Min yearly income must be an integer',
    },
    custom: {
      options: (value) => {
        if (value < 0) {
          throw new Error('Min yearly income must be greater than or equal to 0');
        }
        return true;
      },
    },
  },
  'demographicFilters.maxYearlyIncome': {
    optional: true,
    isInt: {
      errorMessage: 'Max yearly income must be an integer',
    },
    custom: {
      options: (value, { req }) => {
        if (value < 0) {
          throw new Error('Max yearly income must be greater than or equal to 0');
        }
        if (req.body.demographicFilters?.minYearlyIncome && value < req.body.demographicFilters.minYearlyIncome) {
          throw new Error('Max yearly income must be greater than or equal to min yearly income');
        }
        return true;
      },
    },
  },
  'demographicFilters.technicalProficiency': {
    optional: true,
    isIn: {
      options: [['basic', 'intermediate', 'expert', 'any']],
      errorMessage: 'Technical proficiency must be basic, intermediate, expert or any',
    },
  },
  'demographicFilters.parentalStatus': {
    optional: true,
    isIn: {
      options: [['yesChildren', 'noChildren', 'any']],
      errorMessage: 'Parental status must be yesChildren, noChildren or any',
    },
  },
};

