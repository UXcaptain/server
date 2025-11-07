export const handleTranscriptionCompletedQueue = async (msg) => {
  const contentStr = msg.bodyToString();
  const content = JSON.parse(contentStr);

  // TODO - store the completed JSON that will be provided by the transcription microservice and return it to the front end it available -- Need to update DB schema to include the field
};
