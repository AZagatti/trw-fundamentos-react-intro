import { describe, it, expect } from 'vitest'
import { sum } from './App'

describe('sum function', () => {
  it('adds 2 + 2 to equal 4', () => {
    const data = 2
    const result = 4

    expect(sum(data, data)).toBe(result)
  })
})