const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: number},
  currency: { type: String},
  unit: { type: string}

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;