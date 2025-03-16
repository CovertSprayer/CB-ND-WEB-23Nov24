const express = require("express");
const app = express();
const { v4: uuid } = require('uuid');
const todos = [
  {
    id: uuid(),
    text: "Learn Nodejs"
  },
  {
    id: uuid(),
    text: "Go to gym"
  },
  {
    id: uuid(),
    text: "Eat healthy"
  },
  {
    id: uuid(),
    text: "Buy some groceries"
  },
]

// app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/healthCheck", (req, res) => {
  res.json({
    success: true
  })
})

// to get all the todos
app.get("/api/todos", (req, res) => {
  res.json({
    success: true,
    message: "Sucess",
    data:todos
  })
})

// to get specific todo
app.get("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id == id);
  res.json({
    success: true,
    message: "Success",
    data: todo
  })
})

//  to create a todo
app.post("/api/todos", (req, res) => {
  const {text} = req.body;
  const todo = {
    id:uuid(),
    text: text
  }
  todos.push(todo)
  res.json({
    success: true,
    message: "Sucess",
    data:todo
  })
})

// to update
app.put("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  const { text } = req.body;
  const todo = todos.find(todo => todo.id == id);
  todo.text = text;
  res.json({
    success: true,
    message: "Sucess",
    data:todo
  })
})

// to delete
app.delete("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  const todoIndex = todos.findIndex(todo => todo.id == id);
  todos.splice(todoIndex, 1);
  res.json({
    success: true,
    message: "Sucess",
    data:todos
  })
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is up and running at port", PORT);
})