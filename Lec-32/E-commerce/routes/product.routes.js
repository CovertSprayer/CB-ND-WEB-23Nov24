const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const validator = require("../middlewares/validator");
const { productSchema } = require("../validators/product");

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.render("products/list.ejs", { products });
})

router.get("/products/new", async (req, res) => {
  res.render("products/new.ejs");
})

router.get("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId).populate("reviews");
  console.log(product);
  res.render("products/show.ejs", { product });
})

router.post("/products", validator(productSchema), async (req, res) => {
  const value = req.body;
  const product = await Product.create({
    title: value.title,
    image: value.image,
    price: value.price,
    description: value.description
  });
  res.redirect("/products");
})

module.exports = router;