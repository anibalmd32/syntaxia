import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { LangSelect } from "@/components/LangSelector";

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ context }) => {
    if (context.auth?.session) {
      throw redirect({
        to: "/app/home",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LangSelect />
      <Outlet />

      <div className="text-center">
        <p className="text-xs text-base-content/40">
          © {new Date().getFullYear()} Toonify Inc.
        </p>
      </div>
    </div>
  );
}
