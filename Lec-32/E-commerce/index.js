const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require("ejs-mate");

//  mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/E_com_Dec")
  .then(() => console.log("DB connected!"))
  .catch(err => console.log("Error in connecting to DB", err))

app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render("home.ejs")
})

// ------------ routes
const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');

app.use(productRoutes);
app.use(reviewRoutes);

app.get("*", (req, res) => {
  res.render("404.ejs");
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is up at port", PORT);
})