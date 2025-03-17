/*
  Warnings:

  - Added the required column `analysis_url` to the `Analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analysis" ADD COLUMN     "analysis_url" TEXT NOT NULL;
