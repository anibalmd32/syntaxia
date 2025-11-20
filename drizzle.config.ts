import { defineConfig } from "drizzle-kit";
import { constants } from "./constants";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: constants.DATABASE_URL,
  },
});
