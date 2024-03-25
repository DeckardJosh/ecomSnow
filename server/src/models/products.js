const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  //id autogen mongo
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  //snowboard //ski //jacket
  group: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  //gets configured by product
  size: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

//defining the model into a variable/object
const Product = mongoose.model("product", ProductsSchema);
//making it available
module.exports = Product;