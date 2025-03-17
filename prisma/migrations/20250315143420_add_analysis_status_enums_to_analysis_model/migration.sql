/*
  Warnings:

  - The `analysis_status` column on the `Analysis` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "analysisStatus" AS ENUM ('draft', 'in_progress', 'completed');

-- AlterTable
ALTER TABLE "Analysis" DROP COLUMN "analysis_status",
ADD COLUMN     "analysis_status" "analysisStatus" NOT NULL DEFAULT 'draft';
