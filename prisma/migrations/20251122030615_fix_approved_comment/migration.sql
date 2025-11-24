/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ApprovedComment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ApprovedComment" DROP COLUMN "createdAt",
ADD COLUMN     "approvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
