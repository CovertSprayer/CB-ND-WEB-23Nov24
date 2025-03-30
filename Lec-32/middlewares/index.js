const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(checkPassword);

// Routes
app.get('/', (req, res) => {
  res.send('Working fine');
});


app.get('/secret/:password', (req, res) => {
  res.send("This is my secret!");
})


function checkPassword(req, res, next) {
  console.log("hello from middleware")
  next();
  // console.log(req.params);
  // const password = req.params.password;
  // if(password !== "abc123"){
  //   return res.send("Invalid password!!");
  // }
  // next();
}

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});