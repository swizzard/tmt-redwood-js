ALTER TABLE "Tab" ALTER COLUMN "created_at" SET DEFAULT now();

CREATE OR REPLACE FUNCTION tab_updated_at_trigger() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER tab_updated_at BEFORE UPDATE OR INSERT ON "Tab" FOR EACH ROW EXECUTE FUNCTION tab_updated_at_trigger();
