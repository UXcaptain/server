# Architecture

*Backend architecture for UXcaptain video-based user research platform*

## System Overview

UXcaptain backend is a RESTful API server built with Node.js/Express following an MVC-inspired architecture pattern. The system handles user research video sessions, automated transcription, subscription management, and participant coordination.

**Core Architecture Pattern**: HTTP Request → Router → Middleware Chain → Controller → Model → Database/External Services

## High-Level Architecture

```
┌─────────────┐
│   Client    │
│ (Frontend)  │
└──────┬──────┘
       │ HTTP/HTTPS
       ↓
┌──────────────────────────────────────────┐
│         Express Application              │
│  ┌────────────────────────────────────┐  │
│  │   Security & Rate Limiting         │  │
│  │   (Helmet, CORS, Rate Limiter)     │  │
│  └────────────┬───────────────────────┘  │
│               ↓                          │
│  ┌────────────────────────────────────┐  │
│  │      API Router (Versioned)        │  │
│  │         /api/v1/*                  │  │
│  └────────────┬───────────────────────┘  │
│               ↓                          │
│  ┌────────────────────────────────────┐  │
│  │   Authentication Middleware        │  │
│  │   (Passport.js + Sessions)         │  │
│  └────────────┬───────────────────────┘  │
│               ↓                          │
│  ┌────────────────────────────────────┐  │
│  │      Controllers Layer             │  │
│  │  (Business Logic & Validation)     │  │
│  └────────────┬───────────────────────┘  │
│               ↓                          │
│  ┌────────────────────────────────────┐  │
│  │         Models Layer               │  │
│  │    (Database Operations)           │  │
│  └────────────┬───────────────────────┘  │
└───────────────┼──────────────────────────┘
                │
        ┌───────┴───────┐
        │               │
        ↓               ↓
┌───────────────┐  ┌──────────────────┐
│   PostgreSQL  │  │ External Services│
│   (Prisma)    │  │ (S3, Stripe, etc)│
└───────────────┘  └──────────────────┘
```

## Directory Structure

