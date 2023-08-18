import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from './counter'

describe('<Counter />', () => {
  it('can add to Counter', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeTruthy()
    fireEvent.click(screen.getByText('Aumentar'))
    expect(screen.getByText('1')).toBeTruthy()
  })
  it('can sub to Counter', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeTruthy()
    fireEvent.click(screen.getByText(/diminuir/i))
    expect(screen.getByText('-1')).toBeTruthy()
  })
})


