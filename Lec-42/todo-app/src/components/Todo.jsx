import { CiTrash } from "react-icons/ci";

const Todo = ({todo, removeTodo, markComplete}) => {

  const style = {};
  if(todo.completed) style.textDecoration = "line-through";


  function clickHandler(){
    markComplete(todo.id)
  }

  return (
    <div>
      <input onClick={clickHandler} type="checkbox" defaultChecked={todo.completed}/>
      <span style={style}>{todo.text}</span>
      <span onClick={() => removeTodo(todo.id)}><CiTrash /></span>
    </div>
  )
}

export default Todo