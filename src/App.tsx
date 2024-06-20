import { useState } from 'react'
import './App.css'
function App() {
 const[Number ,setNumber] =useState<number>(0);
 function handleNumber(){
  setNumber(prevNumber=>{return (prevNumber+1)})
 }

  return (
    <main>
   <button onClick={handleNumber}>click here </button>
   <p>{Number}</p>
    </main>
  )
}
export default App
