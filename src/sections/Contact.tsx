import { profile } from '../data/profile'
import { socialLinks } from '../data/social'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { IconLink } from '../components/IconLink'
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
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {emailLink ? (
              <Button href={emailLink.href}>Email {profile.shortName}</Button>
            ) : null}
            {linkedIn ? (
              <IconLink
                link={linkedIn}
                className="border-line bg-surface hover:border-accent rounded-full border"
              />
            ) : null}
            {github ? (
              <IconLink
                link={github}
                className="border-line bg-surface hover:border-accent rounded-full border"
              />
            ) : null}
          </div>
        </InView>
      </Container>
    </section>
  )
}
