const express = require('express');
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("auth/login.ejs");
})

router.get("/register", (req, res) => {
  res.render("auth/register.ejs");
})

module.exports = router;