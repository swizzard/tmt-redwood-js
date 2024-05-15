/*
  Warnings:

  - Added the required column `url` to the `Tab` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tab" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "url" TEXT NOT NULL;
