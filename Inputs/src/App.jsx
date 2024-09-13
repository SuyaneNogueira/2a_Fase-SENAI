import { useState } from 'react'

import './App.css'
import Meninao from './Components/Meninao'
import Menino from './Components/Menino'

function App() {
  const [inputIDADE, setinputIdade] = useState(0)
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)



  function ProcessarIdade(){

    if(inputIDADE >= 18){
    //  alert('bem-vindo meninão 🔞') 
    setMaior(true)
      setMenor(false)
    }else{
      // alert('volte quando for um meninão😿')
      setMenor(true)
      setMaior(false)
    
    }
  
  }
  return (
    <>
     <h1>Campeão</h1>

     Idade:
     <input type="text" 
     value={inputIDADE}
     onChange={(event) => {setinputIdade(event.target.value)} }
     />
     <button onClick={ProcessarIdade}>Processar idade</button>
     {/* miha idade: {inputIDADE} */}
     {maior && <Meninao/>}
     {menor && <Menino/>}

    </>
  )
}

export default App
