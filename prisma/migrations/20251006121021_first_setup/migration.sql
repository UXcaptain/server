-- CreateEnum
CREATE TYPE "Genders" AS ENUM ('male', 'female', 'prefer_not_to_say');

-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('customer', 'admin', 'participant');

-- CreateEnum
CREATE TYPE "AnalysisDevice" AS ENUM ('computer', 'mobile', 'tablet', 'other');

-- CreateEnum
CREATE TYPE "AnalysisStatus" AS ENUM ('draft', 'published', 'completed');

-- CreateEnum
CREATE TYPE "AnalysisEntryCompletionStatus" AS ENUM ('in_progress', 'cancelled', 'submitted', 'accepted', 'rejected');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" TIMESTAMP(3),
    "company_id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "stripe_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipantProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "last_name" TEXT,
    "age" TEXT,
    "gender" "Genders",
    "invited_by" TEXT,
    "country" TEXT,
    "devices" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ParticipantProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerProfile" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT,
    "position" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetTokens" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "token_expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PasswordResetTokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "isTrial" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Analysis" (
    "id" TEXT NOT NULL,
    "owner_company_id" TEXT NOT NULL,
    "device" "AnalysisDevice" NOT NULL,
    "name" TEXT NOT NULL,
    "scenario" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "tasks" JSONB NOT NULL,
    "url" TEXT NOT NULL,
    "status" "AnalysisStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "max_number_of_participants" INTEGER NOT NULL,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalysisEntries" (
    "id" TEXT NOT NULL,
    "analysis_id" TEXT NOT NULL,
    "user_id" TEXT,
    "status" "AnalysisEntryCompletionStatus" NOT NULL DEFAULT 'in_progress',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisEntries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_stripe_id_key" ON "Company"("stripe_id");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantProfile_user_id_key" ON "ParticipantProfile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerProfile_user_id_key" ON "CustomerProfile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetTokens_id_key" ON "PasswordResetTokens"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_id_key" ON "Subscription"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_company_id_key" ON "Subscription"("company_id");

-- CreateIndex
CREATE INDEX "AnalysisEntries_analysis_id_status_idx" ON "AnalysisEntries"("analysis_id", "status");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantProfile" ADD CONSTRAINT "ParticipantProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerProfile" ADD CONSTRAINT "CustomerProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetTokens" ADD CONSTRAINT "PasswordResetTokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_owner_company_id_fkey" FOREIGN KEY ("owner_company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisEntries" ADD CONSTRAINT "AnalysisEntries_analysis_id_fkey" FOREIGN KEY ("analysis_id") REFERENCES "Analysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisEntries" ADD CONSTRAINT "AnalysisEntries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "ParticipantProfile"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
