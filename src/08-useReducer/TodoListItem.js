import React from 'react';

export const TodoListItem = ( {todo, i , handleToggle, handleDelete}) => {
  // debugger
  return (
    <li key={todo.id}>
      <p
        className={ `${ (todo.done) ? 'complete' : 'pending' }` } 
        onClick={ () => handleToggle(todo.id) }
      >{ i + 1 }. {todo.description}</p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>delete</button>
    </li>
  )
}
