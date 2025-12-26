import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const s3client = new S3Client({
  region: process.env.S3_REGION, // irrelevant since  miniIO doesnt takei into account
  endpoint: 'http://localhost:9000', // Container network endpoint
  forcePathStyle: true, // Required for MinIO path-style URLs
  credentials: {
    accessKeyId: process.env.MINIO_ROOT_USER,
    secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
  },
});

export const generateS3GetPresignedUrl = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: key,
  });

  const analysisEntryGetPresignedUrl = await getSignedUrl(s3client, command, { expiresIn: 60 * 60 });

  return analysisEntryGetPresignedUrl;
};

export const generateS3PutPresignedUrl = async (key) => {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    ContentType: 'video/mp4',
  });

  const analysisEntryPutPresignedUrl = await getSignedUrl(s3client, command, {
    expiresIn: 60 * 90, // 90 minute expiration
  });

  return analysisEntryPutPresignedUrl;
};

export const getS3Object = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: key,
  });

  const s3Object = await s3client.send(command);

  // Read the response body as a stream and convert to string so it is workable
  const responseBody = await s3Object.Body.transformToString();

  return responseBody;
};
