# AGENTS.md — UXcaptain Backend Server

> This file provides AI agents with comprehensive context about the UXcaptain project: architecture, technology stack, current status, research insights, and development workflows.

---

## Table of Contents

- [Project Brief](#project-brief)
- [Current Context](#current-context)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Research Summary](#research-summary)
- [Development Tasks & Workflows](#development-tasks--workflows)

---

## Project Brief

### What is the project

UXcaptain is a video-based user research platform designed for UX, marketing and product teams to conduct remote usability testing with video recording, automate transcription and analysis of user sessions, and extract actionable insights from participant interactions with prototypes and products.

The platform addresses critical gaps in traditional user research by providing:

- Automated participant recruitment and management (not yet implemented)
- Remote video-based testing capabilities
- AI-powered transcription and insight extraction (not yet implemented)
- Comprehensive analytics and reporting (not yet implemented)

### Primary Users

- **UX researchers** conducting qualitative user studies
- **Product managers** validating user flows and experiences
- **Design teams** testing prototypes and interfaces
- **Marketing teams** understanding customer behavior patterns
- **CX professionals** measuring customer experience quality

### Why This Project Exists

Traditional user research methods face critical barriers that prevent teams from conducting effective, scalable user studies. Organizations struggle with expensive participant recruitment, time-intensive manual analysis, and fragmented tool ecosystems that increase costs without improving outcomes.

UXcaptain eliminates these barriers by providing an all-in-one platform that automates manual processes, reduces costs, and enables teams to conduct regular user research at scale.

### Deliverable

The deliverable is an approximately 15 minute duration video of a participant's screen & audio recording while completing customer-defined tasks - (eg: Try to create an account on <company's> website, find a product on X site under the price of 50€)

### Problems It Solves

1. **High Cost of Traditional User Research**: Traditional in-person usability testing requires dedicated facilities, equipment, and significant staff time
2. **Limited Participant Recruitment**: Finding and managing participants for research studies is time-consuming and expensive
3. **Manual Analysis Bottleneck**: Video analysis and insight extraction is labor-intensive and subjective
4. **Fragmented Research Workflow**: Teams struggle to manage studies, participants, recordings, and insights in one place
5. **Difficulty Scaling Research**: Small teams can't afford the overhead of traditional research methods

### Core Features

Based on market research with 64 UX professionals, the platform prioritizes:

- **AI-Generated Insight Summaries**: Automated synthesis of key findings from video sessions
- **Automated Participant Recruitment**: Platform handles user recruitment automatically with access to external, unbiased participants
- **Comprehensive Analytics Dashboard**: Task success rate, time-on-task metrics, and quantitative analysis of qualitative data
- **Question Generation Assistance**: AI-powered question suggestions based on product analysis
- **Moderated Interview Capabilities**: Follow-up conversations with users after analysis
- **Timestamped Note-Taking**: Ability to save insights with time markers in recordings

### Revenue Model (Draft)

The revenue model is evolving, but pricing is expected to follow a tiered subscription model aligned with Spanish market budgets (notably: 35% of UX professionals spend <€1,000/year on UX tools).

**Important sequencing note:** access to an external participant pool is **not available initially** (MVP) and will be introduced later. Early plans differentiate tiers primarily via transcription + AI analysis capabilities and support SLAs.

**Targeting note:** enterprise-specific needs (SSO, complex procurement, bespoke contracts) are explicitly **out of scope** for early pricing/plans.

---

## Current Context

### Current Work Focus

Building UXcaptain, a video-based user research platform for UX, marketing and product teams. **Major milestone achieved**: Completed comprehensive user research with 64 UX professionals (Oct-Nov 2025), providing strong market validation for core features and positioning.

**Research Validation Summary**:

- ✅ 90% adoption rate of qualitative feedback collection
- ✅ Top 5 pain points confirmed: User Recruitment (25+), Time Investment (15+), Analysis (12+), Tool Costs (10+), Trust & Quality (8+)
- ✅ Feature demand validated: AI Insights (30+), Recruitment Delegation (20+), Metrics (15+), Question Generation (12+), Interviews (10+)
- ✅ 75% prefer external users to avoid bias - key competitive advantage
- ✅ Strong willingness to pay for cost-effective solution

**Commercial scope notes (pricing/tiers)**:
- **Tier structure**: 3-tier model post-beta - Free (€0), Starter (€49), Pro (€99). Beta tier offered during beta phase.
- **Participant pool sequencing**: access to an external participant pool is **not available initially (MVP)** and will be introduced later with monthly participant allowance (5 for Starter, 15 for Pro).
- **Enterprise out of scope (early plans)**: enterprise-specific needs (SSO, complex procurement, bespoke contracts) are explicitly **out of scope** for early pricing/plans.
- **Market focus**: Small teams (2-5 people), sub-€1,000 annual budgets (35% of Spanish market), European market (GDPR compliance).

### Project Status: Active Development - Backend MVP Implementation

#### Backend Implementation Status

**Core Infrastructure (✅ Completed)**:

- ✅ **Express.js Server**: RESTful API with security middleware (Helmet, CORS, rate limiting)
- ✅ **PostgreSQL Database**: Prisma ORM with comprehensive schema (11 models, 8 migrations)
- ✅ **Authentication System**: Passport.js Local Strategy with session-based auth
- ✅ **Authorization**: Role-based access control (customer, admin, participant)
- ✅ **Docker Compose Setup**: PostgreSQL, MinIO, Whisper ASR services

**Implemented Features (✅ Completed)**:

1. **User Management**:
   - ✅ Customer registration with company creation
   - ✅ Participant registration with profile
   - ✅ Admin registration (commented out for security)
   - ✅ Login/logout with session management
   - ✅ Password reset via email tokens
   - ✅ UTM tracking for acquisition data

2. **Analysis Operations**:
   - ✅ Create analysis with participant criteria
   - ✅ List all analyses for company
   - ✅ Get single analysis details
   - ✅ Participant matching (device filtering implemented, demographic filters commented out)
   - ✅ Available analysis listing for participants

3. **Video Submission System**:
   - ✅ Participant video submission workflow
   - ✅ S3 presigned URL generation (upload/download)
   - ✅ Analysis entry status tracking (in_progress, submitted, accepted, rejected, cancelled)
   - ✅ Automatic cancellation of expired entries (cron job)

4. **Automatic Transcription** (✅ Completed - Major Feature):
   - ✅ Asynchronous transcription job queue (TranscriptionJob table)
   - ✅ Whisper ASR integration (faster_whisper, medium model, Spanish)
   - ✅ Cron job processor for pending jobs
   - ✅ Transcript normalization and storage
   - ✅ Both segment-level and full transcript storage

5. **Billing & Subscriptions**:
   - ✅ Stripe integration (checkout, customer portal)
   - ✅ Free trial subscription creation
   - ✅ Webhook handling (checkout completion, subscription deletion)
   - ✅ Adaptive pricing and automatic tax collection

6. **Participant System**:
   - ✅ Participant profile with demographics
   - ✅ Participant approval system
   - ✅ Participant rating system (database ready, not fully implemented)
   - ✅ Available devices tracking

7. **External Integrations**:
   - ✅ Brevo email service (password reset, payment confirmation)
   - ✅ PostHog analytics (signup, login, analysis creation, account deletion)
   - ✅ Telegram logging (separate channels for latest/next environments)
   - ✅ MinIO S3-compatible storage (dual client setup)

### Next Steps

**Immediate (P0)**:

1. **Frontend Development**: Build React frontend to connect with existing backend API
2. **Participant Matching Enhancement**: Complete demographic filtering implementation (commented out in `analysisModel.js:145-173`)
3. **Analysis Entry Workflow**: Add accept/reject functionality for submitted analysis entries

**Short-term (P1)**:

1. **AI Video Insights Extraction**: Implement AI-powered insight extraction from transcriptions (highest demand: 30+ requests)
2. **Analytics Dashboard**: Create comprehensive analytics dashboard with metrics (Time-on-task, Success rates, Task completion)
3. **Participant Recruitment Enhancement**: Complete participant matching with full demographic criteria
4. **Subscription Checker**: Complete subscription middleware implementation
5. **Testing Coverage**: Add comprehensive test coverage (Jest framework present but minimal tests)

**Medium-term (P2)**:

1. **Task Generation**: Implement AI-powered question and task suggestion system (12+ requests)
2. **Moderated Sessions**: Add capability for moderated user research sessions (10+ requests)
3. **Timestamped Note-Taking**: Implement note-taking with time markers in video recordings (8+ requests)
4. **JWT Authentication**: Complete JWT strategy implementation for mobile/API access
5. **Admin Dashboard**: Build admin operations management interface

---

## Architecture

### System Overview

UXcaptain backend is a RESTful API server built with Node.js/Express following an MVC-inspired architecture pattern. The system handles user research video sessions, automated transcription, subscription management, and participant coordination.

**Core Architecture Pattern**: HTTP Request → Router → Middleware Chain → Controller → Model → Database/External Services

### High-Level Architecture

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

### Directory Structure

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

### Request Flow

#### 1. HTTP Request Entry (`backend/server/app.js`)

```
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

#### 2. Router Dispatch (`backend/server/API/apiRouter.js`)

Routes are organized by version and domain:

- **`/api/v1/auth`** → `authRouter.js` - Authentication operations
- **`/api/v1/analysis`** → `analysisRouter.js` - Analysis CRUD
- **`/api/v1/analysisEntry`** → `analysisEntryRouter.js` - Video submissions
- **`/api/v1/billing`** → `billingRouter.js` - Stripe integration
- **`/api/v1/user`** → `userRouter.js` - User profile
- **`/api/v1/admin`** → `adminRouter.js` - Admin operations
- **`/webhooks/v1/stripe`** → `webhooksRouter.js` - Webhook handlers

#### 3. Middleware Chain

**Security Middleware Stack**:
1. **Helmet** (`backend/server/middlewares/helmet.js`) - HTTP security headers
2. **CORS** (`backend/server/middlewares/cors.js`) - Cross-origin resource sharing
3. **Rate Limiting** (`backend/server/middlewares/express-rate-limiter.js`) - DDoS protection
4. **Slow Down** (`backend/server/middlewares/express-slow-down.js`) - Progressive delays

**Authentication Middleware**:
- **Session Store** (`backend/server/middlewares/storeExpressSessions.js`) - Session persistence in PostgreSQL
- **Authentication Checker** (`backend/server/middlewares/authenticationChecker.js`) - Verify authentication status
- **Role-Based Access Control** (`backend/server/middlewares/permissionByRoleChecker.js`) - Check user roles (customer, admin, participant)
- **Subscription Checker** (`backend/server/middlewares/subscriptionChecker.js`) - Validate subscription status (planned)

**Validation Middleware**:
- **Express Validator** (`checkSchema()`) - Request validation
- **Sanitizer Result** (`backend/server/middlewares/sanitizerResult.js`) - Format validation errors

#### 4. Controller Layer

**Pattern**: Controllers receive validated requests, orchestrate business logic, call models, and return responses.

**Key Controllers**:
- `authController.js` - User registration, login, password reset, session management
- `analysisController.js` - Create/read analyses, participant matching
- `analysisEntryController.js` - Video submission, presigned URL generation
- `transcriptionController.js` - Queue and process transcription jobs
- `billingController.js` - Stripe checkout, customer portal

#### 5. Model Layer

**Pattern**: Models encapsulate database operations using Prisma ORM.

**Key Models**:
- `userModel.js` - User CRUD, role management
- `analysisModel.js` - Analysis operations, participant matching queries
- `analysisEntryModel.js` - Video session tracking, status updates
- `transcriptionModel.js` - Transcription job queue management
- `subscriptionModel.js` - Subscription CRUD via Stripe webhooks

### Authentication & Authorization

**Strategy**: Session-based authentication using Passport.js Local Strategy

```
Registration → Hash Password (bcrypt) → Create User → Create Company → Create Subscription → Return User ID
```

**Session Management**: PostgreSQL via `@quixo3/prisma-session-store`, `Session` model in Prisma schema.

**User Roles** (in `backend/prisma/schema.prisma`):
- `customer` - UX researchers who create analyses
- `admin` - Platform administrators
- `participant` - Users who complete research sessions

**Route Protection Examples**:
```javascript
// Customer-only routes
apiRouter.use('/v1/billing', checkAuthentication(), checkPermissionByRole('customer'), billingRouter);
// Admin-only routes
apiRouter.use('/v1/admin', checkAuthentication(), checkPermissionByRole('admin'), adminRouter);
// Participant-only routes
analysisRouter.get('/available', checkAuthentication(), checkPermissionByRole('participant'), getAvailableAnalyses);
```

### Database Schema (Core Models)

- **User**: Authentication (email, password), role, acquisition tracking (UTM), relationships to Company, CustomerProfile, ParticipantProfile, Analysis
- **Company**: Organization entity for billing, Stripe customer ID
- **ParticipantProfile**: Demographics, screening data, approval status
- **ParticipantRating**: Quality score tracking
- **CustomerProfile**: Company info for UX researchers
- **Analysis**: Research study definition, device targeting, demographic filters, tasks, status (draft/published/completed), recruitment type
- **AnalysisEntry**: Individual video session, status tracking, transcription data
- **TranscriptionJob**: Async transcription queue (PENDING → IN_PROGRESS → COMPLETED)
- **Subscription**: Company subscription tracking via Stripe webhooks
- **PasswordResetTokens**: Temporary reset tokens with expiration

### External Integrations

1. **S3/MinIO Storage** (`backend/server/integrations/s3-client/s3.js`): Video recording storage with dual S3 clients (external for presigned URLs, internal for transcription). Storage pattern: `analysis/{analysisId}/{analysisEntryId}/recording.mp4`

2. **Stripe Billing** (`backend/server/integrations/stripe/`): Subscription management, checkout sessions, customer portal, webhook handling (checkout.session.completed, customer.subscription.deleted)

3. **Whisper ASR Transcription** (`backend/server/integrations/whisper-asr-webservice/transcribe.js`): Async job queue → cron picks PENDING → fetch video from MinIO → POST to Whisper → normalize → store. Model: medium, engine: faster_whisper, language: Spanish

4. **Brevo Email** (`backend/server/integrations/brevo/`): Password reset emails, payment confirmation, contact creation

5. **PostHog Analytics** (`backend/server/models/posthogModel.js`): User signup, login, analysis creation, account deletion events

6. **Telegram Logging** (`backend/server/integrations/telegram/sendLogsToTelegram.js`): Real-time error/info notifications, separate channels per environment

### Background Processing (Cron Jobs)

Orchestrated in `backend/server/cron/jobsContainer.js`:

1. **Transcription Job Processor**: Picks PENDING jobs, processes one at a time
2. **Password Reset Token Cleaner**: Removes expired tokens
3. **Analysis Entry Cancellation**: Marks incomplete entries as cancelled

### Critical Implementation Paths

1. **User Registration**: POST /api/v1/auth/register/local/customer → validation → create User + Company + CustomerProfile (transaction) → create free trial subscription → create Stripe customer → PostHog event
2. **Create Analysis**: POST /api/v1/analysis → auth middleware → validation → create Analysis → PostHog event
3. **Participant Video Submission**: POST /api/v1/analysis/participate → check spots → create AnalysisEntry → generate presigned URL → [frontend uploads] → POST /api/v1/analysisEntry → mark submitted → create TranscriptionJob
4. **Transcription Processing**: Cron → check no IN_PROGRESS → fetch PENDING → update to IN_PROGRESS → fetch video → Whisper ASR → normalize → store → COMPLETED
5. **Stripe Webhook**: POST /webhooks/v1/stripe → verify signature → handle event → update subscription

### Design Patterns

1. **Layer Separation**: Controllers (HTTP handling) → Models (DB operations) → Integrations (external services)
2. **Middleware Chaining**: Security → Authentication → Authorization → Validation → Controller
3. **Fire-and-Forget**: Analytics events (PostHog), logging (Telegram) don't block responses
4. **Async Job Queue**: TranscriptionJob table as persistent queue with cron-based processing
5. **Presigned URL Pattern**: Client never has S3 credentials, direct client-to-S3 upload/download
6. **Webhook-Driven State**: Stripe webhooks as source of truth for subscriptions

### Error Handling

- **Global Error Handler**: `backend/server/middlewares/globalErrorHandler.js`
- **Production logging**: Pino → JSON format; **Development**: Pino-pretty → human-readable
- **Critical errors**: Telegram notifications
- **Pattern**: Try-catch in controllers → Log error → Return appropriate HTTP status

---

## Technology Stack

### Core Technologies

- **Node.js**: 24.x
- **TypeScript**: ^5.7.3 (configured but primarily JS codebase with ESM modules)
- **Module System**: ES Modules (`"type": "module"`)
- **Express.js**: ^5.1.0

### Database

- **Prisma**: ^6.19.0 (client generated to `backend/server/config/generated/prisma/client`)
- **PostgreSQL**: 17.5 (Docker image: `postgres:17.5`)
- **Schema**: `backend/prisma/schema.prisma`

### Authentication

- **passport**: ^0.7.0 with **passport-local**: ^1.0.0
- **bcryptjs**: ^3.0.3 (10 rounds)
- **express-session**: ^1.18.2 with **@quixo3/prisma-session-store**: ^3.1.13

### Security

- **helmet**: ^8.1.0, **cors**: ^2.8.5
- **express-rate-limit**: ^8.2.1 (production only)
- **express-slow-down**: ^3.0.1 (production only)

### Validation

- **express-validator**: ^7.3.1
- Schemas in `backend/server/utils/validators/`

### External Services

- **stripe**: ^20.0.0
- **@aws-sdk/client-s3**: ^3.936.0 + **@aws-sdk/s3-request-presigner**: ^3.936.0
- **@getbrevo/brevo**: ^3.0.1
- **Whisper ASR**: Docker image `onerahmet/openai-whisper-asr-webservice:latest` (medium model, faster_whisper, int8, Spanish)
- **axios**: ^1.13.2 + **form-data**: ^4.0.5
- **posthog-node**: ^5.13.2

### Background Processing

- **cron**: ^4.3.4

### Logging

- **pino**: ^10.1.0 + **pino-pretty**: ^13.1.2

### Development Tools

- **ESLint**: ^8.57.1 (airbnb-base)
- **jest**: ^30.2.0 (minimal test coverage)
- **tsx**: ^4.19.2

### Docker Services (`backend/compose.yaml`)

1. `server` - Node.js app (commented out in dev)
2. `database` - PostgreSQL 17.5 (port 5432)
3. `minio` - S3-compatible storage (ports 9000/9001)
4. `faster-whisper-transcribe` - Transcription (port 9007, 4 CPU, 5GB mem)
- **Network**: `uxcaptain-network` (bridge)

### NPM Scripts

- `npm start` - Production start
- `npm run start:local` - Dev with hot reload (`--watch`) and env file
- `npm run start:docker` - Docker Compose with build and watch
- `npm run stripe:listen` - Stripe CLI webhook forwarding
- `npm test` - Jest tests

### Key Technical Decisions

1. ESM over CommonJS
2. Prisma over raw SQL
3. Session-based auth over JWT (for web apps)
4. PostgreSQL over NoSQL
5. MinIO for dev over AWS S3
6. Docker Compose over Kubernetes
7. Pino over Winston
8. Express 5.x
9. Bcrypt over Argon2
10. Presigned URLs over proxying

---

## Research Summary

*Based on comprehensive research from Spanish UX professionals: 64 professionals surveyed (October-November 2025) and "Estado del UX en España 2021" survey data*

### Key Findings

#### Market Adoption
- ~90% of respondents currently collect qualitative feedback
- Research frequency: 23% always, 45% occasionally, 32% never
- Post-design research most common, suggesting need for validation tools

#### Top 5 Pain Points (validated across both studies)

1. **User Recruitment** (25+ mentions both studies) - Most expensive, complex process
2. **Time Investment** (15+ in 2025, 50+ in 2021) - Analysis too slow vs dev cycles
3. **Data Processing & Analysis** (12+ in 2025, 30+ in 2021) - Extracting insights is challenging
4. **Tool Limitations & Costs** (10+ in 2025, 40+ in 2021) - Tools too expensive
5. **Trust & Data Quality** (8+ in 2025) - Users may not behave naturally

#### Most Requested Features

1. **AI-Generated Insight Summaries** (30+ requests) - Automated synthesis
2. **Recruitment Delegation** (20+ requests) - Platform handles recruitment
3. **Metric Summaries** (15+ requests) - Task success rate, time-on-task
4. **Question Generation** (12+ requests) - AI-powered suggestions
5. **Interview Capabilities** (10+ requests) - Moderated follow-ups
6. **Timestamped Note-Taking** (8+ requests) - Time markers in recordings

#### Spanish Market Characteristics

- **Budget**: 35% spend <€1,000/year on UX tools
- **Team size**: 45% work in teams of 2-5 people
- **Work style**: 75% remote or hybrid
- **Geography**: 60% Madrid, 15% Cataluña
- **Experience**: 50% mid-level (2-5 years)

#### Strategic Validation

- ✅ 75% prefer external users to avoid bias → competitive advantage
- ✅ AI-powered insights (30+ requests) → core differentiator
- ✅ Participant recruitment (25+ pain points) → planned core feature
- ✅ Fast analysis → key value proposition
- ✅ Cost reduction → market opportunity

--