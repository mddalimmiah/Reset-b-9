import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
// const watches=[
//   {id:1, name:'watch', price:200},
//   {id:2, name:'samSu watch', price:1200},
//   {id:3, name:'Rolax watch', price:150000},
//   {id:4, name:'MI watch', price:15000},
//   {id:5, name:'Xoumi Watch', price:20000},
// ]

// const watches=[
//   { id: 1, name: "Apple Watch Series 8", price: 399 },
//   { id: 2, name: "Samsung Galaxy Watch 6", price: 299 },
//   { id: 3, name: "Fitbit Versa 4", price: 199 },
//   { id: 4, name: "Garmin Venu 2", price: 349 },
//   { id: 5, name: "Amazfit GTR 4", price: 179 }
// ]

const [watches, setWatches] =useState([]);


// useEffect( () =>{
//   fetch('watches.json')
//   .then(res => res.json())
//   .then( data => setWatches(data))
// },[])
useEffect( () =>{
  fetch('https://raw.githubusercontent.com/mddalimmiah/watches-data/refs/heads/main/watches.json')
  .then(res => res.json())
  .then( data => setWatches(data))
},[])

  return (
    <>
      
      <h1>React explore es6</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
