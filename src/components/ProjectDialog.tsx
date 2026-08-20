import { useEffect, useId, useRef } from 'react'
import { AnimatePresence, m } from 'motion/react'
import type { Project } from '../types/portfolio'
import { Button } from './Button'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type ProjectDialogProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) {
      return
    }

    if (project) {
      if (!dialog.open) {
        dialog.showModal()
      }
    } else if (dialog.open) {
      dialog.close()
    }
  }, [project])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) {
      return
    }

    const handleClose = () => onClose()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="border-line bg-canvas text-ink m-auto max-h-[90vh] w-[min(40rem,calc(100%-2rem))] overflow-y-auto border p-0 shadow-[0_24px_80px_var(--shadow)] backdrop:bg-black/60"
    >
      <AnimatePresence>
        {project ? (
          <m.div
            className="p-6 sm:p-8"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id={titleId}
                className="text-2xl font-semibold tracking-tight"
              >
                {project.name}
              </h2>
              <button
                type="button"
                className="text-muted hover:text-ink inline-flex min-h-11 min-w-11 items-center justify-center rounded-md"
                onClick={onClose}
                aria-label="Close project details"
              >
                ×
              </button>
            </div>
            <p className="text-muted mt-4 leading-7">{project.problem}</p>
            <h3 className="text-ink mt-6 text-sm font-semibold tracking-wide uppercase">
              Highlights
            </h3>
            <ul className="text-muted mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border-line text-muted border px-2.5 py-1 font-mono text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt ?? ''}
                className="border-line mt-6 w-full border"
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.repoUrl ? (
                <Button href={project.repoUrl} variant="secondary">
                  GitHub
                </Button>
              ) : null}
              {project.liveUrl ? (
                <Button href={project.liveUrl}>Live demo</Button>
              ) : null}
              {!project.repoUrl && !project.liveUrl ? (
                <p className="text-muted text-sm">
                  Repository and live demo links can be added in
                  `src/data/projects.ts`.
                </p>
              ) : null}
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </dialog>
  )
}
