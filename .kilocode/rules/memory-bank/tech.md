# Technology Stack

*Comprehensive technology documentation for UXcaptain backend server*

## Core Technologies

### Runtime & Language
- **Node.js**: `24.x` - JavaScript runtime
- **TypeScript**: `^5.7.3` - Type safety (configured but primarily JS codebase with ESM modules)
- **Module System**: ES Modules (`"type": "module"` in package.json)

### Web Framework
- **Express.js**: `^5.1.0` - HTTP server framework
- **HTTP Server**: Node.js `createServer` - Low-level HTTP handling
  - Location: [`backend/server/app.js:17`](../../../backend/server/app.js:17)

## Database Layer

### ORM & Database
- **Prisma**: `^6.19.0` - Next-generation ORM
  - Client generation custom path: `backend/server/config/generated/prisma/client`
  - Schema location: [`backend/prisma/schema.prisma`](../../../backend/prisma/schema.prisma)
- **PostgreSQL**: `17.5` - Primary database
  - Docker image: `postgres:17.5`
  - Connection via environment variables: `PRISMA_POSTGRES_CONNECTION_STRING` & `PRISMA_POSTGRES_DIRECT_URL`

### Migrations
- **Prisma Migrate**: Version-controlled schema changes
- Migration history: [`backend/prisma/migrations/`](../../../backend/prisma/migrations/)
- Key migrations:
  - `20251006121021_first_setup` - Initial database setup
  - `20251116133627_add_transcription_json_to_analysis_entry` - Transcription support
  - `20251222131114_add_transcription_job_table` - Background job queue
  - `20260113234439_add_participant_profile_and_ratings` - Participant system

## Authentication & Authorization

### Passport.js Strategy
- **passport**: `^0.7.0` - Authentication middleware
- **passport-local**: `^1.0.0` - Username/password authentication
  - Implementation: [`backend/server/auth/strategies/passportLocalStrategy.js`](../../../backend/server/auth/strategies/passportLocalStrategy.js)
- **JWT Strategy (WIP)**: Commented out in [`passportJWTStrategy.js`](../../../backend/server/auth/strategies/passportJWTStrategy.js)

### Password Hashing
- **bcryptjs**: `^3.0.3` - Password hashing (10 rounds)
  - Used in: [`authController.js:233`](../../../backend/server/controllers/authController.js:233)

### Session Management
- **express-session**: `^1.18.2` - Session middleware
- **@quixo3/prisma-session-store**: `^3.1.13` - PostgreSQL session storage
  - Configuration: [`backend/server/middlewares/storeExpressSessions.js`](../../../backend/server/middlewares/storeExpressSessions.js)
- **cookie-parser**: `^1.4.7` - Cookie parsing middleware

## Security Middleware

### HTTP Security
- **helmet**: `^8.1.0` - Security headers
  - Configuration: [`backend/server/middlewares/helmet.js`](../../../backend/server/middlewares/helmet.js)
- **cors**: `^2.8.5` - Cross-origin resource sharing
  - Configuration: [`backend/server/middlewares/cors.js`](../../../backend/server/middlewares/cors.js)

### Rate Limiting & DDoS Protection
- **express-rate-limit**: `^8.2.1` - Request rate limiting
  - Configuration: [`backend/server/middlewares/express-rate-limiter.js`](../../../backend/server/middlewares/express-rate-limiter.js)
  - **Note**: Only enabled in production (`DEPLOY_ENVIRONMENT !== 'localhost'`)
- **express-slow-down**: `^3.0.1` - Progressive request delays
  - Configuration: [`backend/server/middlewares/express-slow-down.js`](../../../backend/server/middlewares/express-slow-down.js)
  - **Note**: Only enabled in production

## Validation

### Input Validation
- **express-validator**: `^7.3.1` - Request validation middleware
- **Validation Schemas**: Located in [`backend/server/utils/validators/`](../../../backend/server/utils/validators/)
  - `createAnalysisSchema.js` - Analysis creation validation
  - `createUserSchema.js` - User registration validation
  - `userLoginValidationSchema.js` - Login validation
  - `updatePasswordSchema.js` - Password update validation
  - `recoverPasswordSchema.js` - Password recovery validation
  - `waitlistValidationSchema.js` - Waitlist email validation

