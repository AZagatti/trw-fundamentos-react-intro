import { useEffect, useState } from "react"
import styles from './App.module.css'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    console.log(counter)
  }, [counter])

  return (
    <div style={{
      backgroundColor: '#333',
      padding: 16,
    }}>
      <button onClick={increment}>Aumentar</button>
      <span className={styles.text}>{counter}</span>
      <button onClick={decrement}>Diminuir</button>
    </div>
  )
}