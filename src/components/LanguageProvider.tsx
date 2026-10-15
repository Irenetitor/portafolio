"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang, Localized } from "@/data/content";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: Localized) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Keep <html lang="..."> in sync so screen readers use the right language.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (text: Localized) => text[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return context;
}
