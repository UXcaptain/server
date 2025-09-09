import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/modules/credentials.html
export const s3client = new S3Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const generateGetAnalysisEntryPresignedUrl = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.NODE_ENV === 'production' ? 'prod-analysis-entry-storage' : 'dev-analysis-entry-storage',
    Key: key,
  });

  const analysisEntryGetPresignedUrl = await getSignedUrl(s3client, command, { expiresIn: 60 * 60 });

  return analysisEntryGetPresignedUrl;
};

export const generatePutAnalysisEntryPresignedUrl = async (key, metadata) => { // eslint-disable-line no-unused-vars
  const command = new PutObjectCommand({
    Bucket: process.env.NODE_ENV === 'production' ? 'prod-analysis-entry-storage' : 'dev-analysis-entry-storage',
    Key: key,
    ContentType: 'video/webm',
  });

  const analysisEntryPutPresignedUrl = await getSignedUrl(s3client, command, {
    expiresIn: 60 * 15, // 15 minute expiration
  });

  return analysisEntryPutPresignedUrl;
};
