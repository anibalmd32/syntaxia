import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import * as v from "valibot";
import { EmailSchema } from "@/definitions/validationSchemas/EmailSchema";
import { NameSchema } from "@/definitions/validationSchemas/NameSchema";

const signUpSearchSchema = v.object({
  userName: NameSchema,
  userEmail: EmailSchema,
});

export const Route = createFileRoute("/auth/signup-success")({
  component: RouteComponent,
  validateSearch: signUpSearchSchema,
});

function RouteComponent() {
  const { userEmail, userName } = Route.useSearch();

  return (
    <div className="h-screen w-full px-4 z-10 flex flex-col gap-6 justify-center items-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200/50 backdrop-blur-sm z-10">
        <div className="card-body items-center text-center py-10 px-6">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center">
              <Mail className="w-10 h-10 text-[#5A4FCF]" />
            </div>
            <div className="absolute bottom-0 right-0 bg-success text-white rounded-full p-1 border-4 border-base-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          <h1 className="text-2xl font-extrabold text-base-content mb-2">
            ¡Revisa tu correo!
          </h1>

          <p className="text-base-content/70 text-lg">
            Hola{" "}
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00C6FF] to-[#5A4FCF]">
              {userName}
            </span>
            , ya casi terminamos.
          </p>

          <div className="mt-6 mb-4 w-full">
            <div className="bg-base-200/60 border border-base-300 rounded-xl p-4 flex flex-col items-center gap-1 group transition-colors hover:border-[#00C6FF]/30">
              <span className="text-[10px] uppercase tracking-widest text-base-content/40 font-bold">
                Enlace enviado a
              </span>
              <span className="text-base font-semibold text-base-content font-mono break-all">
                {userEmail}
              </span>
            </div>
          </div>

          <p className="text-sm text-base-content/50 mb-8 leading-relaxed">
            Hemos enviado un enlace de confirmación. Si no lo ves, revisa tu
            carpeta de <strong>Spam</strong>.
          </p>

          <div className="w-full border-t border-base-200 pt-6">
            <Link
              className="btn btn-ghost btn-sm gap-2 text-base-content/60 hover:text-primary hover:bg-transparent group"
              to="/auth/signin"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center z-10 opacity-60 hover:opacity-100 transition-opacity">
        <p className="text-xs text-base-content/40">
          ¿No recibiste el correo?{" "}
          <button
            className="text-primary hover:underline font-medium bg-transparent border-none cursor-pointer p-0"
            type="button"
          >
            Reenviar
          </button>
        </p>
      </div>
    </div>
  );
}
