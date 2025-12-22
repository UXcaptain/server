import {
  TranscribeClient,
  StartTranscriptionJobCommand,
  ListTranscriptionJobsCommand,
  DeleteTranscriptionJobCommand,
} from '@aws-sdk/client-transcribe';
import { getS3Object } from './s3.js';

const transcribeClient = new TranscribeClient({ region: process.env.AWS_REGION });

export const requestAnalysisEntryTranscriptionToAWSTranscribe = async (transcriptionRequest) => {
  const command = new StartTranscriptionJobCommand({
    TranscriptionJobName: transcriptionRequest.analysisEntryId,
    LanguageCode: transcriptionRequest.languageCode,
    Media: {
      MediaFileUri: `s3://${process.env.AWS_BUCKET}/analysis/${transcriptionRequest.analysisId}/${transcriptionRequest.analysisEntryId}/recording.mp4`,
    },
    OutputBucketName: process.env.AWS_BUCKET,
    OutputKey: `analysis/${transcriptionRequest.analysisId}/${transcriptionRequest.analysisEntryId}/transcription.json`,
  });

  await transcribeClient.send(command);
};

export const listCompletedTranscriptionJobsFromAWS = async () => {
  const command = new ListTranscriptionJobsCommand({
    Status: 'COMPLETED',
    MaxResults: 100,

  });

  const completedTranscriptionJobs = await transcribeClient.send(command);
  const completedTranscriptionJobsSummary = completedTranscriptionJobs.TranscriptionJobSummaries; // returns an array

  return completedTranscriptionJobsSummary;
};

export const fetchSingleTranscriptionJob = async (analysisId, analysisEntryId) => {
  const key = `analysis/${analysisId}/${analysisEntryId}/transcription.json`;

  const transcriptionJobResult = await getS3Object(key);

  return transcriptionJobResult;
};

export const deleteCompletedTranscriptionJobFromAWS = async (transcriptionJobName) => {
  const command = new DeleteTranscriptionJobCommand({
    TranscriptionJobName: transcriptionJobName,
  });

  const deletedTranscriptionJobs = await transcribeClient.send(command);
  // returns an array

  return deletedTranscriptionJobs;
};
