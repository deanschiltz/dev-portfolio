import { experience } from '../data/experience'
import { Container } from '../components/Container'
import { InView } from '../components/InView'
import { SectionHeading } from '../components/SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <Container>
        <InView>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Work history"
          />
        </InView>
        <ol className="md:border-line relative mt-12 space-y-10 md:border-l md:pl-10">
          {experience.map((role) => (
            <li key={role.id} className="relative">
              <InView>
                <span
                  aria-hidden="true"
                  className="bg-accent absolute top-1.5 -left-[2.65rem] hidden h-2.5 w-2.5 rounded-full md:block"
                />
                <p className="text-muted font-mono text-xs tracking-wide uppercase">
                  {role.start} — {role.end}
                </p>
                <h3 className="text-ink mt-2 text-xl font-semibold">
                  {role.position}
                </h3>
                <p className="text-muted mt-1 text-sm">
                  {role.company} · {role.location}
                </p>
                {role.description.length > 0 ? (
                  <div className="text-muted mt-4 space-y-3 text-sm leading-6 sm:text-base">
                    {role.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </InView>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
