import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {todos, handleToggle, handleDelete} ) => {
  return (
    <ul>
      {
        todos.map((todo, i) => (
          < TodoListItem 
            key={todo.id}
            i = {i}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      }
    </ul>
  )
}
