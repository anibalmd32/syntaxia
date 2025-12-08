import { createFileRoute } from "@tanstack/react-router";
import { itn } from "@/lib/i18n";

export const Route = createFileRoute("/app/home")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: `${itn.t("pages.home.tabTitle")} | Syntaxia`,
      },
    ],
  }),
});

function RouteComponent() {
  const { auth } = Route.useRouteContext();

  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12 shadow-xl">
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-black mb-2 tracking-tight">
              {auth?.user?.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
