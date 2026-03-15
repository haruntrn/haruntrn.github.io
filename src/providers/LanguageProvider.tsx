import { useState } from "react";
import {
  LanguageContext,
  translations,
  type Language,
  type LanguageProviderProps,
} from "../contexts/LanguageContext";

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = () => {
    setLang((prev: Language) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ t: translations[lang], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
