import React from 'react'
import './Media.css'
import {useState} from 'react'

function media() {
    
function CalcularMedia(){

let notaUm = Number(prompt("digite a primeira média: "))
let notaDois = Number(prompt("digite a segunda nota: "))
let media = (notaUm + notaDois)/2
setResultado(media)
}
    const[resultado, setResultado] = useState()
  return (
    <div className='Média'>
      <h2>Exercicios para calcular média de dois(2) números</h2>
      <button onClick={CalcularMedia}>Calcular</button>
    <div>
        Media: {resultado}
    </div>

    </div>
  )
}

export default media
