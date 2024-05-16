/*
  Warnings:

  - You are about to drop the `_TabToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TabToTag" DROP CONSTRAINT "_TabToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_TabToTag" DROP CONSTRAINT "_TabToTag_B_fkey";

-- DropTable
DROP TABLE "_TabToTag";

-- CreateTable
CREATE TABLE "TabTag" (
    "id" TEXT NOT NULL,
    "tab_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "TabTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TabTag_tab_id_tag_id_key" ON "TabTag"("tab_id", "tag_id");

-- AddForeignKey
ALTER TABLE "TabTag" ADD CONSTRAINT "TabTag_tab_id_fkey" FOREIGN KEY ("tab_id") REFERENCES "Tab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TabTag" ADD CONSTRAINT "TabTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
