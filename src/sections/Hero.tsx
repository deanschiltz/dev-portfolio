import { m } from 'motion/react'
import { profile } from '../data/profile'
import { socialLinks } from '../data/social'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { IconLink } from '../components/IconLink'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-line relative overflow-hidden border-b"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_55%)]"
      />

      <Container className="relative grid items-end gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:gap-8 lg:py-20 xl:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] xl:gap-12">
        <div className="order-2 pb-2 lg:order-1 lg:pb-10">
          <m.p
            className="text-muted text-sm font-medium sm:text-base"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {profile.heroGreeting}
          </m.p>

          <m.h1
            id="hero-heading"
            className="text-ink mt-4 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-[3.35rem] xl:text-6xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: prefersReducedMotion ? 0 : 0.05,
            }}
          >
            {profile.titleLead}{' '}
            <span className="bg-accent text-on-accent mt-2 inline-block rounded-md px-3 py-1.5 shadow-[0_10px_30px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
              {profile.titleHighlight}
            </span>
          </m.h1>

          <m.p
            className="text-muted mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: prefersReducedMotion ? 0 : 0.1,
            }}
          >
            {profile.focus} · {profile.summary}
          </m.p>

          <m.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: prefersReducedMotion ? 0 : 0.15,
            }}
          >
            <Button href="#contact">Contact Me</Button>
            <Button href={profile.resumePath} variant="secondary" newTab>
              Download Resume
            </Button>
            <Button href="#projects" variant="ghost">
              View Projects
            </Button>
          </m.div>

          <m.div
            className="mt-6 flex items-center gap-1"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            {socialLinks.map((link) => (
              <IconLink
                key={link.id}
                link={link}
                className="border-line bg-surface hover:border-accent rounded-full border"
              />
            ))}
          </m.div>
        </div>

        <m.div
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none lg:justify-self-end"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.08 }}
        >
          <div className="relative isolate mx-auto aspect-[4/5] w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
            <div
              aria-hidden="true"
              className="bg-accent absolute right-[14%] bottom-[8%] left-[22%] z-0 h-[52%] skew-x-[-10deg] rounded-sm"
            />

            <img
              src={profile.headshot}
              alt={profile.headshotAlt}
              width={533}
              height={999}
              fetchPriority="high"
              decoding="async"
              className="relative z-10 mx-auto h-full w-auto max-w-[90%] object-contain object-bottom drop-shadow-[0_18px_36px_rgba(0,0,0,0.2)]"
            />
          </div>
        </m.div>
      </Container>
    </section>
  )
}
