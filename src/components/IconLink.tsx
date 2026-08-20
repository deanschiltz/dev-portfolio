import { isExternalHref } from '../utils/links'
import { cn } from '../utils/cn'
import type { SocialLink } from '../types/portfolio'

type IconLinkProps = {
  link: SocialLink
  className?: string
}

export function IconLink({ link, className }: IconLinkProps) {
  const external = isExternalHref(link.href)

  return (
    <a
      href={link.href}
      className={cn(
        'text-muted hover:text-accent inline-flex min-h-11 min-w-11 items-center justify-center rounded-md transition-colors duration-200',
        className,
      )}
      aria-label={link.label}
      {...(external
        ? { target: '_blank', rel: 'noreferrer noopener' }
        : undefined)}
    >
      {link.id === 'github' ? <GitHubIcon /> : null}
      {link.id === 'linkedin' ? <LinkedInIcon /> : null}
      {link.id === 'email' ? <MailIcon /> : null}
    </a>
  )
}

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M6.94 21H3.75V9.25h3.19V21ZM5.34 7.68A1.85 1.85 0 1 1 5.35 4a1.85 1.85 0 0 1-.01 3.68ZM21 21h-3.18v-5.73c0-1.37-.03-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.02V21H10.54V9.25h3.05v1.6h.04c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.81 2.12 3.81 4.88V21Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}
