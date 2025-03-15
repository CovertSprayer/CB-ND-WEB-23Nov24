const express = require('express');
const app = express();
const path = require("path");
const users = require('./data/users'); // array of user

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res)=>{
  res.render("home.ejs")
})

// list of all users
app.get("/users", (req, res) => {
  res.render("users.ejs", {
    title: "users",
    mainHeading: "List of Users",
    users // array of user
  })
})

// single user
app.get("/users/:id", (req, res)=>{
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  res.render("user.ejs", {
    user
  });
})

const PORT = 5000;
app.listen(PORT, ()=>{
  console.log("Server is up at port", PORT);
})