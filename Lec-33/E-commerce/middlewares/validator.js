const validator = (schema) => {
  return (req, res, next) => {
    const {error, value} = schema.validate(req.body);
    if(error){
      return res.send(error)
    }
    next();
  }
}

module.exports = validator;

/*
const { productSchema, reviewSchema } = require("../validators/product");

const productValidator = (req, res, next) => {
  const {error, value} = productSchema.validate(req.body);
  if(error){
    return res.send(error)
  }
  next();
}

const reviewValidator = (req, res, next) => {
  const {error, value} = reviewSchema.validate(req.body);
  if(error){
    return res.send(error)
  }
  next();
}

module.exports = {
  productValidator,
  reviewValidator
};
*/

