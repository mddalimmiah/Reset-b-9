import { useState } from 'react'
import './App.css'
import Post from './posts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h3>React Core Concepts Recap</h3>
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
