import { useState } from 'react'

function App() {
  //on aissai de faire de notre first_name un champ controller 
  //le lastname sera un champ non controler 
  //le champ controller le composent sera rapeler à chaque tapage du champ
  //le champ non controller on s'interessera qu'a la valeur saisi qu'on peut
  //recuperer avec new FormData(e.target)
  const [firstname, setFirstname] = useState('john doe')
  const [lastname, setLastname]= useState('')

  const [mycheckbox, setMycheckbox] = useState(false)

  const handleChange = (e)=>{
    setFirstname(e.target.value)
  }

  const handleCheck= ()=>{
    setMycheckbox(!mycheckbox)
  }


  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  const reset = ()=>{
    setFirstname('')
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" value={firstname}
         onChange={handleChange} id="" />

         <input type="text" name="lastname" id="" defaultValue="ndiaye" />
         <input type="checkbox" name="checkbox" id="" checked={mycheckbox} onChange={handleCheck} />
         <button disabled={!mycheckbox} type="button" onClick={reset}>RESET</button>

         {mycheckbox && <button type="submit">ENVOYER</button>}

      </form>
    </>
  )
}

export default App