```
backend/
├── server/
│   ├── app.js                          # Express application entry point
│   ├── API/
│   │   ├── apiRouter.js                # Main API router aggregator
│   │   └── v1/routes/                  # Version 1 API routes
│   │       ├── authRouter.js           # Authentication endpoints
│   │       ├── analysisRouter.js       # Analysis CRUD operations
│   │       ├── analysisEntryRouter.js  # Analysis entry management
│   │       ├── billingRouter.js        # Stripe billing integration
│   │       ├── userRouter.js           # User profile management
│   │       ├── adminRouter.js          # Admin-only operations
│   │       └── participantRouter.js    # Participant operations
│   ├── auth/
│   │   ├── passportjs.js               # Passport configuration
│   │   └── strategies/
│   │       ├── passportLocalStrategy.js # Email/password authentication
│   │       └── passportJWTStrategy.js   # JWT strategy (WIP)
│   ├── controllers/
│   │   ├── authController.js           # User auth, login, registration
│   │   ├── analysisController.js       # Analysis management
│   │   ├── analysisEntryController.js  # Video submission handling
│   │   ├── transcriptionController.js  # Transcription job processing
│   │   ├── billingController.js        # Stripe subscription management
│   │   ├── userController.js           # User profile operations
│   │   ├── participantController.js    # Participant profile operations
│   │   └── adminController.js          # Admin operations
│   ├── models/
│   │   ├── userModel.js                # User CRUD operations
│   │   ├── analysisModel.js            # Analysis CRUD operations
│   │   ├── analysisEntryModel.js       # Analysis entry CRUD operations
│   │   ├── transcriptionModel.js       # Transcription job operations
│   │   ├── subscriptionModel.js        # Subscription management
│   │   ├── participantModel.js         # Participant profile operations
│   │   ├── posthogModel.js             # Product analytics events
│   │   └── passwordResetTokensModel.js # Password reset token management
│   ├── middlewares/
│   │   ├── authenticationChecker.js    # Verify user authentication
│   │   ├── permissionByRoleChecker.js  # Role-based access control
│   │   ├── subscriptionChecker.js      # Verify subscription status
│   │   ├── cors.js                     # CORS configuration
│   │   ├── helmet.js                   # Security headers
│   │   ├── express-rate-limiter.js     # Rate limiting
│   │   ├── express-slow-down.js        # Request throttling
│   │   ├── cookieParser.js             # Cookie parsing
│   │   ├── storeExpressSessions.js     # Session persistence
│   │   ├── sanitizerResult.js          # Validation error formatting
│   │   └── globalErrorHandler.js       # Centralized error handling
│   ├── integrations/
│   │   ├── s3-client/
│   │   │   └── s3.js                   # MinIO/S3 presigned URL generation
│   │   ├── stripe/
│   │   │   ├── checkoutSession.js      # Stripe checkout creation
│   │   │   ├── customerPortalSession.js # Customer portal access
│   │   │   └── customerId.js           # Stripe customer management
│   │   ├── brevo/
│   │   │   ├── functions/
│   │   │   │   └── createContact.js    # Brevo contact creation
│   │   │   └── transactionalEmails/
│   │   │       ├── brevo.js            # Email client configuration
│   │   │       ├── sendResetPasswordTokenToUser.js
│   │   │       └── paymentCompleted.js
│   │   ├── whisper-asr-webservice/
│   │   │   └── transcribe.js           # Whisper transcription integration
│   │   ├── telegram/
│   │   │   └── sendLogsToTelegram.js   # Error/info logging to Telegram
│   │   └── posthog/
│   │       └── posthog-node.js         # Product analytics client
│   ├── webhooks/
│   │   ├── webhooksRouter.js           # Webhook routing
│   │   └── stripe/
│   │       └── stripeEventHandler.js   # Stripe event processing
│   ├── cron/
│   │   ├── jobsContainer.js            # Cron job orchestration
│   │   ├── getPendingTranscriptionJobScheduler.js
│   │   ├── deletePasswordResetTokensScheduler.js
│   │   └── markAsCancelledAnalysisEntriesScheduler.js
│   ├── utils/
│   │   ├── validators/                 # Express-validator schemas
│   │   └── transcription/
│   │       └── transcriptionNormalizer.js # Transcript segment cleanup
│   ├── config/
│   │   ├── logger.js                   # Pino logger configuration
│   │   ├── loggerFunctions.js          # Logging utilities
│   │   ├── stripe.js                   # Stripe client initialization
│   │   ├── posthog-node.js             # PostHog client configuration
│   │   ├── telegramBotConfig.js        # Telegram bot configuration
│   │   └── generated/prisma/client/    # Prisma generated client
│   └── routers/
│       └── indexRouter.js              # Root path handler
├── prisma/
│   ├── schema.prisma                   # Database schema definition
│   └── migrations/                     # Database migration history
├── package.json
├── tsconfig.json
├── Dockerfile                          # Production Docker image
├── Dockerfile.dev                      # Development Docker image
└── compose.yaml                        # Docker Compose configuration
```

## Request Flow

### 1. HTTP Request Entry (`backend/server/app.js:1`)

```javascript
HTTP Request → Express App
  ↓
[Helmet Security Headers]
  ↓
[CORS Policy]
  ↓
[Rate Limiting (production only)]
  ↓
[Cookie Parser]
```

**File**: [`backend/server/app.js`](../../../backend/server/app.js)

### 2. Router Dispatch (`backend/server/API/apiRouter.js:1`)

Routes are organized by version and domain:

- **`/api/v1/auth`** → [`authRouter.js`](../../../backend/server/API/v1/routes/authRouter.js) - Authentication operations
- **`/api/v1/analysis`** → [`analysisRouter.js`](../../../backend/server/API/v1/routes/analysisRouter.js) - Analysis CRUD
- **`/api/v1/analysisEntry`** → [`analysisEntryRouter.js`](../../../backend/server/API/v1/routes/analysisEntryRouter.js) - Video submissions
- **`/api/v1/billing`** → [`billingRouter.js`](../../../backend/server/API/v1/routes/billingRouter.js) - Stripe integration
- **`/api/v1/user`** → [`userRouter.js`](../../../backend/server/API/v1/routes/userRouter.js) - User profile
- **`/api/v1/admin`** → [`adminRouter.js`](../../../backend/server/API/v1/routes/adminRouter.js) - Admin operations
- **`/webhooks/v1/stripe`** → [`webhooksRouter.js`](../../../backend/server/webhooks/webhooksRouter.js) - Webhook handlers

