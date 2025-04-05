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

router.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product });
})

router.put("/products/:id", validator(productSchema), async (req, res) => {
  const { title, description, image, price } = req.body;
  console.log(req.body)
  const { id } = req.params;
  const existingProduct = await Product.findById(id);

  existingProduct.title = title;
  existingProduct.description = description;
  existingProduct.image = image;
  existingProduct.price = price;

  await existingProduct.save();
  res.redirect('/products');
})

router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);

  res.redirect('/products');
})

module.exports = router;