import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { constants } from "../../constants.ts";
import { accounts } from "./schemas/accounts.ts";
import { sessions } from "./schemas/sessions.ts";
import { users } from "./schemas/users.ts";
import { verifications } from "./schemas/verifications.ts";

const pool = new Pool({
  connectionString: constants.DATABASE_URL,
});
export const db = drizzle(pool, {
  schema: {
    users,
    sessions,
    accounts,
    verifications,
  },
});
