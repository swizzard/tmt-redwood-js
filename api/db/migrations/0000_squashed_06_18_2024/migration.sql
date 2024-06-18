
Running Prisma CLI...
$ yarn prisma migrate diff --from-empty --to-schema-datamodel ./api/db/schema.prisma --script

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "external_auth_provider" TEXT NOT NULL DEFAULT 'auth0',
    "external_auth_id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tab" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "url" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Tab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TabTag" (
    "id" TEXT NOT NULL,
    "tab_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "TabTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Tab_title_idx" ON "Tab"("title");

-- CreateIndex
CREATE INDEX "Tab_updated_at_idx" ON "Tab"("updated_at");

-- CreateIndex
CREATE INDEX "Tab_created_at_idx" ON "Tab"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_user_id_key" ON "Tag"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "TabTag_tab_id_tag_id_key" ON "TabTag"("tab_id", "tag_id");

-- AddForeignKey
ALTER TABLE "Tab" ADD CONSTRAINT "Tab_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TabTag" ADD CONSTRAINT "TabTag_tab_id_fkey" FOREIGN KEY ("tab_id") REFERENCES "Tab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TabTag" ADD CONSTRAINT "TabTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Triggers etc.
CREATE OR REPLACE FUNCTION tab_updated_at_trigger() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER tab_updated_at BEFORE UPDATE OR INSERT ON "Tab" FOR EACH ROW EXECUTE FUNCTION tab_updated_at_trigger();

