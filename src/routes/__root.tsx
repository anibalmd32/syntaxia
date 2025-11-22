import { ProgressProvider } from "@bprogress/react";
import type { QueryClient } from "@tanstack/react-query";
import {
  ClientOnly,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import type { Session, User } from "better-auth/types";
import { ProgressSubscriber } from "@/components/ProgressSubscriber";
import type { TRPCRouter } from "@/integrations/trpc/router";
import { fetchUserSession } from "@/utils/auth-fn";
import appCss from "../styles.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
  trpc: TRPCOptionsProxy<TRPCRouter>;
  auth: {
    user: User | null;
    session: Session | null;
  };
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Toonify",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  beforeLoad: async () => {
    const session = await fetchUserSession();

    return {
      auth: session,
    };
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="toonify" lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        <main className="h-screen w-full bg-base-200 relative overflow-hidden selection:bg-primary selection:text-primary-content">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#5A4FCF]/20 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
          <ProgressProvider color="#18a5f2">
            <ProgressSubscriber>
              <ClientOnly>{children}</ClientOnly>
            </ProgressSubscriber>
          </ProgressProvider>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
