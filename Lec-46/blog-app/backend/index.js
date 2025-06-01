require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/blog_db')
  .then(() => console.log("DB connected!"))
  .catch(err => console.log("Error in DB connection", err));

// middlewares
app.use(express.json());
app.use(cors());


const router = require("./routes")
app.use("/api", router);


const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is up at port", PORT)
})