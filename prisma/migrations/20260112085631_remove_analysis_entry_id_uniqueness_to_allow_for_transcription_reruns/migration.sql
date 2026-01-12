-- DropIndex
DROP INDEX "TranscriptionJob_analysis_entry_id_key";

-- CreateIndex
CREATE INDEX "TranscriptionJob_status_idx" ON "TranscriptionJob"("status");
