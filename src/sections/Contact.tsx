import { profile } from '../data/profile'
import { socialLinks } from '../data/social'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { InView } from '../components/InView'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  const emailLink = socialLinks.find((link) => link.id === 'email')
  const linkedIn = socialLinks.find((link) => link.id === 'linkedin')
  const github = socialLinks.find((link) => link.id === 'github')

  return (
    <section
      id="contact"
      className="py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <Container>
        <InView>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let’s talk"
            description="The fastest path is email. LinkedIn and GitHub are linked below if you prefer those."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {emailLink ? (
              <Button href={emailLink.href}>Email {profile.shortName}</Button>
            ) : null}
            {linkedIn ? (
              <Button href={linkedIn.href} variant="secondary">
                LinkedIn
              </Button>
            ) : null}
            {github ? (
              <Button href={github.href} variant="secondary">
                GitHub
              </Button>
            ) : null}
          </div>
        </InView>
      </Container>
    </section>
  )
}
