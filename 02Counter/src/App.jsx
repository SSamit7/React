import { useState } from 'react'
import './App.css'

function App() {

  


let [counter, setCounter] = useState(0);
const addValue =()=>{
  
  console.log("Value after added",Math.random());
  if (counter <20)
  setCounter(counter+1);
}
const removeValue=()=>{
  
  console.log("Value after added",Math.random());
  if (counter >0)
  setCounter(counter-1);
}
  return (
    <>
     <h1>Chai aur code</h1>
     <h2>Counter Value {counter } </h2>
     <button onClick={addValue}>Add Value{counter } </button>
     <br/>
     <button onClick={removeValue}>Remove Value{counter} </button>
    </>
  )
}

export default App
