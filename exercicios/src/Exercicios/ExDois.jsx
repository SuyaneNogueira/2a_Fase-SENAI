// Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.

import React from 'react'
import {useState} from 'react'
import './EXdois.css'
function ExDois() {

    function PosiPar(){
     let numeros = Number(prompt("Digite o número desejado: ")) 
    
  

    if ( numeros >0 & numeros % 2 == 0 ) {

      setResultado("É positivo e par!")
    }

    else {

      setResultado("É Negativo e talvez par")

    }

    }
    const[resultado, setResultado] = useState()
  return (
    <div className='PP'>
      <h3>Digite Um número para saber seber se ele é positivo e par </h3>
      <div>
        <button onClick={PosiPar}>Resposta</button>
      </div>
      <div>{resultado}</div>
    </div>
  )
}

export default ExDois