### 3. Middleware Chain

#### Security Middleware Stack
1. **Helmet** ([`backend/server/middlewares/helmet.js`](../../../backend/server/middlewares/helmet.js)) - HTTP security headers
2. **CORS** ([`backend/server/middlewares/cors.js`](../../../backend/server/middlewares/cors.js)) - Cross-origin resource sharing
3. **Rate Limiting** ([`backend/server/middlewares/express-rate-limiter.js`](../../../backend/server/middlewares/express-rate-limiter.js)) - DDoS protection
4. **Slow Down** ([`backend/server/middlewares/express-slow-down.js`](../../../backend/server/middlewares/express-slow-down.js)) - Progressive delays

#### Authentication Middleware
- **Session Store** ([`backend/server/middlewares/storeExpressSessions.js`](../../../backend/server/middlewares/storeExpressSessions.js)) - Session persistence in PostgreSQL
- **Authentication Checker** ([`backend/server/middlewares/authenticationChecker.js`](../../../backend/server/middlewares/authenticationChecker.js)) - Verify authentication status
- **Role-Based Access Control** ([`backend/server/middlewares/permissionByRoleChecker.js`](../../../backend/server/middlewares/permissionByRoleChecker.js)) - Check user roles (customer, admin, participant)
- **Subscription Checker** ([`backend/server/middlewares/subscriptionChecker.js`](../../../backend/server/middlewares/subscriptionChecker.js)) - Validate subscription status (planned)

#### Validation Middleware
- **Express Validator** (`checkSchema()`) - Request validation
- **Sanitizer Result** ([`backend/server/middlewares/sanitizerResult.js`](../../../backend/server/middlewares/sanitizerResult.js)) - Format validation errors

### 4. Controller Layer

**Pattern**: Controllers receive validated requests, orchestrate business logic, call models, and return responses.

**Key Controllers**:
- [`authController.js`](../../../backend/server/controllers/authController.js) - User registration, login, password reset, session management
- [`analysisController.js`](../../../backend/server/controllers/analysisController.js) - Create/read analyses, participant matching
- [`analysisEntryController.js`](../../../backend/server/controllers/analysisEntryController.js) - Video submission, presigned URL generation
- [`transcriptionController.js`](../../../backend/server/controllers/transcriptionController.js) - Queue and process transcription jobs
- [`billingController.js`](../../../backend/server/controllers/billingController.js) - Stripe checkout, customer portal

### 5. Model Layer

**Pattern**: Models encapsulate database operations using Prisma ORM.

**Key Models**:
- [`userModel.js`](../../../backend/server/models/userModel.js) - User CRUD, role management
- [`analysisModel.js`](../../../backend/server/models/analysisModel.js) - Analysis operations, participant matching queries
- [`analysisEntryModel.js`](../../../backend/server/models/analysisEntryModel.js) - Video session tracking, status updates
- [`transcriptionModel.js`](../../../backend/server/models/transcriptionModel.js) - Transcription job queue management
- [`subscriptionModel.js`](../../../backend/server/models/subscriptionModel.js) - Subscription CRUD via Stripe webhooks

### 6. Database Layer (Prisma)

**Location**: [`backend/prisma/schema.prisma`](../../../backend/prisma/schema.prisma)

**Generated Client**: [`backend/server/config/generated/prisma/client/`](../../../backend/server/config/generated/prisma/client/)

## Authentication & Authorization

### Authentication Flow

**Strategy**: Session-based authentication using Passport.js Local Strategy

```
Registration → Hash Password (bcrypt) → Create User → Create Company → Create Subscription → Return User ID
```

**Implementation Files**:
- Authentication Strategy: [`backend/server/auth/strategies/passportLocalStrategy.js`](../../../backend/server/auth/strategies/passportLocalStrategy.js)
- Passport Config: [`backend/server/auth/passportjs.js`](../../../backend/server/auth/passportjs.js)
- Session Serialization: [`backend/server/auth/passportjs.js:11-23`](../../../backend/server/auth/passportjs.js)

### Session Management

**Storage**: PostgreSQL via `@quixo3/prisma-session-store`

