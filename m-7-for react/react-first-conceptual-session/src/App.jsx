import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products/porducts'

function App() {
 
  const information={
    message:'secret',
    phone:'01777658456'
  }

  return (
    <>
      
      <Products info={information}></Products>
      <h3>React 1st conceptual session</h3>
      
    </>
  )
}

export default App
