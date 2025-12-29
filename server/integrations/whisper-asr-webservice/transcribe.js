// Inside your Node.js monolith container

import axios from 'axios';

import fs from 'node:fs';

import path from 'node:path';

const FormData = require('form-data');

const MINIO_VOLUME_PATH = '/Users/martaperezsanchez/repos/minio'; // Shared bind mount
const bucket = process.env.S3_BUCKET

export const transcribeRecording = async (objectName) => {
  const filePath = path.join(MINIO_VOLUME_PATH, bucket, objectName);

  const form = new FormData();
  form.append('audio_file', fs.createReadStream(filePath), 'recording.mp4');
  form.append('task', 'transcribe');
  form.append('output', 'json');
  form.append('word_timestamps', 'true'); // Works with video audio

  const response = await axios.post('http://whisper-asr:9000/asr', form, {
    headers: { ...form.getHeaders() },
    timeout: 1200000, // 20min
  });

  return response.data;
};
