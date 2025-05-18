import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const TodoApp = () => {

  const dummy_data = [
    {id: uuidv4(), text: "Learn react", completed: true},
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

  function markComplete(todoId){
    // const newTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);

    const newTodos = todos.map(todo => {
      if(todo.id === todoId){
        return {...todo, completed: !todo.completed}
      } else {
        return todo;
      }
    })

    setTodos(newTodos);
  }

  return (
    <>
      <TodoInput addTodo={addTodo}/>
      <TodoList removeTodo={removeTodo} todos={todos} markComplete={markComplete}/>
    </>
  )
}

export default TodoApp