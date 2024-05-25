import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [isTermAccepted, setIsTermAccepted] = useState(false)
  

  return (
    <>
      <form action="">
        <CGUCheckbox ckeck={isTermAccepted} toggleCheck={setIsTermAccepted} />
        <button type="button" disabled={!isTermAccepted} >ENVOYER</button>
      </form>
    </>
  )
}

function CGUCheckbox({ckeck, toggleCheck}){
  
  return <>
  <input type="checkbox" onChange={e=>toggleCheck(e.target.checked)} checked={ckeck} name="checkbox" id="" />
  </>
}

export default App
