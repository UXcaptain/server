import { test, expect } from '@playwright/test';

import config from '../config/playwrightConfig.mjs';

test.use(config.use);

test('should return 422 if there are sanitizedErrors', async ({ request }) => {
  const erroredData = [
    {
      // analysisName: 'hello', //* Missing analysis name
      analysisUrl: 'https://dashboard.example.com',
      analysisTasks: [
        {
          taskType: 'Text',
          taskContent: 'this is the content',
        },
      ],
      maxNumberOfParticipants: 20,
    },
    {
      analysisName: 'hello',
      // analysisUrl: 'https://dashboard.example.com', //* Missing analysis URL
      analysisTasks: [
        {
          taskType: 'Text',
          taskContent: 'this is the content',
        },
      ],
      maxNumberOfParticipants: 20,
    },
    {
      analysisName: 'hello',
      analysisUrl: 'https://dashboard.example.com',
      // analysisTasks: [
      //   {
      //     taskType: 'Text',
      //     taskContent: 'this is the content',
      //   },
      // ], //* Missing analysis tasks
      maxNumberOfParticipants: 20,
    },
    {
      analysisName: 'hello',
      analysisUrl: 'https://dashboard.example.com',
      analysisTasks: [
        {
          taskType: 'Text',
          taskContent: 'this is the content',
        },
      ],
      // maxNumberOfParticipants: 20, //* Missing maxNumberOfParticipants
    },
  ];

  for (const data of erroredData) {
    const response = await request.post('/api/v1/analysis/create', {
      data,
    });

    expect(response.status()).toBe(422);
    expect(await response.json()).toHaveProperty('message');
  }
});
