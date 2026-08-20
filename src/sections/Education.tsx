import { education } from '../data/education'
import { Container } from '../components/Container'
import { InView } from '../components/InView'
import { SectionHeading } from '../components/SectionHeading'

export function Education() {
  if (education.length === 0) {
    return null
  }

  return (
    <section
      id="education"
      className="py-16 sm:py-20"
      aria-labelledby="education-heading"
    >
      <Container>
        <InView>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic background"
          />
          <ul className="mt-8 max-w-2xl space-y-5">
            {education.map((item) => (
              <li key={item.id}>
                <p className="text-ink font-medium">{item.credential}</p>
                <p className="text-muted text-sm">
                  {item.institution} · {item.dates}
                </p>
                {item.detail ? (
                  <p className="text-muted mt-1 text-sm">{item.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </InView>
      </Container>
    </section>
  )
}
