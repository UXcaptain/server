import { createAnalysisInDb } from '../models/analysisModel.mjs';
import { logError } from '../config/loggerFunctions.mjs';
import { Analysis } from '../utils/classes/Analysis.mjs';

export const createAnalysis = async (req, res) => {
  if (req.sanitizedErrors) {
    return res.status(422).json({
      success: false,
      message: 'Validation error on createAnalysis',
      errors: req.sanitizedErrors,
    });
  }

  try {
    const analysisOwner = 'e505360a-7c30-4f7a-b858-8057e9ce49bc';

    const analysis = new Analysis(req.body, analysisOwner);

    const analysisCreationResponse = await createAnalysisInDb(analysis);

    return res.status(201).send({
      success: true,
      message: 'analysis created successfully',
      createdAnalysis: analysisCreationResponse.response,
    });
  } catch (error) {
    logError('error creating a new analysis', error);

    return res.status(500).send({
      success: false,
      message: 'analysis could not be created',
    });
  }
};
