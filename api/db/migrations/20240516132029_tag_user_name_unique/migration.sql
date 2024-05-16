/*
  Warnings:

  - A unique constraint covering the columns `[name,user_id]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_user_id_key" ON "Tag"("name", "user_id");
