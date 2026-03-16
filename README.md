# UXcaptain Server

## Description

UXcaptain is a video-based user research platform for UX, marketing, and product teams. The platform enables:

- Remote video-based usability testing
- Automated transcription via Whisper ASR
- Subscription-based plan management
- Usage tracking with monthly limits and automatic reset
- Participant management and recruitment

## Features

- **Analytics**: PostHog for product analytics
- **User Authentication**: PassportJS with role-based access control
- **Database**: MongoDB with native driver
- **Payments**: Stripe integration for subscription management
- **Logging**: Pino.js + Telegram notifications
- **Plan Management**: Tiered subscription system (Free, Starter, Pro)
- **Usage Tracking**: Monthly limits per feature with automatic reset
- **Automatic Transcription**: Whisper ASR integration
- **Cron Jobs**: Usage reset, transcription processing, token cleanup, analysis entry cancellation

## Code stuff

- Testing: Playwright

## Technology Stack

### Backend
- **Node.js**: 24.x
- **Express.js**: 5.1.0
- **Passport.js**: 0.7.0
- **MongoDB**: 7.x (native driver)
- **TypeScript**: ^5.7.3 (ESM modules)

### Infrastructure
- **Docker**: Multi-container setup
- **Nginx**: 1.27.4-alpine (frontend)
- **MinIO**: S3-compatible storage
- **Whisper ASR**: onerahmet/openai-whisper-asr-webservice
- **Koyeb**: Deployment platform

## Deployment

### Docker

The web app is containerized and available on [Docker Hub](https://hub.docker.com/repository/docker/sergion14/uxcaptain/general)

### Local Development

Run the server using:

- `npm run start:local` - Starts Node.js server with `.env` file
- `npm run start:docker` - Runs Docker Compose with all services

Docker Compose auto-rebuilds on code changes for hot reloading.

**Note**: Frontend is not included in compose; run it from its own repository.

### CI/CD

Deployments are triggered by pushing to `next` or `latest` branches:

1. GitHub Actions builds Docker image
2. Uploads to Docker Hub
3. Updates secrets in [Koyeb](https://koyeb.com)
4. Deploys to Koyeb infrastructure

**Deployment URLs**:
- Latest: `server.latest.uxcaptain.com/api`
- Next: `server.next.uxcaptain.com/api`

### Environment Variables

Injected at runtime by Koyeb per-service. See `.env.example` for reference.

## Stripe Debugging

Start Stripe CLI listener: `npm run stripe:listen`

## API Documentation

Complete API documentation: `backend/swagger.yaml`

## AWS Permissions

Strict permissions managed via AWS IAM Console.

