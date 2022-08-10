import React from 'react'
import { BdrStock, InputSubmit, InputTexT } from '../Styles'

const BDR = () => {
  const DefaultForm = e => {
    e.preventDefault();
  };

  return (
    <BdrStock onSubmit={DefaultForm}>
      <div>
        <p>Cod. Stoke:
            <InputTexT/>
            <InputSubmit value={'Enviar'}/>
        </p>
      </div>
    </BdrStock>
  )
}

export default BDR
