# Technology Stack

## Core Technologies

### Backend Framework
- **Express.js 5.1.0**: Main web framework with ES modules support
- **Node.js 24.x**: Runtime environment (engine requirement)
- **TypeScript 5.7.3**: Type support and development experience

### Database & ORM
- **PostgreSQL 17.5**: Primary database (via Docker container)
- **Prisma 6.19.0**: Type-safe ORM with generated client
- **@quixo3/prisma-session-store**: Session storage integration

### Authentication & Security
- **Passport.js 0.7.0**: Authentication framework
- **passport-local**: Username/password authentication strategy
- **bcryptjs 3.0.3**: Password hashing
- **express-session 1.18.2**: Session management
- **helmet 8.1.0**: Security headers
- **express-validator 7.3.1**: Input validation
- **cookie-parser 1.4.7**: Cookie parsing middleware

### External Integrations

#### Payment Processing
- **Stripe 20.0.0**: Subscription billing, checkout sessions, customer portal

#### File Storage
- **@aws-sdk/client-s3 3.936.0**: S3 operations
- **@aws-sdk/s3-request-presigner 3.936.0**: Presigned URL generation

#### Email Service
- **@getbrevo/brevo 3.0.1**: Transactional emails (formerly Sendinblue)

#### Analytics & Monitoring
- **posthog-node 5.13.2**: Product analytics
- **pino 10.1.0**: Structured logging
- **pino-pretty 13.1.2**: Log formatting

#### Message Queue
- **@cloudamqp/amqp-client 3.4.0**: LavinMQ integration for async processing

### API & Middleware

#### API Framework
- **express-rate-limit 8.2.1**: API rate limiting
- **express-slow-down 3.0.1**: Request throttling
- **cors 2.8.5**: Cross-origin resource sharing

#### HTTP Client
- **axios 1.13.2**: HTTP client for external API calls

### Development & Testing

#### Testing Framework
- **Jest 30.2.0**: Unit and integration testing

#### Code Quality
- **eslint 8.57.1**: Code linting
- **eslint-config-airbnb-base 15.0.0**: ESLint configuration
- **eslint-plugin-import 2.31.0**: Import rules

#### Development Tools
- **tsx 4.19.2**: TypeScript execution
- **@types/node 24.0.11**: Node.js type definitions

## Development Setup

### Prerequisites
- Node.js 24.x or higher
- Docker & Docker Compose
- PostgreSQL (via Docker)
- AWS S3 bucket access
- Stripe account for payments
- PostHog account for analytics

### Environment Configuration
Required environment variables (see `.env.example`):
```bash
NODE_ENV=development
PORT=3000
SESSION_SECRET=your-session-secret

# Database
PRISMA_POSTGRES_DIRECT_URL=postgresql://user:password@localhost:5432/uxcaptain
PRISMA_POSTGRES_CONNECTION_STRING=postgresql://user:password@localhost:5432/uxcaptain?schema=public

# AWS S3
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
S3_REGION=eu-west-3
AWS_BUCKET=your-bucket-name

# Stripe
STRIPE_API_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Brevo)
BREVO_API_KEY=your-brevo-key

# Analytics
POSTHOG_API_KEY=your-posthog-key

# Telegram (Logging)
TELEGRAM_BOT_API_KEY=your-bot-token

# Frontend
FRONT_WEB_APP_ORIGIN_URL=http://localhost:5173
```

### Local Development Commands
```bash
# Install dependencies
npm ci

# Start development with Docker
npm run start:docker

# Start locally (without Docker)
npm run start:local

# Run tests
npm test

# Stripe webhook testing
npm run stripe:listen
```

## Deployment Architecture

### Containerization
- **Multi-stage Docker builds**: Separate dev/prod images
- **Docker Compose**: Development environment orchestration
- **Production Dockerfiles**: Optimized for deployment

#### Docker Images
- **Development**: `Dockerfile.dev` with live reload
- **Production**: `Dockerfile` with optimized dependencies

### Deployment Platform
- **Koyeb**: Serverless container platform
- **GitHub Actions**: CI/CD pipeline
- **Docker Hub**: Container registry

#### Deployment Strategy
- **Branches**: `next` (staging), `latest` (production)
- **Automatic deployment**: GitHub Actions on branch push
- **Environment variables**: Managed via Koyeb dashboard

### Database Migrations
- **Production**: `npx prisma migrate deploy`
- **Development**: `npx prisma db push --accept-data-loss`
- **Schema versioning**: Prisma migration files

## Development Patterns

### Code Organization
- **MVC Architecture**: Controllers, Models, Views separation
- **Repository Pattern**: Centralized data access
- **Middleware Pattern**: Cross-cutting concerns
- **Strategy Pattern**: Authentication and integration strategies

### API Design
- **RESTful endpoints**: Consistent URL structure
- **Versioned API**: `/api/v1/` prefix
- **Comprehensive validation**: Request/response schemas
- **Error handling**: Standardized error responses

### Security Practices
- **Input validation**: express-validator schemas
- **SQL injection prevention**: Prisma ORM parameterized queries
- **XSS protection**: Helmet middleware
- **Rate limiting**: Prevent abuse and DoS
- **Environment separation**: Different configs for dev/prod

### Testing Strategy
- **Unit tests**: Model and utility functions
- **Integration tests**: API endpoint testing
- **Mocking**: External service mocking for tests
- **Test data**: Factory patterns for test fixtures

## Operational Considerations

### Monitoring & Observability
- **Structured logging**: Pino with context
- **Error tracking**: Telegram bot integration
- **Performance monitoring**: PostHog analytics
- **Health checks**: API endpoint monitoring

### Scalability
- **Stateless design**: Session storage externalized
- **Database optimization**: Indexed queries
- **Caching strategies**: In-memory caching for frequently accessed data
- **Message queues**: Async processing for heavy operations

### Security & Compliance
- **Data encryption**: Password hashing, secure cookies
- **Access control**: Role-based permissions
- **API security**: Rate limiting, input sanitization
- **Environment isolation**: Production/staging separation