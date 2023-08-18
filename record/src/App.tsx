import { PropsWithChildren, useState } from "react"
import styles from './App.module.css'

interface TitleProps {
  title: string
}

const Title = ({ title, children }: PropsWithChildren<TitleProps>) => {
  return (
    <>
      <h1 className={styles.h1}>{title}</h1>
      {children}
    </>
  )
}

export const sum = (num: number, num2: number) => num + num2

interface CounterProps {
  increment(): void
  decrement: () => void
  counter: number
}

const Counter = ({ increment, decrement, counter }: CounterProps) => {
  return (
    <>
      <button onClick={increment}>Incrementar</button>
      <span>{counter}</span>
      <button onClick={decrement}>Decrementar</button>
    </>
  )
}

function App() {
  const [counter, setCounter] = useState(0)

  const [list, setList] = useState([
    {
      id: 0,
      name: 'Zagatti'
    },
    {
      id: 1,
      name: 'André'
    },
  ])

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <Title title="Hello World" />

      <Counter increment={increment} decrement={decrement} counter={counter} />
      <br />
      <Counter increment={increment} decrement={decrement} counter={counter} />
      <br />
      <Counter increment={increment} decrement={decrement} counter={counter} />
      <br />

      {list.map(object => (
        <div key={object.id}>
          <p>{object.name}</p>
          <button onClick={() =>
            setList(state =>
              state.filter(user => user.id !== object.id)
            )
          }>Remover</button>
        </div>
      ))}
    </div>
  )
}

export default App
