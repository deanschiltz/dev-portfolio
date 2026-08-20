import type { Project } from '../types/portfolio'

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="border-line bg-surface hover:border-accent flex h-full flex-col border p-6 transition-transform duration-200 hover:-translate-y-1">
      <h3 className="text-ink text-xl font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="text-muted mt-3 flex-1 text-sm leading-6">
        {project.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <li
            key={tech}
            className="text-accent font-mono text-xs tracking-wide uppercase"
          >
            {tech}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="text-ink hover:text-accent mt-6 inline-flex min-h-11 items-center self-start text-sm font-medium underline-offset-4 hover:underline"
        onClick={() => onOpen(project)}
      >
        View details
        <span className="sr-only"> for {project.name}</span>
      </button>
    </article>
  )
}
