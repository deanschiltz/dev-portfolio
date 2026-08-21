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
        </div>
      </Container>
    </footer>
  )
}
