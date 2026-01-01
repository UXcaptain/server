import axios from 'axios';
import fs from 'node:fs';
import FormData from 'form-data';
import { getS3Object } from '../s3-client/s3.js';

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

  // Create form data with only the audio file
  const form = new FormData();
  form.append('audio_file', fs.createReadStream(fileBuffer));

  // Make request with query parameters
  const response = await axios.post(`http://localhost:9007/asr?${params.toString()}`, form, {
    headers: { ...form.getHeaders() },
    timeout: 1200000, // 20min
  });

  return response.data;
};
