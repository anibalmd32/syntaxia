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
        className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm flex flex-col gap-2"
        tabIndex={-1}
      >
        {langList.map((lang) => (
          <li
            className={`hover:bg-primary cursor-pointer px-2 rounded-sm ${i18n.language === lang.code ? "bg-primary font-bold" : ""}`}
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            onKeyDown={() => {}}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
