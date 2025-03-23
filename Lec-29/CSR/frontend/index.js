const baseURL = "http://localhost:8000";
const list = document.querySelector(".todo-list");

async function fetchTodos(){
  try {
    const response = await axios.get(`${baseURL}/api/todos`);
    return response.data.data;
  } catch (error) {
    alert("something went wrong!!")
  }
}

async function main(){
  const todos = await fetchTodos();
  for(let todo of todos){
    const li = document.createElement("li");
    li.innerText = todo.text;
    list.append(li);
  }

}

main();