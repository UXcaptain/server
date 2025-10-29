import { SFNClient, StartExecutionCommand } from '@aws-sdk/client-sfn';

const sfnClient = new SFNClient({ region: process.env.AWS_REGION });

export const requestAnalysisTranscription = async (analysisEntryId, analysisId) => {
  const bucket = process.env.DEPLOY_ENVIRONMENT === 'latest' ? 'prod-analysis-entry-storage' : 'dev-analysis-entry-storage';

  const input = {
    transcriptionJobName: `analysisEntryTranscription-${analysisEntryId}`,
    mediaFileUri: `s3://${bucket}/analysis/${analysisId}/${analysisEntryId}/recording.mp4`,
    outputBucket: `${bucket}`,
    languageCode: 'es-ES',
    outputKey: `analysis/${analysisId}/${analysisEntryId}/transcription.json`,
  };

  const command = new StartExecutionCommand({
    stateMachineArn: process.env.AWS_TRANSCRIPTIONJOB_MACHINE_ARN,
    input: JSON.stringify(input),
    name: `analysisEntry-${analysisEntryId}-${Date.now()}`,
  });

  const response = await sfnClient.send(command);

  return response.executionArn;
};
