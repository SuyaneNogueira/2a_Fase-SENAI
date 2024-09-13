import { useState } from 'react'
import './App.css'
import ListaEx from './Atividades/ListaEx'
import At1 from './Atividades/At1'

function App() {
  const [Atividades, setAtividades] = useState()

  return  (
    <>
    <nav className='AtividadeI'>
     <button onClick={() => {setAtividades(<ListaEx/>)}}>Atividade</button> 
     <button onClick={() => {setAtividades(<At1/>)}}>semana</button> 
    </nav>
    {Atividades}
    </>
  )
}

export default App
