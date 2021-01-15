import React, { useEffect, useReducer } from 'react';
import { useForm } from '../hooks/useForm';
import './style.css';
import { todoReducer } from './todoReducer';


// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: 'learn react',
//     done: fals
//   }
  
// ];

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({ description: '' })
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [ todos ])



  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('new task');
    
    if (description.trim().length < 2) {
      return;
    }
    

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
    // debugger
    reset();

  }

  const handleDelete = (todoId) => {
    console.log(`id: ${todoId} deleted`);

    const actionDelete = {
      type: 'delete',
      payload: todoId
    }

    dispatch(actionDelete)
    // debugger
  }
  console.log(description)

  // debugger

  return (
    <>
      <h1>TodoApp ( { todos.length } )</h1>
      <hr/>
      <div className="container">
        
          <ul>
            {
              todos.map((todo, i) => (
                <li key={todo.id}>
                  <p>{ i + 1 }. {todo.description}</p>
                  <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>delete</button>
                </li>
              ))
            }
          </ul>
        

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
      </div>
    </>
  )
}
