import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)

  const addvalue = () => {
    setcounter(counter + 1)
  }

  const removevalue = () => {
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>


      <button
        onClick={addvalue}>
        Add Value</button>
      <br></br>
      <button
      onClick ={removevalue}
      >Remove Value</button></>
  )
}

export default App
