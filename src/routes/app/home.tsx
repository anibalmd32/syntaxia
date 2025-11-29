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
    <div className="min-h-screen bg-base-200/50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#00C6FF] to-[#5A4FCF] p-8 md:p-12 shadow-xl">
          <div className="relative z-10 text-white">
            <h1 className="text-4xl font-black mb-2 tracking-tight">
              Hola, {auth?.user?.name}
            </h1>
            <p className="text-white/80 text-lg font-medium max-w-xl">
              Bienvenido a tu panel de control. Aquí puedes gestionar tus
              proyectos y ver tus estadísticas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
