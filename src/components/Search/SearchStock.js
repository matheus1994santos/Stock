import React from 'react'
import { FormStock } from './Styles'

const SearchStock = () => {
    const [name, setName] = React.useState('');

  return (
    <FormStock onSubmit={(e) => e.preventDefault()}>
        <label>Nome: <input></input></label>
    </FormStock>
  )
}

export default SearchStock
