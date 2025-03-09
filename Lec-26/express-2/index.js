const express = require('express')
const app = express();
const users = require('./data/users');

// app.get("/", (req, res) => {
//   res.send("Working fine!")
// })

// app.post("/", (req, res) => {
//   res.send("Hello form post req");
// })

app.get('/users', (req, res) => {
  console.log(req.params);
  res.json(users)
})

// app.get("/users/1", (req, res) => {
//   const user = users.find(user => user.id == "1");
//   res.json(user);
// })
// app.get("/users/2", (req, res) => {
//   const user = users.find(user => user.id == "2");
//   res.json(user);
// })
// app.get("/users/3", (req, res) => {
//   const user = users.find(user => user.id == "3");
//   res.json(user);
// })

// path parameter
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  if(!user){
    return res.json({
      message: "User not found!"
    })
  }
  res.json(user);
})


app.delete("/", (req, res) =>{
  // res.send("hello from delete req");
  res.send({
    message: "Hello from delete req"
  })
})

const PORT = 3001
app.listen(PORT, ()=>{
  console.log("Server is up at port", PORT);
})