**Table**: `Session` model ([`backend/prisma/schema.prisma:104-109`](../../../backend/prisma/schema.prisma))

**Configuration**: [`backend/server/middlewares/storeExpressSessions.js`](../../../backend/server/middlewares/storeExpressSessions.js)

### Authorization (Role-Based Access Control)

**User Roles** ([`backend/prisma/schema.prisma:221-225`](../../../backend/prisma/schema.prisma)):
- `customer` - UX researchers who create analyses
- `admin` - Platform administrators
- `participant` - Users who complete research sessions

**Middleware**: [`backend/server/middlewares/permissionByRoleChecker.js`](../../../backend/server/middlewares/permissionByRoleChecker.js)

**Route Protection Examples**:
```javascript
// Customer-only routes
apiRouter.use('/v1/billing', checkAuthentication(), checkPermissionByRole('customer'), billingRouter);

// Admin-only routes
apiRouter.use('/v1/admin', checkAuthentication(), checkPermissionByRole('admin'), adminRouter);

// Participant-only routes
analysisRouter.get('/available', checkAuthentication(), checkPermissionByRole('participant'), getAvailableAnalyses);
```

## Database Schema

### Core Models

#### User ([`backend/prisma/schema.prisma:19-40`](../../../backend/prisma/schema.prisma))
- Authentication: email, password (bcrypt hashed)
- Role: customer | admin | participant
- Acquisition tracking: UTM parameters, gclid, fbclid
- Relationships: Company, CustomerProfile, ParticipantProfile, Analysis

#### Company ([`backend/prisma/schema.prisma:42-51`](../../../backend/prisma/schema.prisma))
- Organization entity for billing
- Links users, subscriptions, and analyses
- Stripe customer ID for billing

#### ParticipantProfile ([`backend/prisma/schema.prisma:53-74`](../../../backend/prisma/schema.prisma))
- Demographic data: age, gender, country
- Screening data: education, income, technical proficiency
- Approval status for platform participation
- Relationships: AnalysisEntry, ParticipantRating

#### ParticipantRating ([`backend/prisma/schema.prisma:76-84`](../../../backend/prisma/schema.prisma))
- Quality score tracking for participants
- Links to analysis entries for performance tracking

#### CustomerProfile ([`backend/prisma/schema.prisma:86-94`](../../../backend/prisma/schema.prisma))
- Company information for UX researchers
- Position/role within company

#### Analysis ([`backend/prisma/schema.prisma:120-149`](../../../backend/prisma/schema.prisma))
- Research study definition
- Device targeting, demographic filters
- Tasks (JSON array), URL to test
- Status: draft | published | completed
- Recruitment type: USER_PROVIDER | PANEL_PROVIDED
- Participant matching criteria

#### AnalysisEntry ([`backend/prisma/schema.prisma:151-167`](../../../backend/prisma/schema.prisma))
- Individual participant video session
- Status: in_progress | cancelled | submitted | accepted | rejected
- Transcription data storage (segments + full text)
- Relationships: Analysis, ParticipantProfile, TranscriptionJob

#### TranscriptionJob ([`backend/prisma/schema.prisma:169-179`](../../../backend/prisma/schema.prisma))
- Asynchronous transcription processing queue
- Status: PENDING | IN_PROGRESS | COMPLETED
- Language code for transcription

#### Subscription ([`backend/prisma/schema.prisma:111-118`](../../../backend/prisma/schema.prisma))
- Company subscription tracking
- Managed via Stripe webhooks

#### PasswordResetTokens ([`backend/prisma/schema.prisma:96-102`](../../../backend/prisma/schema.prisma))
- Temporary password reset tokens
- Expiration tracking

## External Integrations

### 1. S3/MinIO Storage ([`backend/server/integrations/s3-client/s3.js`](../../../backend/server/integrations/s3-client/s3.js))

**Purpose**: Video recording storage

**Architecture**: Two S3 clients for different network contexts
- **External Client** - Generates presigned URLs for browser upload/download
- **Internal Client** - Server-to-S3 communication for transcription

**Key Functions**:
- `generateS3PutPresignedUrl(key)` - Upload URL for video (90min expiration)
- `generateS3GetPresignedUrl(key)` - Download URL for video playback (60min expiration)
- `getInternalS3Object(key)` - Retrieve video buffer for transcription

