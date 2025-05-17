import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoApp = () => {

  const todos = [
    {text: "Learn react", completed: false},
    {text: "Learn js", completed: false},
    {text: "Learn node", completed: false},
  ]

  return (
    <>
      <TodoInput/>
      <TodoList todos={todos}/>
    </>
  )
}

export default TodoApp