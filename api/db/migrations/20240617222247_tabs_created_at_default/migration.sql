/*
  Warnings:

  - Made the column `created_at` on table `Tab` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tab" ALTER COLUMN "created_at" SET NOT NULL;
