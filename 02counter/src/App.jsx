import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)//counter is varialve and setcounter is function
  //let counter=15
  
const AddValue=()=>{
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
setCounter((prevCounter)=>prevCounter+1)
}
const DecreaseValue=()=>{
   
  setCounter(prev => prev - 1);
}


  return (
    <>
     <h1>react course with hitesh {counter}</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={AddValue}>add value</button>{" "}
     <button onClick={DecreaseValue}>remove value</button>
  <p>footer : {counter}</p> 
    </>
  )
}

export default App
