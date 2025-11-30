import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { dbConfig } from "./dbConfig.ts";
import { accounts } from "./schemas/accounts.ts";
import { sessions } from "./schemas/sessions.ts";
import { users } from "./schemas/users.ts";
import { verifications } from "./schemas/verifications.ts";

const pool = new Pool(dbConfig);
export const db = drizzle(pool, {
  schema: {
    users,
    sessions,
    accounts,
    verifications,
  },
});
