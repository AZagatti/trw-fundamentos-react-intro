import { useState } from "react"

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <button onClick={increment}>Incrementar</button>
      <span>{counter}</span>
      <button onClick={decrement}>Decrementar</button>
    </>
  )
}