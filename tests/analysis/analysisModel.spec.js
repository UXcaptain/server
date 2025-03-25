import { test, expect } from '@playwright/test';

import config from '../config/playwrightConfig.mjs';

test.use(config.use);

test('should return 404 and a message when the route in /user/  does not exist', async ({ request }) => {
  const response = await request.get('/api/v1/user/nonexistent');

  expect(response.status()).toBe(404);
});
