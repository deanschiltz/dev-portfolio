import type { ReactNode } from 'react'
import { m } from 'motion/react'
import { cn } from '../utils/cn'

type InViewProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function InView({ children, className, delay = 0 }: InViewProps) {
  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  )
}
