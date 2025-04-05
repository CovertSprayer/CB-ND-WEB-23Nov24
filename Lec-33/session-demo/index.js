const express = require('express');
const app = express();
const port = 5000;
const session = require('express-session');

app.use(session({
  secret: "mysecret"
}))

app.get('/', (req, res) => {
  console.log(req.session);
  res.send("working fine!")
})

app.get("/set-session", (req, res) => {
  req.session.name = "Shreyance";
  res.send("session set successfully!");
})

app.listen(port, () => {
  console.log("server is up at port", port);
})