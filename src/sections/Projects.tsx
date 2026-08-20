import { useState } from 'react'
import { projects } from '../data/projects'
import { Container } from '../components/Container'
import { InView } from '../components/InView'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDialog } from '../components/ProjectDialog'
import { SectionHeading } from '../components/SectionHeading'
import type { Project } from '../types/portfolio'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="py-20 sm:py-24"
      aria-labelledby="projects-heading"
    >
      <Container>
        <InView>
          <SectionHeading
            id="projects-heading"
            eyebrow="Projects"
            title="Selected work"
            description="Each card is driven by src/data/projects.ts. Add an object to add a project."
          />
        </InView>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <InView key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} onOpen={setActive} />
            </InView>
          ))}
        </div>
      </Container>
      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </section>
  )
}
