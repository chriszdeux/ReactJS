import React, { useEffect, useState } from 'react';
import '../style.css'
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState;

  const handleInputChange = ({ target }) => {
    // console.log( e.target.value )
    // console.log( e.target.name )
    setFormState({
      ...formState,
      [target.name]:target.value
    })
  }

  useEffect(() => {
    // console.log('hey')
  }, [ formState ])

  useEffect(() => {
    // console.log('name changed')
  }, [name])

  return (
    <>
      <h1>Simple Form :)</h1>
      <hr/>
      <div>
        <input 
        type="text"
        name="name"
        autoComplete="off"
        placeholder="name"
        value={ name }
        onChange={ handleInputChange }
        />
      </div>

      <div>
        <input 
        type="email"
        name="email"
        autoComplete="off"
        placeholder="email"
        value={email}
        onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }
    </>
  )
}
