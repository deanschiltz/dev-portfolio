export interface Profile {
  name: string
  shortName: string
  title: string
  titleLead: string
  titleHighlight: string
  heroGreeting: string
  focus: string
  summary: string
  about: string[]
  location: string
  email: string
  siteUrl: string
  sourceRepoUrl: string
  contactPath: string
  resumePath: string
  headshot: string
  headshotAlt: string
}

export interface SocialLink {
  id: 'github' | 'linkedin' | 'email'
  label: string
  href: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  slug: string
  name: string
  summary: string
  problem: string
  highlights: string[]
  technologies: string[]
  image?: string
  imageAlt?: string
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  start: string
  end: string
  /** LinkedIn role description, one paragraph per line. */
  description: string[]
}

export interface Education {
  id: string
  institution: string
  credential: string
  dates: string
  detail?: string
}
