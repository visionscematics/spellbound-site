/*
  Warnings:

  - Made the column `projectId` on table `ApprovedComment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `projectId` on table `PendingComment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ApprovedComment" ALTER COLUMN "projectId" SET NOT NULL;

-- AlterTable
ALTER TABLE "PendingComment" ALTER COLUMN "projectId" SET NOT NULL;
