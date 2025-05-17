export const createAnalysisSchema = {
  name: {
    notEmpty: {
      errorMessage: 'Analysis name is required',
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
    notEmpty: true,
    trim: true,
    escape: true,
  },
};
