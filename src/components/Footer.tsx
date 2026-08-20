import { profile } from '../data/profile'
import { socialLinks } from '../data/social'
import { Container } from './Container'
import { IconLink } from './IconLink'

export function Footer() {
  return (
    <footer className="border-line border-t">
      <Container className="flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <IconLink key={link.id} link={link} />
          ))}
          <a
            href={profile.sourceRepoUrl}
            className="text-muted hover:text-accent ml-2 text-sm underline-offset-4 transition-colors hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Source
          </a>
        </div>
      </Container>
    </footer>
  )
}
