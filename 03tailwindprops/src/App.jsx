import React from 'react'
import './App.css'
import Card from './components/card'

function App() {
 
  
  // let myObj = {
  //   username: "hitesh",
  //   age: 21,
  // } 

  let newArr = [1,2,3,4,5,6];

  return (
    <>
      <h1 className='bg-green-400'> Tailwind CSS </h1>
      <Card username="chaiaurcode" someObj={newArr} />
      <Card username="Anushka" cardname="Monkey"/>
    </>
  )
}

export default App
