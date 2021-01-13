import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import '../style.css';

export const FormWithCustomHook = () => {
  const [formValue, handleInputChange, handleSubmit] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const {name, email, password} = formValue;

  useEffect(() => {
    console.log('email changed')
  }, [email])

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormWithCustomHook :)</h1>
      <hr/>
      <div className="form-group mb-2">
        <input 
        className="form-control"
        type="text"
        name="name"
        placeholder="name"
        value={ name }
        onChange={ handleInputChange }
        />
      </div>
      <div className="form-group mb-2">
        <input 
        className="form-control"
        type="email"
        name="email"
        placeholder="email"
        value={ email }
        onChange={ handleInputChange }
        />
      </div>
      <div className="form-group mb-2">
        <input 
        className="form-control"
        type="password"
        name="password"
        placeholder="*****"
        value={ password }
        onChange={ handleInputChange }
        />
      </div>

      <button type="submit" className="btn btn-primary">Save</button>

    </form>
  )
}