**Storage Pattern**: `analysis/{analysisId}/{analysisEntryId}/recording.mp4`

### 2. Stripe Billing ([`backend/server/integrations/stripe/`](../../../backend/server/integrations/stripe/))

**Purpose**: Subscription management and payment processing

**Key Components**:
- **Checkout Session** ([`checkoutSession.js`](../../../backend/server/integrations/stripe/checkoutSession.js)) - Create subscription purchase flow
- **Customer Portal** ([`customerPortalSession.js`](../../../backend/server/integrations/stripe/customerPortalSession.js)) - Self-service billing management
- **Webhook Handler** ([`backend/server/webhooks/stripe/stripeEventHandler.js`](../../../backend/server/webhooks/stripe/stripeEventHandler.js)) - Process Stripe events

**Webhook Events**:
- `checkout.session.completed` - Create subscription after payment
- `customer.subscription.deleted` - Handle subscription cancellation

**Pricing Structure** ([`checkoutSession.js:10-15`](../../../backend/server/integrations/stripe/checkoutSession.js)):
- Environment-specific price IDs (latest/next)
- Monthly billing cycle (annual planned)
- Adaptive pricing, automatic tax collection

### 3. Whisper ASR Transcription ([`backend/server/integrations/whisper-asr-webservice/transcribe.js`](../../../backend/server/integrations/whisper-asr-webservice/transcribe.js))

**Purpose**: Automatic speech-to-text transcription of video recordings

**Architecture**: Asynchronous job queue processed by cron scheduler

**Transcription Flow**:
1. Video submitted → TranscriptionJob created (PENDING)
2. Cron job picks PENDING job → Mark as IN_PROGRESS
3. Fetch video from MinIO
4. POST to Whisper ASR service
5. Normalize transcript segments
6. Store in AnalysisEntry (transcription_segments, full_transcript)
7. Mark job as COMPLETED

**Configuration** ([`backend/compose.yaml:100-122`](../../../backend/compose.yaml)):
- Model: medium (2-5GB)
- Engine: faster_whisper
- Device: CPU with int8 quantization
- Language: Spanish (es)

**Processing Controller**: [`backend/server/controllers/transcriptionController.js`](../../../backend/server/controllers/transcriptionController.js)

**Cron Scheduler**: [`backend/server/cron/getPendingTranscriptionJobScheduler.js`](../../../backend/server/cron/getPendingTranscriptionJobScheduler.js)

### 4. Brevo Email Service ([`backend/server/integrations/brevo/`](../../../backend/server/integrations/brevo/))

**Purpose**: Transactional email delivery

**Key Functions**:
- Password reset emails ([`sendResetPasswordTokenToUser.js`](../../../backend/server/integrations/brevo/transactionalEmails/sendResetPasswordTokenToUser.js))
- Payment confirmation emails ([`paymentCompleted.js`](../../../backend/server/integrations/brevo/transactionalEmails/paymentCompleted.js))
- Contact creation for waitlist ([`createContact.js`](../../../backend/server/integrations/brevo/functions/createContact.js))

### 5. PostHog Analytics ([`backend/server/models/posthogModel.js`](../../../backend/server/models/posthogModel.js))

**Purpose**: Product usage analytics and event tracking

**Key Events**:
- User signup
- User login
- Analysis creation
- Account deletion

### 6. Telegram Logging ([`backend/server/integrations/telegram/sendLogsToTelegram.js`](../../../backend/server/integrations/telegram/sendLogsToTelegram.js))

**Purpose**: Real-time error and info notifications

**Channels**: Separate chat IDs for:
- Latest environment errors/info
- Next environment errors/info

## Background Processing (Cron Jobs)

**Orchestration**: [`backend/server/cron/jobsContainer.js`](../../../backend/server/cron/jobsContainer.js)

### Active Cron Jobs

1. **Transcription Job Processor** ([`getPendingTranscriptionJobScheduler.js`](../../../backend/server/cron/getPendingTranscriptionJobScheduler.js))
   - Picks PENDING transcription jobs
   - Processes one at a time (prevents overload)
   - Calls [`processPendingTranscriptionJobs()`](../../../backend/server/controllers/transcriptionController.js:10)

