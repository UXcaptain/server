import axios from 'axios';
import FormData from 'form-data';
import { getInternalS3Object } from '../s3-client/s3.js';

export const transcribeRecording = async (transcriptionJob) => {
  // need to use S3 because S3 client (minIO) stores data in a compressed format and cant be accesed directly via bind mount

  const key = `analysis/${transcriptionJob.AnalysisEntry.analysis_id}/${transcriptionJob.analysis_entry_id}/recording.mp4`;

  const fileBuffer = await getInternalS3Object(key);

  // Create query parameters
  const params = new URLSearchParams({
    task: 'transcribe',
    output: 'json',
    word_timestamps: 'false', // Works with video audio
    language: 'es',
    vad_filter: 'true',
  }); // Only showing Available params for faster-whisper engine we are using

  // Create form data with the buffer directly
  const form = new FormData();
  form.append('audio_file', fileBuffer, {
    filename: 'recording.mp4',
    contentType: 'video/mp4',
  });

  // Make request with query parameters
  const response = await axios.post(`${process.env.TRANSCRIPTION_ENDPOINT}/asr?${params.toString()}`, form, {
    headers: { ...form.getHeaders() },
    timeout: 1200000, // 20min
  });

  return response.data;
};
