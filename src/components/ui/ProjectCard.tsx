import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border-2 border-dashed bg-surface p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02]">
      {project.imageUrl ? <img className="mb-5 aspect-video w-full rounded-md object-cover" src={project.imageUrl} alt={project.imageAlt ?? project.title} /> : null}
      <h3 className="text-xl font-bold text-ink">{project.title}</h3>
      <p className="mt-3 leading-7 text-muted">{project.description}</p>
      {project.technologies?.length ? (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologias de ${project.title}`}>
          {project.technologies.map((technology) => <li className="rounded-full bg-canvas px-3 py-1 text-sm text-muted" key={technology}>{technology}</li>)}
        </ul>
      ) : null}
      {project.demoUrl || project.codeUrl ? (
        <div className="mt-auto flex flex-wrap gap-4 pt-6">
          {project.demoUrl ? <a className="font-semibold text-accent-strong underline underline-offset-4" href={project.demoUrl} target="_blank" rel="noreferrer">Demonstração</a> : null}
          {project.codeUrl ? <a className="font-semibold text-accent-strong underline underline-offset-4" href={project.codeUrl} target="_blank" rel="noreferrer">Código</a> : null}
        </div>
      ) : null}
    </article>
  );
}

export default ProjectCard;