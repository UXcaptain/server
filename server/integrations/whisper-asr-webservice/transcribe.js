import axios from 'axios';
import FormData from 'form-data';
import { getS3Object } from '../s3-client/s3.js';
import { logError, logInfo } from '../../config/loggerFunctions.js';
import { markInProgressSingleTranscriptionJobInDb } from '../../models/transcriptionModel.js';

export const transcribeRecording = async (transcriptionJob) => {
  // need to use S3 because S3 client (minIO) stores data in a compressed format and cant be accesed via bind mount

  const key = `analysis/${transcriptionJob.AnalysisEntry.analysis_id}/${transcriptionJob.analysis_entry_id}/recording.mp4`;

  console.log('key', key);

  const fileBuffer = await getS3Object(key);

  // Create query parameters
  const params = new URLSearchParams({
    task: 'transcribe',
    output: 'json',
    word_timestamps: 'false', // Works with video audio
    language: 'es',
    vad_filter: 'true',
  });

  // Create form data with the buffer directly
  const form = new FormData();
  form.append('audio_file', fileBuffer, {
    filename: 'recording.mp4',
    contentType: 'video/mp4',
  });

  // Make request with query parameters
  const response = await axios.post(`http://localhost:9007/asr?${params.toString()}`, form, {
    headers: { ...form.getHeaders() },
    timeout: 1200000, // 20min
  });

  await markInProgressSingleTranscriptionJobInDb(transcriptionJob.analysis_entry_id); // ! unsure how to set this, because if i trigger the transcription, the function will not advance to in progress - maybe handle in progress in transcribe.js?
  logInfo('Transcription Job updated in DB', transcriptionJob);

  return response.data;
};
