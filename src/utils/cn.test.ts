import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('drops false, null, and undefined values', () => {
    expect(cn('a', false, null, undefined, 'c')).toBe('a c')
  })
})
