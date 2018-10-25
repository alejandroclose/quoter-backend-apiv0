const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
  name: String ,
  description: String,
  image: String,
  price: Number,
  currency: String,
  unit: String,
  owner: {
    type: ObjectId,
    ref: 'User'
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

// Product.find({owner: 3})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;