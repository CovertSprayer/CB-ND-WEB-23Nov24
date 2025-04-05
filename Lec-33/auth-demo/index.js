const express = require('express');
const app = express();
const port = 5000;
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo-Nov')
  .then(() => console.log("DB connected!"))

// app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: "my_secret"
}))

function isAuthenticated(req, res, next){
  if(!req.session.user){
    return res.redirect("/login");
  }
  next();
}

app.get('/', isAuthenticated, (req, res) => {
  console.log(req.session);
  res.render("home.ejs", {
    user: req.session.user
  });
})

app.get('/login', (req, res) => {
  res.render("login.ejs");
})

app.get('/register', (req, res) => {
  res.render("register.ejs");
})

app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  const user = await User.create({ username, password });
  res.redirect("/login");
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({username});
  if(!user){
    return res.redirect('/register');
  }
  if(user.password != password){
    return res.send("Invalid Username or Password");
  }
  req.session.user = user;
  res.redirect("/");
})

app.get('/logout', (req, res) => {
  delete req.session.user;
  res.redirect("/login");
})

app.listen(port, () => {
  console.log("server is up at port", port);
})