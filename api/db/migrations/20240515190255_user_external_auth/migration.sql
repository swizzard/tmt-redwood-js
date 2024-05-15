/*
  Warnings:

  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `external_auth_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at",
DROP COLUMN "email",
DROP COLUMN "updated_at",
ADD COLUMN     "external_auth_id" TEXT NOT NULL,
ADD COLUMN     "external_auth_provider" TEXT NOT NULL DEFAULT 'auth0';

-- DropTable
DROP TABLE "UserExample";
