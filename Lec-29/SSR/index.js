const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require('uuid');
const methodOverride = require("method-override");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// body parser, to parse req.body
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"))

// app.get('/CSS/index.css', (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "CSS", "index.css"));
// })

app.get("/", (req, res) => {
  res.send("Working Fine!")
})

app.get("/todos", (req, res)=>{
  res.render("todos/index.ejs", {todos: todos})
})

app.get("/todos/new", (req, res) => {
  res.render("todos/newForm.ejs");
})

app.post("/todos", (req, res) => {
  // const { todo } = req.body;
  const todo = req.body.todo;
  todos.push({
    id: uuid(),
    text: todo
  });
  res.redirect("/todos");
})

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id == id);
  res.render("todos/show.ejs", {todo: todo})
})

app.get("/todos/:id/edit", (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id == id);
  res.render("todos/edit", {todo: todo});
})

app.put("/todos/:id", (req, res) => {
  const { text } = req.body;
  const id = req.params.id;
  const todo = todos.find(todo => todo.id == id);
  todo.text = text;
  res.redirect("/todos");
})

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todoIndex = todos.findIndex(todo => todo.id == id);
  todos.splice(todoIndex, 1);
  res.redirect("/todos");
})



const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is up and running at port", PORT);
})