const express = require("express");
const app = express();
const path = require("path");
const todos = [
  "Learn JS",
  "Learn React",
  "DO practice as well",
  "Give test"
]

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send("working fine!!");
})

app.get("/todos", (req, res) => {
  res.render("todos.ejs", {
    heading: "List of todos",
    todos
  })
})

app.post("/todos", (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.redirect("/todos");
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
})