export const createAnalysisSchema = {
  name: {
    notEmpty: {
      errorMessage: 'Analysis name is required',
    },
    isString: true,
    trim: true,
    escape: true,
  },
  device: {
    notEmpty: {
      errorMessage: 'Device information is required',
    },
    isString: true,
    trim: true,
    escape: true,
  },
  url: {
    notEmpty: {
      errorMessage: 'Analysis URL is required',
    },
    isURL: {
      errorMessage: 'Please enter a valid URL',
    },
    trim: true,
    // escape: true,
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
  maxNumberOfParticipants: {
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
  scenario: {
    trim: true,
    escape: true,
  },
  recruitmentType: {
    isIn: {
      options: [['USER_PROVIDED', 'PANEL_PROVIDED']],
      errorMessage: 'Recruitment type must be USER_PROVIDED or PANEL_PROVIDED',
    },
  },
  minAge: {
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
  maxAge: {
    isInt: {
      errorMessage: 'Max age must be an integer',
    },
    custom: {
      options: (value, { req }) => {
        if (value > 100) {
          throw new Error('Max age must be less than or equal to 100');
        }
        if (req.body.minAge && value < req.body.minAge) {
          throw new Error('Max age must be greater than or equal to min age');
        }
        return true;
      },
    },
  },
  gender: {
    isIn: {
      options: [['MALE', 'FEMALE', 'OTHER']],
      errorMessage: 'Gender must be MALE, FEMALE, or OTHER',
    },
  },
  country: {
    isIn: {
      options: [['ES']],
      errorMessage: 'Country must be ES',
    },
  },
  educationLevel: {
    isIn: {
      options: [['NO_EDUCATION', 'PRIMARY_EDUCATION', 'SECONDARY_EDUCATION', 'UNIVERSITY_DEGREE', 'MASTERS_THESIS']],
      errorMessage: 'Education level must be NO_EDUCATION, PRIMARY_EDUCATION, SECONDARY_EDUCATION, UNIVERSITY_DEGREE, or MASTERS_THESIS',
    },
  },
  minYearlyIncome: {
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
  maxYearlyIncome: {
    isInt: {
      errorMessage: 'Max yearly income must be an integer',
    },
    custom: {
      options: (value, { req }) => {
        if (value < 0) {
          throw new Error('Max yearly income must be greater than or equal to 0');
        }
        if (req.body.minYearlyIncome && value < req.body.minYearlyIncome) {
          throw new Error('Max yearly income must be greater than or equal to min yearly income');
        }
        return true;
      },
    },
  },
  technicalProficiency: {
    isIn: {
      options: [['BASIC', 'INTERMEDIATE', 'EXPERT']],
      errorMessage: 'Technical proficiency must be BASIC, INTERMEDIATE, or EXPERT',
    },
  },
  parentalStatus: {
    isIn: {
      options: [['YES_CHILDREN', 'NO_CHILDREN']],
      errorMessage: 'Parental status must be YES_CHILDREN or NO_CHILDREN',
    },
  },

};
