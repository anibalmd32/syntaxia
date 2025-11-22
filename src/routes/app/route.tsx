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
    <div>
      <LangSelect />
      <SingOutBnt />
      <Outlet />
    </div>
  );
}
