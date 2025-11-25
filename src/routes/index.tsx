import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  beforeLoad: ({ context, location }) => {
    if (context.auth?.session) {
      throw redirect({
        to: "/app/home",
      });
    } else {
      throw redirect({
        to: "/auth/signin",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function App() {
  return (
    <div>
      <h1>Toonify App</h1>
    </div>
  );
}
