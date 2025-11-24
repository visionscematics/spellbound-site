-- CreateTable
CREATE TABLE "ApprovedComment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "approvedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApprovedComment_pkey" PRIMARY KEY ("id")
);
