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
import i18n from "@/lib/i18n";
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
  const currentLang = i18n.language;

  return (
    <html data-theme="toonify" lang={currentLang}>
      <head>
        <HeadContent />
      </head>
      <body>
        <main className="min-h-screen w-full bg-base-200 relative selection:bg-primary selection:text-primary-content font-sans text-base-content antialiased">
          {/* Global Background Decorations */}
          <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00C6FF]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#5A4FCF]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse delay-1000" />
          </div>

          <div className="relative z-10">
            <ProgressProvider color="#18a5f2">
              <ProgressSubscriber>
                <ClientOnly>{children}</ClientOnly>
              </ProgressSubscriber>
            </ProgressProvider>
          </div>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
