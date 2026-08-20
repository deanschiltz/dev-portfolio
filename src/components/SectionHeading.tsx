import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="text-accent font-mono text-xs tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-ink mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-muted mt-4 text-base leading-7 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
