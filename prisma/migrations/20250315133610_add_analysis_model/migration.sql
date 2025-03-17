-- CreateTable
CREATE TABLE "Analysis" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "analysis_name" TEXT NOT NULL,
    "analysis_tasks" TEXT[],
    "analysis_status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "max_number_of_participants" INTEGER NOT NULL,

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Analysis_id_owner_id_idx" ON "Analysis"("id", "owner_id");

-- AddForeignKey
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
