// import { PropsWithChildren } from "react"

import { Counter } from "./counter"

// import { useState } from "react"
// import styles from './App.module.css'
// import './App.css'

// interface TitleProps {
//   title: string
// }

// const Title = (props: PropsWithChildren<TitleProps>) => {
//   return (
//     <>
//       <h1>{props.title}</h1>
//       {props.children}
//     </>
//   )
// }

export const sum = (num: number, num2: number) => num + num2

// function App() {
//   // return <h1>Hello World {sum(2, 2)}</h1>
//   return (
//     <>
//       <Title title="Hello World">
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       </Title>
//     </>
//   )
// }

// const Counter = () => {
//   const [counter, setCounter] = useState(0)

//   const increment = () => {
//     setCounter(counter + 1)
//     console.log(counter)
//   }

//   const decrement = () => {
//     setCounter(counter - 1)
//     console.log(counter)
//   }

//   return (
//     <div style={{
//       backgroundColor: '#333',
//       padding: 16,
//     }}>
//       <button onClick={increment}>Aumentar</button>
//       <span className={styles.text}>{counter}</span>
//       <button onClick={decrement}>Diminuir</button>
//     </div>
//   )
// }

function App() {
  return <Counter />
}

export default App