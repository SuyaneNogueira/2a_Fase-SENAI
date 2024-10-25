import React from 'react'
import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './Cadastro.css'


function Cadastro() {
    const {contatinho, SetContatinho,contatinhos,SetContatinhos} = useContext(GlobalContext) 
    const [inputnome, setInputNome] = useState('')

    function CadastrarContatinho() {

        SetContatinhos([...contatinhos,inputnome])
        console.log(contatinhos);
    }
  return (
    <div>
        <Navbar/>
      <h1>Cadastre o seu contatinho</h1>

      <div className='input-conteiner'>
        <label htmlFor="">Nome:</label>
        <input type="text" placeholder='Nome do contatinho' 
        value={inputnome} onChange={(event) => setInputNome(event.target.value)} />
      </div>
      {contatinho}
      <button onClick={CadastrarContatinho}>cadastrar contatinho</button> 

      <div className='Contatinhos'>
        {contatinhos.map((c, index) => (
          <div className='card-contatinho' key={index}>
            <p>{c}</p>
          </div>
        ))}
      </div>
    </div>
   
  )
}

export default Cadastro
