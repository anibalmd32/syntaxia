import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ToonifyLogo } from "@/components/ToonifyLogo";
import { SigninForm } from "@/forms/SigninForm";
import i18n from "@/lib/i18n";

export const Route = createFileRoute("/auth/signin")({
  component: RouteComponent,
  head: () => {
    const tabTitle = i18n.t("pages.auth.login.tabTitle");
    return {
      meta: [
        {
          title: `${tabTitle} | Toonify`,
        },
      ],
    };
  },
});

function RouteComponent() {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-full px-4 z-10 flex flex-col gap-6 justify-center items-center">
      <div className="text-center space-y-2">
        <div className="flex justify-center mb-6">
          <ToonifyLogo className="h-16" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-base-content">
          {t("pages.auth.login.title")}
        </h1>
      </div>

      <div className="card bg-base-100 shadow-xl border border-base-200/50 backdrop-blur-sm">
        <div className="card-body pb-8 pt-8">
          <SigninForm />

          <div className="divider divider-accent text-xs text-base-content/30 mt-6 mb-6">
            O
          </div>

          <div className="text-center text-sm">
            <p className="text-base-content/70">
              {t("pages.auth.login.notAccount")}{" "}
              <Link
                className="link link-primary font-semibold hover:text-primary-focus transition-colors no-underline hover:underline"
                to="/auth/signup"
              >
                {t("pages.auth.login.registerLink")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
