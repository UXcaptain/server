/*
  Warnings:

  - You are about to drop the column `age` on the `ParticipantProfile` table. All the data in the column will be lost.
  - You are about to drop the column `devices` on the `ParticipantProfile` table. All the data in the column will be lost.
  - You are about to drop the column `invited_by` on the `ParticipantProfile` table. All the data in the column will be lost.
  - Added the required column `recruitment_type` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `device` on the `Analysis` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('no_education', 'primary_education', 'secondary_education', 'university_degree', 'masters_thesis');

-- CreateEnum
CREATE TYPE "ParentalStatus" AS ENUM ('yes_children', 'no_children');

-- CreateEnum
CREATE TYPE "TechnicalProficiency" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "RecruitmentType" AS ENUM ('user_provided', 'panel_provided');

-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('COMPUTER', 'MOBILE', 'TABLET');

-- AlterTable
ALTER TABLE "Analysis" ADD COLUMN     "demographic_filters" JSONB,
ADD COLUMN     "recruitment_type" "RecruitmentType" NOT NULL,
DROP COLUMN "device",
ADD COLUMN     "device" "DeviceType" NOT NULL;

-- AlterTable
ALTER TABLE "AnalysisEntry" ADD COLUMN     "ratingsId" INTEGER;

-- AlterTable
ALTER TABLE "ParticipantProfile" DROP COLUMN "age",
DROP COLUMN "devices",
DROP COLUMN "invited_by",
ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "available_devices" "DeviceType"[] DEFAULT ARRAY['COMPUTER', 'MOBILE']::"DeviceType"[],
ADD COLUMN     "birth_date" TIMESTAMP(3),
ADD COLUMN     "education_level" "EducationLevel",
ADD COLUMN     "nif" TEXT,
ADD COLUMN     "parental_status" "ParentalStatus",
ADD COLUMN     "payment_address" TEXT,
ADD COLUMN     "technical_proficiency" "TechnicalProficiency",
ADD COLUMN     "yearly_income" INTEGER;

-- DropEnum
DROP TYPE "AnalysisDevice";

-- CreateTable
CREATE TABLE "ParticipantRating" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "ParticipantRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantRating_user_id_key" ON "ParticipantRating"("user_id");

-- AddForeignKey
ALTER TABLE "ParticipantRating" ADD CONSTRAINT "ParticipantRating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "ParticipantProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisEntry" ADD CONSTRAINT "AnalysisEntry_ratingsId_fkey" FOREIGN KEY ("ratingsId") REFERENCES "ParticipantRating"("id") ON DELETE SET NULL ON UPDATE CASCADE;
