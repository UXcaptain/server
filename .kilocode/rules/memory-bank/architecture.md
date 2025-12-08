# Architecture

## System Architecture

### High-Level Overview
UXCaptain follows a modular, API-first architecture built on Express.js with a clear separation of concerns. The system implements a multi-tenant architecture where companies own their data through proper isolation at the database level.

### Core Components

#### 1. Express.js Backend Server (`server/`)
- **Entry Point**: `server/app.js` - Main application setup and middleware configuration
- **Router System**: Modular routing with `server/API/apiRouter.js` as main entry point
- **Middleware Stack**: Security, CORS, rate limiting, session management, error handling
- **Port**: Configurable via environment variables (default: 3000)

#### 2. Database Layer (Prisma + PostgreSQL)
- **ORM**: Prisma with generated client
- **Schema**: `prisma/schema.prisma` - Comprehensive data model with proper relationships
- **Migration**: Automated migration system for production and development
- **Session Storage**: Prisma session store for express-session

#### 3. Authentication & Authorization
- **Strategy**: Passport.js local strategy
- **Session Management**: Express-session with database storage
- **Security**: bcryptjs password hashing, role-based access control
- **Password Reset**: Token-based system with expiration

#### 4. Billing System
- **Provider**: Stripe integration
- **Features**: Checkout sessions, customer portal, subscription management
- **Webhook Handling**: Dedicated webhook processor for Stripe events

#### 5. File Storage
- **Provider**: AWS S3 with presigned URLs
- **Usage**: Video/audio uploads from participants
- **Security**: Temporary presigned URLs for secure access

#### 6. Message Queue & Async Processing
- **Queue**: LavinMQ for message brokering
- **Usage**: Async task processing, background jobs

#### 7. Monitoring & Logging
- **Analytics**: PostHog integration for product analytics
- **Logging**: Pino logger with Telegram bot integration
- **Error Tracking**: Comprehensive error handling middleware

## Source Code Structure

### Backend Structure (`server/`)
```
server/
├── API/                          # API routing layer
│   ├── apiRouter.js             # Main API router
│   └── v1/
│       └── routes/              # Versioned route handlers
│           ├── adminRouter.js   # Admin endpoints
│           ├── analysisRouter.js # Analysis management
│           ├── analysisEntryRouter.js # Participant entries
│           ├── authRouter.js    # Authentication
│           ├── billingRouter.js # Billing operations
│           └── userRouter.js    # User management
├── controllers/                 # Business logic layer
│   ├── adminController.js       # Admin operations
│   ├── analysisController.js    # Analysis management
│   ├── analysisEntryController.js # Entry handling
│   ├── authController.js        # Authentication logic
│   ├── billingController.js     # Billing operations
│   └── userController.js        # User management
├── models/                      # Data access layer
│   ├── analysisEntryModel.js    # Analysis entry operations
│   ├── analysisModel.js         # Analysis operations
│   ├── passwordResetTokensModel.js # Password reset
│   ├── posthogModel.js          # Analytics
│   ├── subscriptionModel.js     # Subscription management
│   └── userModel.js             # User operations
├── middlewares/                 # Express middleware
│   ├── authenticationChecker.js # Auth verification
│   ├── cors.js                  # CORS configuration
│   ├── globalErrorHandler.js    # Error handling
│   ├── helmet.js                # Security headers
│   ├── permissionByRoleChecker.js # RBAC
│   ├── subscriptionChecker.js   # Subscription validation
│   └── storeExpressSessions.js  # Session management
├── auth/                        # Authentication layer
│   ├── passportjs.js            # Passport configuration
│   └── strategies/
│       ├── passportJWTStrategy.js # JWT strategy (WIP)
│       └── passportLocalStrategy.js # Local strategy
├── integrations/                # External service integrations
│   ├── aws/s3.js               # S3 file storage
│   ├── brevo/                  # Email service
│   ├── stripe/                 # Payment processing
│   └── telegram/               # Logging integration
├── config/                      # Configuration files
│   ├── logger.js               # Logging configuration
│   ├── posthog-node.js         # Analytics setup
│   └── stripe.js               # Stripe configuration
├── cron/                        # Scheduled jobs
│   ├── deletePasswordResetTokensScheduler.js
│   └── markAsCancelledAnalysisEntriesScheduler.js
├── routers/                     # Additional routers
│   └── indexRouter.js          # Index route handler
├── utils/                       # Utility functions
│   └── validators/             # Input validation schemas
└── webhooks/                    # Webhook handlers
    └── stripe/                 # Stripe webhook processor
```

