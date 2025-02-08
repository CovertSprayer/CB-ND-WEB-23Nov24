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
  if(inputValue == "") return;
  const todo = createTodo(inputValue);
  todoList.append(todo);
  inp.value = "";
})

inp.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    addButton.click();
  }
})

function createTodo(text){
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.innerHTML = `
        <div class="left-section">
          <input class="mark" type="checkbox">
          <p>${text}</p>
        </div>
        <div class="btns">
          <span class="edit">📝</span>
          <span class="delete">🗑️</span>
          <span class="up-arrow">🔼</span>
          <span class="down-arrow">🔽</span>
        </div>`;
  return todo;
}

todoList.addEventListener("click", (e)=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.parentElement.remove();
  }

  else if(e.target.classList.contains('up-arrow')){
    const currElem = e.target.parentElement.parentElement;
    const prevElem = currElem.previousElementSibling;
    // if(!prevElem) return;
    if(prevElem) prevElem.before(currElem);
  }

  else if(e.target.classList.contains('down-arrow')){
    const currElem = e.target.parentElement.parentElement;
    const nextElem = currElem.nextElementSibling;
    // if(!nextElem) return;
    if(nextElem) nextElem.after(currElem);
  }

  else if(e.target.classList.contains("edit")){
    const elem = e.target.parentElement.previousElementSibling.children[1];
    const text = elem.innerText;
    const newText = prompt("Enter value: ", text);
    elem.innerText = newText;
  }

  else if(e.target.classList.contains("mark")){
    const elem = e.target.nextElementSibling;
    // if(elem.classList.contains("checked")){
    //   elem.classList.remove("checked");
    // }
    // else {
    //   elem.classList.add("checked");
    // }
    elem.classList.toggle("checked");
  }
})