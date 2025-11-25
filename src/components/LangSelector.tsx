import { useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiGoogletranslate } from "react-icons/si";

export const LangSelect = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.invalidate();
  };

  const langList = [
    {
      code: "es",
      label: "Español",
    },
    {
      code: "en",
      label: "English",
    },
  ];

  return (
    <div className="dropdown dropdown-hover">
      <button className="btn m-1" tabIndex={0} type="button">
        <SiGoogletranslate size={20} />
      </button>
      <ul
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 shadow-sm"
        tabIndex={-1}
      >
        {langList.map((lang) => (
          <li key={lang.code}>
            <button
              className={`btn btn-sm ${i18n.language === lang.code ? "btn-primary font-bold" : ""}`}
              onClick={() => changeLanguage(lang.code)}
              onKeyDown={() => {}}
              type="button"
            >
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
