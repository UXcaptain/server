/*
  Warnings:

  - You are about to drop the column `isTrial` on the `Subscription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "isTrial",
ADD COLUMN     "expires_at" TIMESTAMP(3);
