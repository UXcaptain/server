/*
  Warnings:

  - You are about to drop the column `transcription` on the `AnalysisEntry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AnalysisEntry" DROP COLUMN "transcription",
ADD COLUMN     "full_transcript" TEXT,
ADD COLUMN     "transcription_segments" JSONB;

-- CreateIndex
CREATE INDEX "Analysis_owner_company_id_idx" ON "Analysis"("owner_company_id");
