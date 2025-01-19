import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './actor'
import Singer from './singer'
import BookStore from './bookStore'

function App() {
  const actors=['Sakib khan', 'Raj', 'Jashim', 'Salman Sha'];

const books=[
  {id:1, name:'Physics', price:100},
  {id:2, name:'Chemistry', price:120},
  {id:3, name:'Biology', price:150},
  {id:4, name:'Data Structure and Algorithom', price:200},
  {id:5, name:'Math', price:300},
]

  const singers=[
    {id:1, name:'Sabina yeasmin', age:50},
    {id:2, name:'Runa Laila', age:60},
    {id:3, name:'Asib Akbar', age:54},
    {id:4, name:'Habib Wahid', age:45},
    {id:5, name:'pritom', age:32},
  ];

  return (
    <>

      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      
    {
      singers.map(singer=> <Singer singer={singer}></Singer>)
    }

      <Actor name={"Bapparaj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task=" Explore React Core concepts"
        isDone={false}></Todo>
      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}


      {/* <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="17000"></Device>
      <Device name="watch" price="1000"></Device>
    <Person></Person>
    <Student grade="7" score="76"></Student>
    <Student grade={12} score={95}></Student> 
   
     <Student></Student>
    <Developer></Developer>  */}
    </>
  )
}
// this is jsx 

function Device(props) {
  // console.log(props)
  return <h2>This is Device:{props.name} price: {props.price}</h2>
}
function Person() {
  const money = 50000;
  const person = {
    name: 'Md. Dalim Miah',
    age: 30,
    profession: 'Web Developer'

  }
  return <h3>Hi ! I am {person.name}. My age is {person.age}. i am a {person.profession}. i have a lots of {money} taka</h3>
}

const { grade, score } = { grade: '7', score: '76' };
function Student({ grade = 1, score }) {
  console.log(grade, score)
  return (
    <div className='student'>
      {/* class lekha jabe na class hocce js er keyword tai className dite hobe */}
      <h2>I am a student</h2>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyles = {
    margin: '20px',
    padding: '20px',
    border: "2px solid purple",
    borderRadius: '20px',
  }
  return (
    <div style={developerStyles}>
      <h5>Devo Devo</h5>
      <p>my coding:</p>
    </div>
  )
}
export default App
