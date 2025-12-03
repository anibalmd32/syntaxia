import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronRight, LayoutTemplate, Rocket, Workflow } from "lucide-react";
import { useId } from "react";
import { AppLogo } from "@/components/AppLogo";
import { BgAnimatedGradient } from "@/components/BgAnimatedGradient";
import { BRAND_BUTTON_CLASSES } from "@/definitions/stylesConstants/brandStyles";
import { useScrollDetection } from "@/hooks/useScrollDetection";

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
  const isScrolled = useScrollDetection(50);
  const featuresSectionId = useId();

  const features = [
    {
      title: "No empieces desde cero",
      desc: "No pierdas meses construyendo lo básico. Syntaxia te entrega una base profesional lista con todo lo que tu negocio necesita para facturar desde el día uno.",
      icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    },
    {
      title: "Tu CTO Virtual",
      desc: "Olvídate de contratar expertos para configurar servidores o bases de datos. Nuestro agente conecta todas las piezas técnicas por ti automáticamente.",
      icon: <Workflow className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Tu Proyecto es Tuyo",
      desc: "Sin ataduras. A diferencia de otras plataformas, aquí el código es tuyo. Puedes descargarlo, llevarlo a tu ordenador y crecer sin límites.",
      icon: <Rocket className="w-8 h-8 text-accent" />,
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 font-sans text-base-content overflow-x-hidden">
      {/* --- Navbar Animado --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent ${
          isScrolled
            ? "bg-base-100/80 backdrop-blur-lg shadow-lg border-base-content/10 py-2"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Slide-in Animation */}
          <div
            className={`flex items-center gap-2 transition-all duration-500 ${
              isScrolled
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10 pointer-events-none"
            }`}
          >
            <AppLogo className="h-8" />
          </div>

          <div
            className={`flex items-center gap-4 transition-all duration-500 ${
              isScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Link
              className="btn btn-primary btn-sm rounded-xl px-6 shadow-lg shadow-primary/30"
              to="/auth/signin"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <BgAnimatedGradient />

        <div className="container mx-auto px-4 text-center z-10">
          <div
            className={`transition-all duration-700 ${isScrolled ? "opacity-0 scale-90 blur-sm" : "opacity-100 scale-100"}`}
          >
            <div className="flex justify-center mb-8 animate-fade-in-down">
              <AppLogo className="h-24 md:h-32 drop-shadow-2xl" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              La forma más inteligente <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00C6FF] to-[#5A4FCF]">
                de crear software.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100">
              Transforma tu idea en un
              <span className="font-semibold text-base-content">
                {" "}
                Negocio Real en Minutos
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
              <Link
                className={`btn btn-lg rounded-2xl ${BRAND_BUTTON_CLASSES} text-lg px-8`}
                to="/auth/signup"
              >
                Crear mi Aplicación Gratis <ChevronRight className="w-6 h-6" />
              </Link>
              <a
                className="btn btn-lg btn-ghost rounded-2xl border-2 border-base-content/10 hover:border-base-content/30 text-base-content/70"
                href={`#${featuresSectionId}`}
              >
                ¿Cómo funciona?
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100 animate-bounce"}`}
        >
          <div className="w-6 h-10 border-2 border-base-content/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-base-content/50 rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-24 bg-base-200/50 relative" id={featuresSectionId}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tu ventaja competitiva
            </h2>
            <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
              Syntaxia combina la velocidad de la IA con la seguridad que tu
              empresa necesita para escalar.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
            {features.map((feature, idx) => (
              <div
                className="card bg-base-100 border border-base-200 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
                key={feature.title}
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="card-body">
                  <div className="p-4 bg-base-200 w-fit rounded-2xl mb-6 group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed text-lg">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
