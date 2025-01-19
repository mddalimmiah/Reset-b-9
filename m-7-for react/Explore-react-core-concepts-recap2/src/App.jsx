import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h3>React core concepts recap</h3>
      <ol>
        <li> Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event handler</li>
        <li>State </li>
        <li>Load data --side effect </li>
      </ol>
      <hr/>
      <Posts></Posts>
     
    </>
  )
}

export default App
