const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

//  mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/E_com_Dec")
  .then(() => console.log("DB connected!"))
  .catch(err => console.log("Error in connecting to DB", err))

app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(session({
  secret: "my_secret"
}))
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  next();
})

app.get('/', (req, res) => {
  res.render("home.ejs");
})

// ------------ routes
const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');
const authRoutes = require('./routes/auth.routes');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

app.get("*", (req, res) => {
  res.render("404.ejs");
})


// global catches
// app.use((error, req, res, next)=>{
//   console.log(error);
//   res.render("error.ejs", {err: "Something Went Wrong, Please try again later. hello from global catches" })
// })

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is up at port", PORT);
})