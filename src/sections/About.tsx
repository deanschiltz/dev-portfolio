import { profile } from '../data/profile'
import { Container } from '../components/Container'
import { InView } from '../components/InView'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <Container>
        <InView>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Professional summary"
          />
          <div className="text-muted mt-8 max-w-3xl space-y-5 text-base leading-7 sm:text-lg sm:leading-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </InView>
      </Container>
    </section>
  )
}
