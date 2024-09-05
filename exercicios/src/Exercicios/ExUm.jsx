// Copo meio cheio: Ler um número e informar se ele é positivo, 
// negativo ou nulo

import React from 'react'
import {useState} from 'react'
import './EXum.css'
function ExUm() {

    function Numero(){
        
     let numeros = Number(prompt("Digite um número:"))

     if(numeros > 0 ){
     alert('é positivo')

     }else if(numeros < 0){
        alert('é negativo')

     }else{

        alert("é nulo")
     }
    }
    const[resultado, setResultado] = useState()
  return (
    <div className='PNN'>
      <h3>Digite um número para saber se ele é positivo, negativo ou nulo.</h3>

      <div>
        <button onClick={Numero}>Resultado</button>
      </div>
    </div>
  )
}

export default ExUm
