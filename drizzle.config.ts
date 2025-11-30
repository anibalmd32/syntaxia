import { defineConfig } from "drizzle-kit";
import { dbUrl } from "@/db/dbConfig";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schemas",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