2. **Password Reset Token Cleaner** ([`deletePasswordResetTokensScheduler.js`](../../../backend/server/cron/deletePasswordResetTokensScheduler.js))
   - Removes expired password reset tokens
   - Keeps database clean

3. **Analysis Entry Cancellation** ([`markAsCancelledAnalysisEntriesScheduler.js`](../../../backend/server/cron/markAsCancelledAnalysisEntriesScheduler.js))
   - Marks incomplete analysis entries as cancelled
   - Frees up analysis slots
   - Implementation: [`markAnalysisEntriesAsCancelled()`](../../../backend/server/controllers/analysisEntryController.js:81)

## Critical Implementation Paths

### Path 1: User Registration (Customer)

```
POST /api/v1/auth/register/local/customer
  ↓
[Validation: email, password, UTM params]
  ↓
authController.createCustomer()
  ↓
userModel.createCustomerInDB()
  ↓
Prisma: Create User + Company + CustomerProfile (transaction)
  ↓
subscriptionModel.createFreeTrialSubscription()
  ↓
billingController.createCompanyBillingId() → Stripe
  ↓
posthogModel.posthogUserSignedUp() (fire-and-forget)
  ↓
Response: 201 Created
```

**Files**: [`authController.js:222-272`](../../../backend/server/controllers/authController.js), [`userModel.js:10-39`](../../../backend/server/models/userModel.js)

### Path 2: Create Analysis

```
POST /api/v1/analysis
  ↓
[Auth Middleware: customer role required]
  ↓
[Validation: name, url, device, tasks, participant criteria]
  ↓
analysisController.createAnalysis()
  ↓
analysisModel.createAnalysisInDb()
  ↓
Prisma: Create Analysis (link to User & Company)
  ↓
posthogModel.posthogAnalysisCreated() (fire-and-forget)
  ↓
Response: 201 Created with analysisId
```

**Files**: [`analysisController.js:14-27`](../../../backend/server/controllers/analysisController.js), [`analysisModel.js:7-46`](../../../backend/server/models/analysisModel.js)

### Path 3: Participant Video Submission

```
POST /api/v1/analysis/participate
  ↓
analysisController.participateInAnalysis()
  ↓
Check available_spots > 0
  ↓
analysisEntryModel.createAnalysisEntryInDb()
  ↓
Prisma: Create AnalysisEntry (status: in_progress)
  ↓
s3.generateS3PutPresignedUrl() → MinIO presigned upload URL
  ↓
Response: 200 with analysisData, analysisEntryId, presigned URL
  ↓
[Frontend uploads video to S3]
  ↓
POST /api/v1/analysisEntry (mark as submitted)
  ↓
analysisEntryController.updateAnalysisEntry()
  ↓
analysisEntryModel.markAnalysisEntryAsSubmitted()
  ↓
transcriptionModel.insertTranscriptionJobInDb() (status: PENDING)
  ↓
Response: 200 Analysis Entry Updated
```

**Files**: [`analysisController.js:71-111`](../../../backend/server/controllers/analysisController.js), [`analysisEntryController.js:20-41`](../../../backend/server/controllers/analysisEntryController.js)

### Path 4: Transcription Processing (Background)

```
Cron Job (every X minutes)
  ↓
transcriptionController.processPendingTranscriptionJobs()
  ↓
Check for IN_PROGRESS jobs (skip if exists)
  ↓
Fetch first PENDING job
  ↓
Update status to IN_PROGRESS
  ↓
s3.getInternalS3Object() → Fetch video from MinIO
  ↓
whisper.transcribeRecording() → POST to Whisper ASR
  ↓
transcriptionNormalizer.cleanUpTranscriptSegments()
  ↓
transcriptionModel.storeNormalizedTranscriptionInDb()
  ↓
Update AnalysisEntry: transcription_segments, full_transcript
  ↓
Update TranscriptionJob status to COMPLETED
```

**Files**: [`transcriptionController.js:10-88`](../../../backend/server/controllers/transcriptionController.js), [`transcribe.js:5-35`](../../../backend/server/integrations/whisper-asr-webservice/transcribe.js)

### Path 5: Stripe Subscription Webhook

