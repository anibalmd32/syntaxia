import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { auth } from "@/lib/auth";

export const fetchUserSession = createServerFn({
  method: "GET",
}).handler(async () => {
  try {
    const headers = getRequestHeaders();

    const session = await auth.api.getSession({
      headers,
    });

    return session;
  } catch (error) {
    console.error("Error fetching session", error);
    return null;
  }
});
