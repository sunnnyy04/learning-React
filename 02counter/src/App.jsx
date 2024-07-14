import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  // let counter=15
  const addvalue=()=>{
    if(counter<21){counter++;
    setCounter(counter)}
    console.log("clicked",counter);
    console.log("value added",Math.random());
  }
  const removevalue=()=>{
    if(counter>=0){
      setCounter(counter-1)
      console.log("clicked",counter);
    }
  }
  return (
    <>
    
      <h1>Chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue} >add value</button>
      <br />
      <button onClick={removevalue}>remove vealue</button>

     
    </>
  )
}

export default App
