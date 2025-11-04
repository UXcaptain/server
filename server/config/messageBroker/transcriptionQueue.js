export const handleTranscriptionCompletedQueue = async (msg) => {
  const contentStr = msg.bodyToString();
  const content = JSON.parse(contentStr);

  // TODO - process handleTranscriptionCompleted(content);

  return;
};
