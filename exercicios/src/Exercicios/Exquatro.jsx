import React from 'react'
import {useState} from 'react'
import './EXquatro.css'
function Exquatro() {

  function Corrida() {

    
  }

  const[corrida, setCorrida] = useState()
  return (
    <div className='Corrida'>
      <h3>Uber Star</h3>
      <label htmlFor="corrida">Digite a distãncia da corrida em Km:</label>
      <input type="Number"  id='corrida'/>
      <label htmlFor="tempo">Digite o tempo da corrida:</label>
      <input type="Number"  id='tempo"'/>
      <button onClick={Corrida}>Calcular distância </button>

      Resultado: {corrida}
    </div>
  )
}

export default Exquatro
