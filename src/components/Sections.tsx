"use client";

import { education, profile, projects, skills, ui } from "@/data/content";
import { useLanguage } from "./LanguageProvider";
import ProjectCard from "./ProjectCard";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="hero container">
      <p className="eyebrow">{t(profile.location)}</p>
      <h1>
        {profile.name}
        <span className="role">{t(profile.role)}</span>
      </h1>
      <p className="lead">{t(ui.heroIntro)}</p>
      <div className="card-links">
        <a href="#projects" className="button">{t(ui.seeProjects)}</a>
        {profile.cvUrl && (
          <a href={profile.cvUrl} className="button button-outline" download>
            {t(ui.downloadCv)}
          </a>
        )}
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section container">
      <h2>{t(ui.aboutTitle)}</h2>
      <p className="prose">{t(ui.about)}</p>
    </section>
  );
}

export function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="section container">
      <h2>{t(ui.projectsTitle)}</h2>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="section container">
      <h2>{t(ui.skillsTitle)}</h2>
      <div className="skills">
        {skills.map((group) => (
          <div key={group.group.en}>
            <h3>{t(group.group)}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  const { t } = useLanguage();
  return (
    <section id="education" className="section container">
      <h2>{t(ui.educationTitle)}</h2>
      <ul className="timeline">
        {education.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.school} · {t(item.detail)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section container">
      <h2>{t(ui.contactTitle)}</h2>
      <p className="prose">{t(ui.contactText)}</p>
      <ul className="contact-links">
        {profile.email && <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>}
        {profile.linkedin && <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
        <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </section>
  );
}
