"use client";

import { profile, ui } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="header">
      <nav className="container nav" aria-label="Main">
        <a href="#top" className="logo">{profile.name}</a>
        <ul className="nav-links">
          <li><a href="#about">{t(ui.nav.about)}</a></li>
          <li><a href="#projects">{t(ui.nav.projects)}</a></li>
          <li><a href="#skills">{t(ui.nav.skills)}</a></li>
          <li><a href="#education">{t(ui.nav.education)}</a></li>
          <li><a href="#contact">{t(ui.nav.contact)}</a></li>
        </ul>
        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </nav>
    </header>
  );
}