## External Service Integrations

### Payment Processing
- **stripe**: `^20.0.0` - Payment and subscription management
  - Client initialization: [`backend/server/config/stripe.js`](../../../backend/server/config/stripe.js)
  - Checkout flow: [`backend/server/integrations/stripe/checkoutSession.js`](../../../backend/server/integrations/stripe/checkoutSession.js)
  - Webhook handling: [`backend/server/webhooks/stripe/stripeEventHandler.js`](../../../backend/server/webhooks/stripe/stripeEventHandler.js)

### Object Storage (S3/MinIO)
- **@aws-sdk/client-s3**: `^3.936.0` - S3 operations
- **@aws-sdk/s3-request-presigner**: `^3.936.0` - Presigned URL generation
- **MinIO**: Self-hosted S3-compatible storage
  - Docker image: `minio/minio:latest`
  - Configuration: Dual client setup (external + internal)
  - Implementation: [`backend/server/integrations/s3-client/s3.js`](../../../backend/server/integrations/s3-client/s3.js)

### Email Service
- **@getbrevo/brevo**: `^3.0.1` - Transactional email API
  - Client config: [`backend/server/integrations/brevo/transactionalEmails/brevo.js`](../../../backend/server/integrations/brevo/transactionalEmails/brevo.js)
  - Use cases:
    - Password reset emails
    - Payment confirmation
    - Waitlist signup

### Transcription Service
- **Whisper ASR**: Speech-to-text transcription
  - Docker image: `onerahmet/openai-whisper-asr-webservice:latest`
  - Model: medium (~2-5GB)
  - Engine: faster_whisper with int8 quantization
  - Language: Spanish (es)
  - HTTP client: **axios**: `^1.13.2`
  - Implementation: [`backend/server/integrations/whisper-asr-webservice/transcribe.js`](../../../backend/server/integrations/whisper-asr-webservice/transcribe.js)
  - Form submission: **form-data**: `^4.0.5`

### Product Analytics
- **posthog-node**: `^5.13.2` - Product analytics events
  - Client config: [`backend/server/config/posthog-node.js`](../../../backend/server/config/posthog-node.js)
  - Events tracked:
    - User signup
    - User login
    - Analysis creation
    - Account deletion

### Real-Time Logging
- **Telegram Bot**: Error and info notifications
  - Configuration: [`backend/server/config/telegramBotConfig.js`](../../../backend/server/config/telegramBotConfig.js)
  - Implementation: [`backend/server/integrations/telegram/sendLogsToTelegram.js`](../../../backend/server/integrations/telegram/sendLogsToTelegram.js)
  - Separate chat IDs for latest/next environments

## Background Processing

### Cron Jobs
- **cron**: `^4.3.4` - Scheduled task execution
- **Job Orchestration**: [`backend/server/cron/jobsContainer.js`](../../../backend/server/cron/jobsContainer.js)
- **Active Jobs**:
  1. Transcription processor - Process PENDING transcription jobs
  2. Password token cleaner - Remove expired reset tokens
  3. Analysis entry cancellation - Mark incomplete entries as cancelled

## Logging

### Application Logging
- **pino**: `^10.1.0` - Fast JSON logger
- **pino-pretty**: `^13.1.2` - Human-readable log formatting (development)
- **Logger Configuration**: [`backend/server/config/logger.js`](../../../backend/server/config/logger.js)
- **Logger Functions**: [`backend/server/config/loggerFunctions.js`](../../../backend/server/config/loggerFunctions.js)
  - `logInfo(message, data)` - Info level logging
  - `logError(message, error)` - Error logging with Telegram integration

## Development Tools

### TypeScript Configuration
- **tsconfig.json**: TypeScript compiler options
  - Target: es2016
  - Module: commonjs (for type checking, but ESM at runtime)
  - Strict mode enabled
  - Location: [`backend/tsconfig.json`](../../../backend/tsconfig.json)

### Code Quality
- **ESLint**: `^8.57.1` - JavaScript linter
- **eslint-config-airbnb-base**: `^15.0.0` - Airbnb style guide
- **eslint-plugin-import**: `^2.31.0` - ES6 import/export linting
- **Configuration**: [`backend/.eslintrc.cjs`](../../../backend/.eslintrc.cjs)

