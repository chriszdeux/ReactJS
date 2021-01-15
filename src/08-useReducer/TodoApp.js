import React, { useEffect, useReducer } from 'react';

import { AddTodoList } from './AddTodoList';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

import './style.css';

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
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [ todos ])


  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  const handleDelete = (todoId) => {
    console.log(`id: ${todoId} deleted`);

    const actionDelete = {
      type: 'delete',
      payload: todoId
    }

    dispatch(actionDelete)

  }

  const handleToggle = ( todoId ) => {
    const actionToggle = {
      type: 'toggle',
      payload: todoId
    }

    dispatch(actionToggle);
  }


  return (
    <>
      <h1>TodoApp ( { todos.length } )</h1>
      <hr/>
      <div className="container">
        
        < TodoList 
          todos={ todos } 
          handleDelete={ handleDelete }
          handleToggle={ handleToggle }
          />
        

        <AddTodoList 
          handleAddTodo={ handleAddTodo }
        /> 
      </div>
    </>
  )
}
