import React from 'react'
import { BdrStock, Graphic, InputSubmit, InputTexT } from '../Styles'
import Grafico from './img/Grafico.jpg'

const BDR = () => {
  const DefaultForm = e => {
    e.preventDefault();
  };



  return (
    <BdrStock onSubmit={DefaultForm}>
      <div>
        <p>Cod. Stoke:
            <InputTexT />
            <InputSubmit type={'submit'} value={'Enviar'}/>
        </p>
      </div>
      <Graphic>
        <nav>
          <p><a>Proventos</a></p>
          <p><a>Vacância</a></p>
          <p><a>Dividend yield</a></p>
          <p><a>Valor de por cota</a></p>
        </nav>
        <div>
          <img src={Grafico}/>
        </div>
      </Graphic>
    </BdrStock>
  )
}

export default BDR
