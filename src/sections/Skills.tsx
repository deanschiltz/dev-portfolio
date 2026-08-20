import { skills } from '../data/skills'
import { Container } from '../components/Container'
import { InView } from '../components/InView'
import { SectionHeading } from '../components/SectionHeading'

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24"
      aria-labelledby="skills-heading"
    >
      <Container>
        <InView>
          <SectionHeading
            id="skills-heading"
            eyebrow="Skills"
            title="Technical toolkit"
          />
        </InView>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <InView key={group.category} delay={index * 0.03}>
              <div>
                <h3 className="text-accent font-mono text-xs tracking-[0.16em] uppercase">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-line bg-surface text-ink border px-3 py-1.5 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  )
}
