import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const TodoApp = () => {

  const dummy_data = [
    {id: uuidv4(), text: "Learn react", completed: false},
    {id: uuidv4(), text: "Learn js", completed: true},
    {id: uuidv4(), text: "Learn node", completed: false},
  ]

  const [todos, setTodos] = useState(dummy_data);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(todoId) {
    const newTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoInput addTodo={addTodo}/>
      <TodoList removeTodo={removeTodo} todos={todos}/>
    </>
  )
}

export default TodoApp