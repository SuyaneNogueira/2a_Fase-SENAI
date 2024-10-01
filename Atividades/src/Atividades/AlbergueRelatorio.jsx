import React from 'react'

function AlbergueRelatorio(props) {
  return (
    <div>
       <p>Danos Morais: R${this.props.infos.Danos_morais}</p>
      <p>Desconto por emvolvimento: R${props.infos.Desconto_Por_emvolvimento_Emocional}   </p>
      <p>Desconto por Convenio: R$:{props.infos.Desconto_Por_Convenio}</p>
      <p>Total a se pagar sem o desconto: R${props.infos.Total_Apagar_Sem_Desconto}   </p>
      <p>Total a se pagar com o desconto: R${props.infos.Com_Desconto}    </p>
    </div>
  )
}

export default AlbergueRelatorio
