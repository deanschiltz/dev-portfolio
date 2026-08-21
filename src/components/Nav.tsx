import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { navItems } from '../data/nav'
import { profile } from '../data/profile'
import { Button } from './Button'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '../utils/cn'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const menuTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const closeMenu = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  const getNavOffset = useCallback(() => {
    const bar = headerRef.current?.querySelector<HTMLElement>('[data-nav-bar]')
    return bar?.offsetHeight ?? 64
  }, [])

  const scrollToSection = useCallback(
    (href: string) => {
      const targetId = href.startsWith('#') ? href.slice(1) : href
      const target = document.getElementById(targetId)
      if (!target) {
        return
      }

      const top =
        target.getBoundingClientRect().top + window.scrollY - getNavOffset()

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
      window.history.pushState(null, '', href)
    },
    [getNavOffset, prefersReducedMotion],
  )

  const navigateToSection = useCallback(
    (href: string) => {
      closeMenu()
      menuButtonRef.current?.focus()
      window.requestAnimationFrame(() => scrollToSection(href))
    },
    [closeMenu, scrollToSection],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !headerRef.current) {
        return
      }

      const focusable = [
        ...headerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ].filter((element) => element.offsetParent !== null)

      if (focusable.length === 0) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, closeMenu])

  const motionOff = prefersReducedMotion

  return (
    <header
      ref={headerRef}
      className={cn(
        'sticky top-0 z-50 border-b border-transparent backdrop-blur-md transition-colors duration-200',
        scrolled && 'border-line bg-[var(--nav)]',
      )}
    >
      <Container
        data-nav-bar
        className="relative z-20 flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#top"
          className="text-ink text-sm font-semibold tracking-tight"
          onClick={(event) => {
            if (window.matchMedia('(max-width: 767px)').matches && open) {
              event.preventDefault()
              navigateToSection('#top')
            }
          }}
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-muted hover:text-ink rounded-md px-3 py-2 text-sm transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <Button href={profile.resumePath} variant="secondary" className="ml-2">
            Ask for Resume
          </Button>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="border-line relative z-20 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={cn(
                  'bg-ink block h-0.5 w-5 transition-transform duration-200',
                  open && 'translate-y-2 rotate-45',
                )}
              />
              <span
                className={cn(
                  'bg-ink block h-0.5 w-5 transition-opacity duration-200',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'bg-ink block h-0.5 w-5 transition-transform duration-200',
                  open && '-translate-y-2 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <>
            <m.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-10 bg-black/25 md:hidden"
              initial={motionOff ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={motionOff ? { duration: 0 } : menuTransition}
              onClick={closeMenu}
            />
            <m.div
              id={menuId}
              className="border-line bg-canvas absolute inset-x-0 top-full z-10 origin-top border-b shadow-[0_12px_32px_rgba(0,0,0,0.12)] md:hidden"
              initial={
                motionOff ? false : { opacity: 0, y: -12, scaleY: 0.96 }
              }
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={
                motionOff
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, scaleY: 0.96 }
              }
              transition={motionOff ? { duration: 0 } : menuTransition}
            >
              <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-ink min-h-11 py-3 text-base"
                    onClick={(event) => {
                      event.preventDefault()
                      navigateToSection(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  href={profile.resumePath}
                  variant="secondary"
                  className="mt-2"
                  onClick={closeMenu}
                >
                  Ask for Resume
                </Button>
              </nav>
            </m.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
