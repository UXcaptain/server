# Context

## Current Work Focus
[Memory Bank: Active] I understand we're building UXCaptain, a video-based user research platform designed for UX and product teams to record, analyze, and extract actionable insights from participant interactions with prototypes and products. The platform currently has a complete Express.js backend API with authentication, billing, analysis management, and video upload capabilities.

## Recent Changes
- **Database Schema**: Implemented comprehensive Prisma schema with User, Company, Analysis, AnalysisEntry models
- **API Development**: Complete REST API with 15+ endpoints covering auth, billing, analysis, and participant management
- **Authentication System**: Passport.js-based local strategy with JWT support and session management
- **Billing Integration**: Stripe integration for subscription management with checkout sessions and customer portal
- **File Storage**: AWS S3 integration for video/audio uploads with presigned URLs
- **Message Queue**: LavinMQ integration for async processing
- **Cron Jobs**: Automated token cleanup and analysis entry status management

## Next Steps
1. **AI Transcription Integration**: Connect to AI services for automated video transcription and analysis
2. **Video Processing Pipeline**: Implement video processing and insight extraction workflows
3. **Participant Recruitment System**: Build participant matching and recruitment functionality
4. **Analytics Dashboard**: Create comprehensive analytics and reporting for researchers
5. **Real-time Features**: Add real-time updates for analysis progress and participant activity
6. **Mobile Optimization**: Enhance mobile device support for participant recordings

## Current Architecture State
The backend is production-ready with Docker containerization, PostgreSQL database, and comprehensive API documentation. The system supports multi-tenant architecture with company-based data isolation and role-based access control.