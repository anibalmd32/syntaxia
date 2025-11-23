import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { LangSelect } from "@/components/LangSelector";
import { SingOutBnt } from "@/components/SignOutBtn";

export const Route = createFileRoute("/app")({
  beforeLoad: ({ context }) => {
    if (!context.auth?.session) {
      throw redirect({
        to: "/auth/signin",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <LangSelect />
        <SingOutBnt />
      </div>
      <Outlet />
    </div>
  );
}
