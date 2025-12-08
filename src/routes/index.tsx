import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Blocks, ChevronRight, Sparkles, Terminal } from "lucide-react";
import { AppLogo } from "@/components/AppLogo";
import { BRAND_BUTTON_CLASSES } from "@/definitions/stylesConstants/brandStyles";

export const Route = createFileRoute("/")({
  component: LandingPage,
  beforeLoad: ({ context }) => {
    if (context.auth?.session) {
      throw redirect({
        to: "/app/home",
      });
    }
  },
});

function LandingPage() {
  const features = [
    {
      icon: <Sparkles className="w-4 h-4 text-[#00C6FF]" />,
      title: "Ingeniería de Prompts",
      description:
        "Plantillas de alta fidelidad probadas para generar código limpio y resultados predecibles.",
    },
    {
      icon: <Terminal className="w-4 h-4 text-[#5A4FCF]" />,
      title: "Control de Agentes",
      description:
        "Orquesta comandos complejos y define roles específicos para tus asistentes de IA.",
    },
    {
      icon: <Blocks className="w-4 h-4 text-pink-500" />,
      title: "Servidores MCP",
      description:
        "Crea y despliega protocolos de contexto (MCP) en minutos, no en horas.",
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center">
      <nav className="py-2 px-3 md:sticky top-4 z-999 flex items-center justify-between md:rounded-full md:shadow-md shadow-accent/10 animate-fade-in-down backdrop-blur-lg min-w-3xl w-4xl">
        <div className="flex items-center gap-2 transition-all duration-500">
          <AppLogo className="h-8" />
        </div>

        <div className="flex items-center gap-4 transition-all duration-500">
          <Link
            className="text-[12px] hover:text-primary rounded-full px-4 font-semibold"
            to="/auth/signin"
          >
            Entrar
          </Link>
          <Link
            className="btn btn-primary btn-sm rounded-full"
            to="/auth/signup"
          >
            Registrarse
          </Link>
        </div>
      </nav>
      <div className="md:hidden flex justify-center mb-6 transform hover:scale-105 transition-transform duration-300">
        <Link to="/">
          <AppLogo className="h-14 drop-shadow-lg" />
        </Link>
      </div>

      <section className="flex flex-col mt-20 items-center space-y-40">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Crea software <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00C6FF] to-[#5A4FCF]">
                mas inteligente.
              </span>
            </h1>
            <p className="text-xl text-base-content/70 mb-10 leading-relaxed">
              Tu caja de herramientas para aprovechar al máximo el potencial de
              IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
              <Link
                className={`btn btn-lg rounded-2xl ${BRAND_BUTTON_CLASSES} text-lg px-8`}
                to="/auth/signup"
              >
                Comenzar Ahora <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row gap-6 w-full animate-fade-in-up">
          {features.map((feature, index) => (
            <article
              className="group p-6 bg-accent/10 rounded-3xl border border-base-content/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              key={index}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-8 h-8 rounded-2xl bg-base-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-base-content/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
