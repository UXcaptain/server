import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const externalS3Client = new S3Client({
  region: process.env.S3_REGION, // irrelevant since  miniIO doesnt takei into account
  endpoint: process.env.S3_EXTERNAL_ENDPOINT, // Container network endpoint
  forcePathStyle: true, // Required for MinIO path-style URLs
  credentials: {
    accessKeyId: process.env.MINIO_ROOT_USER,
    secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
  },
});

export const internalS3Client = new S3Client({
  region: process.env.S3_REGION, // irrelevant since  miniIO doesnt takei into account
  endpoint: process.env.S3_INTERNAL_ENDPOINT, // Container network endpoint
  forcePathStyle: true, // Required for MinIO path-style URLs
  credentials: {
    accessKeyId: process.env.MINIO_ROOT_USER,
    secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
  },
});

export const generateS3GetPresignedUrl = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
  });

  const analysisEntryGetPresignedUrl = await getSignedUrl(externalS3Client, command, { expiresIn: 60 * 60 });

  return analysisEntryGetPresignedUrl;
};

export const generateS3PutPresignedUrl = async (key) => {
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    ContentType: 'video/mp4',
  });

  const analysisEntryPutPresignedUrl = await getSignedUrl(externalS3Client, command, {
    expiresIn: 60 * 90, // 90 minute expiration
  });

  return analysisEntryPutPresignedUrl;
};

export const getInternalS3Object = async (key) => {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
  });

  const s3Object = await internalS3Client.send(command);

  // Read the response body as a buffer for binary file handling
  const responseBody = await s3Object.Body.transformToByteArray();

  return Buffer.from(responseBody);
};