### Database Schema Architecture

#### Core Entities
1. **User**: Central user entity with role-based access
2. **Company**: Multi-tenant organization entity
3. **Analysis**: User research study definition
4. **AnalysisEntry**: Individual participant submissions
5. **ParticipantProfile**: Demographic and preference data
6. **CustomerProfile**: Business user information
7. **Subscription**: Billing and plan management
8. **PasswordResetTokens**: Secure password reset mechanism

#### Relationships
- User belongs to Company (multi-tenant)
- Company has many Users, Analyses, Subscriptions
- Analysis belongs to Company, created by User
- Analysis has many AnalysisEntries
- AnalysisEntry belongs to Analysis and optionally ParticipantProfile
- User has optional ParticipantProfile and CustomerProfile

## Key Technical Decisions

### 1. Express.js Framework Choice
- **Reason**: Mature, flexible, extensive ecosystem
- **Benefits**: Easy middleware integration, robust routing, good performance

### 2. Prisma ORM
- **Reason**: Type-safe database access, excellent migrations
- **Benefits**: Generated types, powerful querying, schema versioning

### 3. PostgreSQL Database
- **Reason**: Robust, feature-rich, excellent for complex queries
- **Benefits**: ACID compliance, JSON support, excellent performance

### 4. Passport.js Authentication
- **Reason**: Industry standard, extensible strategy system
- **Benefits**: Session management, multiple strategies, middleware integration

### 5. AWS S3 for File Storage
- **Reason**: Scalable, secure, cost-effective
- **Benefits**: Presigned URLs, automatic scaling, enterprise security

### 6. Stripe for Payments
- **Reason**: Industry-leading payment processing
- **Benefits**: Subscription management, webhooks, extensive documentation

### 7. Docker Containerization
- **Reason**: Consistent deployments, easy scaling
- **Benefits**: Environment consistency, easy CI/CD, cloud deployment

## Design Patterns

### 1. MVC Architecture
- **Controllers**: Business logic and request handling
- **Models**: Data access and database operations
- **Views**: API responses (JSON)

### 2. Repository Pattern
- Model files encapsulate all database operations
- Centralized data access logic
- Easy testing and maintenance

### 3. Strategy Pattern
- Authentication strategies (Local, JWT)
- Extensible for future authentication methods

### 4. Middleware Pattern
- Cross-cutting concerns (auth, logging, validation)
- Composable request/response pipeline

### 5. Factory Pattern
- Configuration object creation
- Service instantiation

## Critical Implementation Paths

### 1. User Registration & Authentication Flow
```
POST /api/v1/auth/register/local
→ Validation → User Creation → Company Creation → Stripe Customer → Response
```

### 2. Analysis Creation & Management
```
POST /api/v1/analysis
→ Validation → Company Check → Analysis Creation → Response
```

### 3. Participant Flow
```
GET /api/v1/analysis/participate
→ Validate Analysis → Create Entry → Return Instructions
```

### 4. File Upload Process
```
POST /api/v1/analysisEntry/upload-url
→ Generate Presigned URL → Client Upload → Confirm Upload
```

### 5. Billing Flow
```
POST /api/v1/billing/checkout-session
→ Validate Subscription → Create Stripe Session → Return URL
```

## Security Considerations

### 1. Authentication & Authorization
- Session-based authentication with database storage
- Role-based access control (customer, admin, participant)
- Password hashing with bcryptjs
- JWT strategy prepared for future API-only usage

### 2. Data Protection
- Input validation with express-validator
- SQL injection prevention via Prisma ORM
- XSS protection via helmet middleware
- CORS configuration for cross-origin requests

### 3. File Security
- Temporary presigned URLs for S3 access
- No direct file system access
- Secure file naming conventions

### 4. API Security
- Rate limiting and slow-down protection
- Request sanitization
- Comprehensive error handling
- Environment-based configuration