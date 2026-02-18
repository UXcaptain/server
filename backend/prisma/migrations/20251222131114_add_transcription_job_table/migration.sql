-- CreateEnum
CREATE TYPE "TranscriptionJobStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "TranscriptionJob" (
    "id" SERIAL NOT NULL,
    "analysis_entry_id" TEXT NOT NULL,
    "status" "TranscriptionJobStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "language_code" TEXT NOT NULL,

    CONSTRAINT "TranscriptionJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TranscriptionJob_id_key" ON "TranscriptionJob"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TranscriptionJob_analysis_entry_id_key" ON "TranscriptionJob"("analysis_entry_id");

-- AddForeignKey
ALTER TABLE "TranscriptionJob" ADD CONSTRAINT "TranscriptionJob_analysis_entry_id_fkey" FOREIGN KEY ("analysis_entry_id") REFERENCES "AnalysisEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
