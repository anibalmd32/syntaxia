import { defineConfig } from "drizzle-kit";
import { constants } from "./constants";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schemas",
  dialect: "postgresql",
  dbCredentials: {
    url: constants.DATABASE_URL,
  },
});
