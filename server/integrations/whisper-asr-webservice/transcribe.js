import axios from 'axios';
import fs from 'node:fs';
import path from 'node:path';
import FormData from 'form-data';
import { getS3Object } from '../s3-client/s3';


const MINIO_VOLUME_PATH = '/Users/martaperezsanchez/repos/minio'; // Shared bind mount
const bucket = process.env.S3_BUCKET;

export const transcribeRecording = async (objectName) => {
  
  // need to use S3 because S3 client (minIO) stores data in a compressed format and cant be accesed via bind mount 

  // const fileBuffer = await getS3Object();
  const testFile = '../../../recording3.mp4'
  console.log(testFile); // TODO - test this generates a decent transcription before moving on
  /* full file path is:
  1- docker service address
  2- bucket -- dev-analysis-entry-storage
  3- analysis -- /analysis
  4- analysis ID - /5a39b038-1c45-4937-9a62-0bede82b69df
  5- analysis entry id -- /52b947ad-456d-4ccf-9bfc-c435ef4c1c6d
  6. file name -- recording.mp4

  eg: dev-analysis-entry-storage/analysis/5a39b038-1c45-4937-9a62-0bede82b69df/52b947ad-456d-4ccf-9bfc-c435ef4c1c6d
  */

  // Create query parameters
  const params = new URLSearchParams({
    task: 'transcribe',
    output: 'json',
    word_timestamps: 'false', // Works with video audio
  });

  // Create form data with only the audio file
  const form = new FormData();
  form.append('audio_file', fs.createReadStream(fileBuffer), objectName);

  // Make request with query parameters
  const response = await axios.post(`http://localhost:9006/asr?${params.toString()}`, form, {
    headers: { ...form.getHeaders() },
    timeout: 1200000, // 20min
  });

  return response.data;
};
