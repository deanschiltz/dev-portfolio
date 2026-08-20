import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils/cn'
import { isExternalHref } from '../utils/links'

const variants = {
  primary: 'bg-accent text-on-accent hover:bg-accent-strong',
  secondary:
    'border border-line bg-transparent text-ink hover:border-accent hover:text-accent',
  ghost: 'text-ink hover:text-accent',
} as const

type Variant = keyof typeof variants

type CommonProps = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps & {
  href: string
  download?: boolean | string
  newTab?: boolean
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
}

export function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200',
    variants[variant],
    className,
  )

  if ('href' in props && props.href) {
    const { href, download, newTab, onClick } = props
    const external = isExternalHref(href) || newTab

    return (
      <a
        className={classes}
        href={href}
        download={download}
        onClick={onClick}
        {...(external
          ? { target: '_blank', rel: 'noreferrer noopener' }
          : undefined)}
      >
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton

  return (
    <button
      type={buttonProps.type ?? 'button'}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