### Testing (Framework Present)
- **jest**: `^30.2.0` - Testing framework
- **Test Directory**: [`backend/tests/`](../../../backend/tests/)
- **Note**: Test files minimal/WIP - testing infrastructure present but not extensively used

### Build Tools
- **tsx**: `^4.19.2` - TypeScript execution
- **npm**: `^11.6.3` - Package manager

## Containerization & Orchestration

### Docker
- **Production Dockerfile**: [`backend/Dockerfile`](../../../backend/Dockerfile)
  - Base image: node:24.11.1-alpine
  - Multi-stage build with cache mounts
  - Non-root user execution
  - Port: 3000
- **Development Dockerfile**: [`backend/Dockerfile.dev`](../../../backend/Dockerfile.dev)
  - Hot reload support
  - Development dependencies included

### Docker Compose
- **Compose File**: [`backend/compose.yaml`](../../../backend/compose.yaml)
- **Services**:
  1. `server` - Node.js application (commented out - runs locally in dev)
  2. `database` - PostgreSQL 17.5
  3. `minio` - S3-compatible storage
  4. `faster-whisper-transcribe` - Transcription service
- **Networks**: `uxcaptain-network` (bridge)
- **Volumes**:
  - `uxcaptain-database` - PostgreSQL data persistence
  - `whisper-transcription-models` - Whisper model cache (~2-5GB)
  - MinIO bind mount: `/Users/martaperezsanchez/repos/minio`

## Environment Configuration

### Environment Variables
- **File**: [`backend/.env.example`](../../../backend/.env.example)
- **Key Variables**:
  - `NODE_ENV` - Environment (development/production)
  - `DEPLOY_ENVIRONMENT` - Deployment context (latest/next/localhost)
  - `PORT` - Server port (default: 3000)
  - `SESSION_SECRET` - Express session secret
  - `PRISMA_POSTGRES_CONNECTION_STRING` - Database connection
  - `PRISMA_POSTGRES_DIRECT_URL` - Direct database connection
  - `STRIPE_API_KEY` - Stripe secret key
  - `STRIPE_WEBHOOK_SECRET` - Stripe webhook signature verification
  - `BREVO_API_KEY` - Email service API key
  - `POSTHOG_API_KEY` - Analytics API key
  - `TELEGRAM_BOT_API_KEY` - Telegram bot token
  - `FRONT_WEB_APP_ORIGIN_URL` - Frontend URL for CORS
  - `S3_BUCKET` - S3/MinIO bucket name
  - `S3_REGION` - S3 region (ignored by MinIO)
  - `S3_EXTERNAL_ENDPOINT` - Client-accessible S3 endpoint
  - `S3_INTERNAL_ENDPOINT` - Container-network S3 endpoint
  - `MINIO_ROOT_USER` - MinIO admin username
  - `MINIO_ROOT_PASSWORD` - MinIO admin password
  - `TRANSCRIPTION_ENDPOINT` - Whisper ASR service URL

## Project Scripts

### NPM Scripts ([`backend/package.json:14-19`](../../../backend/package.json))
- `npm start` - Production start (Node.js)
- `npm run start:local` - Development with hot reload (`--watch`) and env file
- `npm run start:docker` - Docker Compose with build and watch
- `npm run stripe:listen` - Stripe CLI webhook forwarding
- `npm test` - Run Jest tests

### Shell Scripts
- **Production Start**: [`backend/start.sh`](../../../backend/start.sh) - Runs migrations then starts server
- **Local Start**: [`backend/startLocal.sh`](../../../backend/startLocal.sh) - Development startup

## Key Dependencies Summary

