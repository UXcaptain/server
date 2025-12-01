import pino from 'pino';

const redactOptions = {
  paths: ['context.userData.email', 'context.userData.password'],
  censor: '[REDACTED]',
};

const transport = pino.transport({
  redact: redactOptions,
  targets: [
    {
      target: 'pino-pretty',
      options: {
        destination: 1,
        colorize: true,
      },
    },
  ],
});

export const logger = pino(transport);
