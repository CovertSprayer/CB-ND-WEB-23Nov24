import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({addTodo}) => {
  const [inputValue, setInputValue] = useState("");

  function changeHandler(e) {
    setInputValue(e.target.value);
  }

  function clickHandler() {
    const todo = {id: uuidv4(), text: inputValue, completed: false}
    addTodo(todo);
    setInputValue("");
  }

  return (
    <div>
      <input onChange={(e) => changeHandler(e)} type="text" value={inputValue}/>
      <button onClick={clickHandler}>Add</button>
    </div>
  )
}

export default TodoInput