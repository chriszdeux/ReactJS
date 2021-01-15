import React from 'react'
import { useForm } from '../hooks/useForm'

export const AddTodoList = ( { handleAddTodo } ) => {
  
  const [{ description }, handleInputChange, reset] = useForm({ description: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    if( description.trim().length < 2 ) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    handleAddTodo(newTodo);
    reset();
  }
  return (
    <div className="add">
      <h2>Add Todo</h2>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          name="description"
          placeholder="add"
          autoComplete="off"
          className="form-control"
          value={ description }
          onChange={ handleInputChange }
        />
      <button type="submit" className="btn btn-outline-primary mt-2 btn-block">add</button>
      </form>
    </div>
  )
}
