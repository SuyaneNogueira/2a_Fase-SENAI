import React from 'react'
import { useState } from 'react'
import Login from '../assets/Componentes/Login'
import PainelAdm from '../assets/Componentes/PainelAdm'
import ProdutosMais18 from '../assets/Componentes/ProdutosMais18'
import Userlogado from '../assets/Componentes/Userlogado'
import'./REnder.css'

function Render() {
    const [adm, setAdm] = useState(true)
    const[idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)
  return (
    <div className='PainelAdm'>
      <h2>Renderizações de condicionais</h2>
        <div>  
            <button onClick={() => {setAdm(false)}}>sumiu</button>
           {/* * */} <button onClick={() => {setAdm(true)}}>apareceu</button> 
            { adm && <PainelAdm/> }   
        </div>

        <div className='PainelAdm'>
            <button onClick={() => {setIdade(idade +1)}}>+</button>
            {idade}
            <button onClick={() => {setIdade(idade -1)}}>-</button>
            {idade >= 18 && <ProdutosMais18/>}
        </div>

        <div className='PainelAdm'>
            <button onClick={() => {setUsuario(true)}}>logar</button>
            <button onClick={() => {setUsuario(false)}}>deslogar</button>
            {usuario ? <Userlogado/>: <Login/>}

        </div>
    </div>
  )
}


export default Render
