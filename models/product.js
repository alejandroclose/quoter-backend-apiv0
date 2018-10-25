const mongoose = require('mongoose');
// const User = mongoose.model('User');

const productSchema = new mongoose.Schema({
  name: String ,
  description: String,
  image: String,
  price: Number,
  currency: String,
  unit: String,
  // owner: {
  //   type: mongoose.Schema.ObjectId, ref: "User",
  //   ref: 'User'
  // }
  // user: [ { type : ObjectId, ref: 'User' } ]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

// Product.find({owner: 3})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;