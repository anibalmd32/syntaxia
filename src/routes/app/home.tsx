import { createFileRoute } from "@tanstack/react-router";
import i18n from "@/lib/i18n";

export const Route = createFileRoute("/app/home")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: `${i18n.t("pages.home.tabTitle")} | Toonify`,
      },
    ],
  }),
});

function RouteComponent() {
  const { auth } = Route.useRouteContext();
  return (
    <div>
      <h1>Welcome {auth?.user?.name}</h1>
    </div>
  );
}
