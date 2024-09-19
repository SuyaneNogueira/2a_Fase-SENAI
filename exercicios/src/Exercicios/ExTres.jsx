// Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação NÂO pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import React from 'react'
import {useState} from 'react'
import './ExTres.css'

function ExTres() {

    function Saldo(){

        let Salario = Number(prompt("digite o seu salário: "))
        let emprestimos = Number(prompt("Digite o valor do Empréstimo: "))
        let Prestacoes = Number(prompt("Digite o número de prestações: "))
        let ValorLimite
        let trintaP = 30
        let ValorPrestacoes

        ValorLimite = Salario * trintaP
        ValorPrestacoes = emprestimos / Prestacoes
        
        if ( ValorPrestacoes < ValorLimite) {

            setEmprestimo("você pode fazer os emprestimos!")
            
          
        }else if(ValorPrestacoes > ValorLimite){

            setEmprestimo(" Não é possivel realizar o emprestimo!")

        }else if(Prestacoes == 0 & emprestimos == 0 ){  
            setEmprestimo("Valores impossiveis de se calcular!")
          }

    }
    const[empréstimo, setEmprestimo] = useState()
  return (
    <div className='empréstimo'>
      <h3>Empréstimo</h3>
      <div>
      <button onClick={Saldo}>empréstimo</button>
      </div>
      <div>
        {empréstimo}
      </div>
    </div>


  )
}

export default ExTres
