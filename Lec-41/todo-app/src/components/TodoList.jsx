import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div>
      {todos.map(todo => <Todo todo={todo}/>)}

      {/* <Todo todo={todos[0]}/>
      <Todo todo={todos[1]}/>
      <Todo todo={todos[2]}/> */}
    </div>
  )
}

export default TodoList