const express = require('express');
const app = express();
const path = require('path');

// method - get, post, put, patch, delete
// route/endpoint - "/", "/login", "/signup", "/a/b/c/d"
// controller/hander

app.get("/", (req, res)=>{
  // res.send("<h1>Hello from Home page!!</h1>");
  const filePath = path.join(__dirname, "views", "home.html");
  res.sendFile(filePath);
})

app.get("/login", (req, res)=>{
  // res.send("Hello from Login Page!");
  res.sendFile(path.join(__dirname, "views", "login.html"));
})

app.get("/signup", (req, res)=>{
  // res.send("Hello from Signup Page!");
  res.sendFile(path.join(__dirname, "views", "signup.html"));
})

app.get("*", (req, res)=>{
  res.send("404 Not found!!");
})

const PORT = 3000;  // 3000 - 9000
app.listen(PORT, ()=>{
  console.log(`Server is up at port ${PORT}`)
})