```
POST /webhooks/v1/stripe
  ↓
Verify Stripe signature
  ↓
Parse event type
  ↓
Case: checkout.session.completed
  ↓
Extract: companyId, userId, subscriptionId
  ↓
subscriptionModel.updateSubscriptionInDb()
  ↓
Prisma: Update Subscription record
  ↓
Response: 200 Success
```

**Files**: [`stripeEventHandler.js:5-63`](../../../backend/server/webhooks/stripe/stripeEventHandler.js)

## Design Patterns

### 1. Layer Separation
- **Controllers**: HTTP request handling, validation orchestration
- **Models**: Database operations, Prisma queries
- **Integrations**: External service communication

### 2. Middleware Chaining
- Security → Authentication → Authorization → Validation → Controller
- Modular, reusable middleware functions

### 3. Fire-and-Forget Operations
- Analytics events (PostHog)
- Logging (Telegram)
- Non-critical operations don't block responses

### 4. Asynchronous Job Queue
- TranscriptionJob table as persistent queue
- Cron-based processing prevents overwhelming transcription service
- Status tracking: PENDING → IN_PROGRESS → COMPLETED

### 5. Presigned URL Pattern
- Security: Client never has S3 credentials
- Scalability: Direct client-to-S3 upload/download
- Server only generates time-limited URLs

### 6. Webhook-Driven State Updates
- Stripe webhooks as source of truth for subscriptions
- Avoids polling, ensures data consistency

## Error Handling

**Global Error Handler**: [`backend/server/middlewares/globalErrorHandler.js`](../../../backend/server/middlewares/globalErrorHandler.js)

**Logging Strategy**:
- **Production**: Pino logger → JSON format
- **Development**: Pino-pretty → Human-readable
- **Errors**: Telegram notifications for critical issues

**Pattern**: Try-catch in controllers → Log error → Return appropriate HTTP status

## Performance & Security

### Rate Limiting
- **Express Rate Limit**: Hard limit on requests per window
- **Express Slow Down**: Progressive delays for repeated requests
- **Environment**: Only enabled in production

### Session Security
- HttpOnly cookies
- Secure flag in production
- Session stored in database (persistent, scalable)

### Password Security
- Bcrypt hashing (10 rounds)
- Password reset tokens with expiration

### Database Security
- Prisma ORM prevents SQL injection
- Environment-based connection strings
- Password omitted from query results

## Deployment Architecture

### Docker Containers ([`backend/compose.yaml`](../../../backend/compose.yaml))

1. **Server** (commented out - runs locally in dev)
   - Node.js application
   - Port 3000

2. **PostgreSQL** ([`compose.yaml:83-98`](../../../backend/compose.yaml))
   - Port 5432
   - Persistent volume: uxcaptain-database

3. **MinIO** ([`compose.yaml:67-81`](../../../backend/compose.yaml))
   - S3-compatible storage
   - Port 9000 (API), 9001 (Console)
   - Bind mount: `/Users/martaperezsanchez/repos/minio`

4. **Whisper ASR** ([`compose.yaml:100-122`](../../../backend/compose.yaml))
   - Port 9007
   - Model: medium (~2-5GB)
   - CPU: 4 cores, 5GB memory limit

**Network**: Custom bridge network (uxcaptain-network)

## Key Technical Decisions

1. **Session-based Auth over JWT**: Better security for web applications, easier session revocation
2. **Prisma ORM**: Type safety, migrations, better developer experience
3. **MinIO for Development**: S3-compatible, easy local setup
4. **PostgreSQL**: Relational model fits user research domain well
5. **Asynchronous Transcription**: Video transcription too slow for synchronous HTTP
6. **Background Job Queue**: Simple, reliable, no external queue service needed
7. **Presigned URLs**: Scalable file upload/download without proxying through backend

## Future Architecture Considerations

1. **JWT Strategy**: Commented out in [`passportJWTStrategy.js`](../../../backend/server/auth/strategies/passportJWTStrategy.js) - for mobile apps or API access
2. **Subscription Checker Middleware**: Partially implemented, needs completion
3. **Participant Matching**: Demographic filters commented out in [`analysisModel.js:145-173`](../../../backend/server/models/analysisModel.js) - requires birthdate field
4. **Admin Registration**: Route commented out for security
5. **Webhooks Expansion**: Currently only Stripe, could add more providers
