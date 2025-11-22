import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import type { Session, User } from "better-auth/types";
import * as TanstackQuery from "./integrations/tanstack-query/root-provider";
import "@/lib/i18n";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

interface RouterArgs {
  auth: {
    user: User | null;
    session: Session | null;
  };
}

// Create a new router instance
export const getRouter = (args?: RouterArgs) => {
  const rqContext = TanstackQuery.getContext();
  const initialAuth = args?.auth || {
    user: null,
    session: null,
  };

  const router = createRouter({
    routeTree,
    context: {
      ...rqContext,
      auth: initialAuth,
    },
    defaultPreload: "intent",
    defaultNotFoundComponent: () => <div>Not found</div>,
    Wrap: (props: { children: React.ReactNode }) => {
      return (
        <TanstackQuery.Provider {...rqContext}>
          {props.children}
        </TanstackQuery.Provider>
      );
    },
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient: rqContext.queryClient,
  });

  return router;
};
