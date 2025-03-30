const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  stock: Number,
  image: String,  // Image URL
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
