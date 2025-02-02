// click event on add button
// extract value from input
// create todo
// append todo in todoList


//input, button, todo-list

const addButton = document.querySelector('button');
const inp = document.querySelector('input');
const todoList = document.querySelector('.todo-list');

addButton.addEventListener('click', ()=>{
  const inputValue = inp.value;
  const todo = createTodo(inputValue);
  todoList.append(todo);
})

function createTodo(text){
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.innerHTML = `<p>${text}</p>
        <div>
          <span>🔼</span>
          <span class="delete">🗑️</span>
          <span>🔽</span>
        </div>`;
  return todo;
}

todoList.addEventListener("click", (e)=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
  }
})