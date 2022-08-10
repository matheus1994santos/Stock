import React from 'react'
import Button from '../Buttons.js/Button';
import { FormStock } from './Styles'

const SearchStock = () => {
    const [name, setName] = React.useState('');

  return (
    <FormStock onSubmit={(e) => e.preventDefault()}>
        <label>Nome: <input type={'text'}></input></label>
        <Button/>
    </FormStock>
  )
}

export default SearchStock
