/*
  Warnings:

  - You are about to drop the `AnalysisEntries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."AnalysisEntries" DROP CONSTRAINT "AnalysisEntries_analysis_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."AnalysisEntries" DROP CONSTRAINT "AnalysisEntries_user_id_fkey";

-- DropTable
DROP TABLE "public"."AnalysisEntries";

-- CreateTable
CREATE TABLE "AnalysisEntry" (
    "id" TEXT NOT NULL,
    "analysis_id" TEXT NOT NULL,
    "user_id" TEXT,
    "status" "AnalysisEntryCompletionStatus" NOT NULL DEFAULT 'in_progress',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transcription" JSONB,

    CONSTRAINT "AnalysisEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AnalysisEntry_analysis_id_status_idx" ON "AnalysisEntry"("analysis_id", "status");

-- AddForeignKey
ALTER TABLE "AnalysisEntry" ADD CONSTRAINT "AnalysisEntry_analysis_id_fkey" FOREIGN KEY ("analysis_id") REFERENCES "Analysis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisEntry" ADD CONSTRAINT "AnalysisEntry_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "ParticipantProfile"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
