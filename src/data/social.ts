import { profile } from './profile'
import type { SocialLink } from '../types/portfolio'

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/deanschiltz',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dean-schiltz',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
  },
]
