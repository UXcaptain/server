import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3client } from '../integrations/aws/s3.mjs';
import { getEntryDetailsById } from '../models/entryModel.mjs';

export const uploadAnalysisEntry = async () => {
  // TODO -- create this function

//  Recommended Workflow
// 	1.	User uploads video file directly from the browser extension to S3 using a pre-signed URL.
// 	2.	On successful upload, the extension sends a POST request to your backend with:
// 	•	S3 key/path of the uploaded file
// 	•	Relevant metadata (user, analysis, etc.)
};

export const getAnalysisEntryPresignedUrl = async (req, res) => {
  // TODO - add validation

  const userId = req.user.id; // Authenticated user from middleware
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      success: false,
      message: 'Analysis ID not provided',
    });
  }

  const analysisEntryDetails = await getEntryDetailsById(id);

  if (!analysisEntryDetails.url) {
    return res.status(404).json({
      success: false,
      message: 'Analysis does not have a video url',
    });
  }

  if (analysisEntryDetails.Analysis.owner_id !== userId) {
    return res.status(403).json({
      success: false,
      message: 'Access denied',
    });
  }

  return res.status(200).json({
    sucess: true,
    message: 'video entry retrieved successfully',
    entryUrl: 'exampleurl',
  });

  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: analysisEntryDetails.url,

  });

  const analysisEntryUrl = await getSignedUrl(s3client, command, { expiresIn: 3600 });
  res.status(200).json({
    success: true,
    analysisEntryUrl: analysisEntryUrl,
  });
};
