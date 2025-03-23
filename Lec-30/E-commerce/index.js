const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { Product } = require("./models");

//  mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/E_com_Dec")
  .then(() => console.log("DB connected!"))
  .catch(err => console.log("Error in connecting to DB", err))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.render("home.ejs")
})

// ------------ product routes

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.render("products/list.ejs", { products });
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is up at port", PORT);
})