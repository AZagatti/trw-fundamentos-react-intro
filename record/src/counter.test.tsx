import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from './counter'

describe('<Counter />', () => {
  it('can render with 0', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeTruthy()
  })
  it('can add to Counter', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Incrementar'))
    expect(screen.getByText('1')).toBeTruthy()
  })
  it('can sub to Counter', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Decrementar'))
    expect(screen.getByText('-1')).toBeTruthy()
  })
})