### Production Dependencies
```json
{
  "@aws-sdk/client-s3": "^3.936.0",
  "@aws-sdk/s3-request-presigner": "^3.936.0",
  "@getbrevo/brevo": "^3.0.1",
  "@prisma/client": "^6.19.0",
  "@quixo3/prisma-session-store": "^3.1.13",
  "axios": "^1.13.2",
  "bcryptjs": "^3.0.3",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "cron": "^4.3.4",
  "express": "^5.1.0",
  "express-rate-limit": "^8.2.1",
  "express-session": "^1.18.2",
  "express-slow-down": "^3.0.1",
  "express-validator": "^7.3.1",
  "form-data": "^4.0.5",
  "helmet": "^8.1.0",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0",
  "pino": "^10.1.0",
  "pino-pretty": "^13.1.2",
  "posthog-node": "^5.13.2",
  "prisma": "^6.19.0",
  "stripe": "^20.0.0"
}
```

### Development Dependencies
```json
{
  "@types/node": "^24.0.11",
  "eslint": "^8.57.1",
  "eslint-config-airbnb-base": "^15.0.0",
  "eslint-plugin-import": "^2.31.0",
  "jest": "^30.2.0",
  "tsx": "^4.19.2",
  "typescript": "^5.7.3"
}
```

## Technical Constraints & Requirements

### System Requirements
- **Node.js**: 24.x (specified in package.json engines)
- **PostgreSQL**: 17.5+
- **Docker**: Required for development environment (database, MinIO, Whisper)
- **Memory**: Minimum 5GB for Whisper transcription service
- **CPU**: 4 cores recommended for transcription processing

### Network Architecture
- **Bridge Network**: All services on `uxcaptain-network`
- **Internal Service Communication**: Services communicate via container names
- **External Access**:
  - Server: `localhost:3000`
  - PostgreSQL: `localhost:5432`
  - MinIO API: `localhost:9000`
  - MinIO Console: `localhost:9001`
  - Whisper ASR: `localhost:9007`

### File Upload Constraints
- **Video Format**: MP4
- **Upload Method**: Presigned S3 URLs (90-minute expiration)
- **Download Method**: Presigned S3 URLs (60-minute expiration)
- **Storage Pattern**: `analysis/{analysisId}/{analysisEntryId}/recording.mp4`

## API Documentation

### OpenAPI Specification
- **File**: [`backend/swagger.yaml`](../../../backend/swagger.yaml) - 76,974 chars
- **Note**: Comprehensive API documentation present

## Performance Optimizations

### Database
- Prisma query optimization via generated client
- Connection pooling via Prisma
- Environment-specific connection strings (direct vs. pooled)

### Session Management
- Database-backed sessions (scalable across multiple server instances)
- Session pruning via automatic cleanup

### Rate Limiting
- Environment-aware (disabled in development)
- Progressive delays via slow-down middleware
- Hard limits via rate-limit middleware

### File Upload/Download
- Direct client-to-S3 communication (no server proxying)
- Presigned URLs for secure, scalable access

## Testing Strategy

### Current State
- Jest testing framework configured
- Test directory structure present: [`backend/tests/`](../../../backend/tests/)
- Minimal test coverage (one spec file: [`analysisModel.spec.js`](../../../backend/models/analysisModel.spec.js))

### Testing Tools Available
- **jest**: Unit and integration testing
- **@types/node**: TypeScript type definitions for Node.js

## Development Workflow

### Local Development Setup
1. Install dependencies: `npm ci`
2. Generate Prisma client: `npx prisma generate`
3. Start Docker services: `npm run start:docker` or `docker compose up`
4. Run migrations: `npx prisma migrate dev`
5. Start server: `npm run start:local`

### Production Deployment
1. Build Docker image: `docker build -f Dockerfile .`
2. Run migrations via startup script: `./start.sh`
3. Server starts on port 3000 as non-root user

## Key Technical Decisions Rationale

1. **ESM over CommonJS**: Modern JavaScript module system
2. **Prisma over raw SQL**: Type safety, migrations, better DX
3. **Session-based auth over JWT**: More secure for web apps, easier revocation
4. **PostgreSQL over NoSQL**: Relational data model fits domain well
5. **MinIO for dev over AWS S3**: Cost-effective, privacy-friendly local development
6. **Docker Compose over Kubernetes**: Simpler local development, appropriate for scale
7. **Pino over Winston**: Performance-focused logging
8. **Express 5.x**: Latest stable with middleware improvements
9. **Bcrypt over Argon2**: Industry standard, wide support
10. **Presigned URLs over proxying**: Reduces server load, improves scalability
