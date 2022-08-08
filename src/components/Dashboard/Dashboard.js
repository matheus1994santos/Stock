import React from 'react'
import { BoxBrand, BoxDebt, BoxGain, BoxProfit, DashboardTela } from './Styles'

const Dashboard = () => {
  return (
    <DashboardTela>
      <BoxBrand> {/*Caixa Marca*/}
        <h1>Registro Stock</h1>
        <p>Nome Empresa listada</p>
        <span>Valor</span>
      </BoxBrand>
      <BoxGain>
        <h1>Receita Liquida</h1>
        <p>Lucro Liquido</p>
        <p>EBTIDA</p>
        <p>P/L</p>
      </BoxGain>
      <BoxDebt>
        <h1>Divida Bruta</h1>
        <p>Divida Liquida</p>
      </BoxDebt>
      <BoxProfit>
        <h1>Valor Total do Ativo</h1>
        <p>Patromonio Liquido</p>
        <p>Dividendos</p>
      </BoxProfit>
    </DashboardTela>
  )
}

export default Dashboard
