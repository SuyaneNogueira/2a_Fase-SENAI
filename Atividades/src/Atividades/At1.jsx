/* Progranma para ler os dia da semana digitado pelo pelo usuário e mostrar o dia corespondente*/
import React from 'react'
import './AT1.css'
import { useState } from 'react'

function At1() {
    function DiaSemana () {

    switch (inputSemana) {

  case '1':
  alert('Domingo')           
  break;

  case '2':
 alert('Segunda-feira')                        
 break;

 case '3':
 alert('Terça-feira')                                 
 break;
                     
 case '4':
 alert('Quarta-feira')                                          
 break;

 case '5':
 alert('Quinta-feira')
 break;
 
 case '6':
alert('Sexta-feira')                              
break;

 case '7':
 alert('Sabádo')
                                  
 break;

  default:
  alert('não existe esse número nos dias da semana!')
  break;


  }
        
    }
    const [inputSemana, setSemana] = useState(0)
  return (
    <div className='AtividadeI'>
      <h2>Dias da semana</h2>

      Semana:
     <input type="Number" 
     value={inputSemana}
     onChange={(event) => { setSemana(event.target.value)} }
     />
     <button onClick={DiaSemana}>Dia</button>

     

    </div>
  )
}

export default At1
