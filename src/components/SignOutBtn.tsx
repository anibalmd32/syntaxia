import { useRouter } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export const SingOutBnt = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.invalidate();
        },
        onError: ({ error }) => {
          console.log("Error al cerrar session: ", error);
        },
      },
    });
  };

  return (
    <button
      className="btn btn-circle btn-error"
      onClick={handleSignOut}
      type="button"
    >
      <LogOut />
    </button>
  );
};
