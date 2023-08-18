import { describe, it, expect } from 'vitest'
import { sum } from './App'

describe('sum function', () => {
  it('add 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
