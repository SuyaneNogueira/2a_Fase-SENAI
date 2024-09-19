import { useState } from 'react'
import './App.css'
import ListaEx from './Atividades/ListaEx'
import At1 from './Atividades/At1'
import At2 from './Atividades/At2'

function App() {
  const [Atividades, setAtividades] = useState()

  return  (
    <>
    <nav className='AtividadeI'>
     <button onClick={() => {setAtividades(<ListaEx/>)}}>Atividade</button> 
     <button onClick={() => {setAtividades(<At1/>)}}>Semana</button> 
     <button onClick={() => {setAtividades(<At2/>)}}>Diária</button> 
    </nav>
    {Atividades}
    </>
  )
}

export default App
