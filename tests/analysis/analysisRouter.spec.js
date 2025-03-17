import { test, expect } from '@playwright/test';

import config from '../config/playwrightConfig.mjs';

test.use(config.use);

test('should return 200 and a message when the route in /analysis/ exists', async ({ request }) => {
  const response = await request.get('/api/v1/analysis/');

  expect(response.status()).toBe(200);
});

test('should return something when doing a POST request to /analysis/create WITHOUT req.body', async ({ request }) => {
  const response = await request.post('/api/v1/analysis/create');

  expect(response.status()).toBe(422);
  expect(await response.json()).toHaveProperty('message');
});

test('should return 404 and a message when the route in /analysis/ does not exist', async ({ request }) => {
  const response = await request.get('/api/v1/analysis/nonexistent');

  expect(response.status()).toBe(404);
});
