import React from 'react'
import { CiTrash } from "react-icons/ci";

const Todo = ({todo, removeTodo}) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
      <span onClick={() => removeTodo(todo.id)}><CiTrash /></span>
    </div>
  )
}

export default Todo