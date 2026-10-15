"use client";

import Image from "next/image";
import { ui, type Project } from "@/data/content";
import { useLanguage } from "./LanguageProvider";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article className="card">
      {project.image && (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          width={1200}
          height={750}
          className="card-image"
        />
      )}
      <div className="card-body">
        <h3>
          {project.name}
          {project.status && <span className="badge">{t(project.status)}</span>}
        </h3>
        <dl>
          <dt>{t(ui.problem)}</dt>
          <dd>{t(project.problem)}</dd>
          <dt>{t(ui.whatIDid)}</dt>
          <dd>{t(project.whatIDid)}</dd>
          <dt>{t(ui.learnings)}</dt>
          <dd>{t(project.learnings)}</dd>
          <dt>{t(ui.nextSteps)}</dt>
          <dd>{t(project.nextSteps)}</dd>
        </dl>
        <ul className="tags" aria-label="Stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="card-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="button">
              {t(ui.demo)}
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="button button-outline">
              {t(ui.repo)}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
