/*
  Warnings:

  - Changed the type of `analysis_tasks` on the `Analysis` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Analysis" DROP COLUMN "analysis_tasks",
ADD COLUMN     "analysis_tasks" JSONB NOT NULL;
