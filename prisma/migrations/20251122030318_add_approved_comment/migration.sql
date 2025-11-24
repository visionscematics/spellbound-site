/*
  Warnings:

  - You are about to drop the column `approvedAt` on the `ApprovedComment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ApprovedComment" DROP COLUMN "approvedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
