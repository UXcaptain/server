-- Add acquisition data fields to User table
ALTER TABLE "User" ADD COLUMN "utm_source" TEXT;
ALTER TABLE "User" ADD COLUMN "utm_medium" TEXT;
ALTER TABLE "User" ADD COLUMN "utm_campaign" TEXT;
ALTER TABLE "User" ADD COLUMN "utm_content" TEXT;
ALTER TABLE "User" ADD COLUMN "utm_term" TEXT;
ALTER TABLE "User" ADD COLUMN "gclid" TEXT;
ALTER TABLE "User" ADD COLUMN "fbclid" TEXT;
