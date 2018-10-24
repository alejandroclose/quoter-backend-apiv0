const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: String ,
  description: String,
  image: String,
  price: Number,
  currency: String,
  unit: String,
  // user: [ { type : ObjectId, ref: 'User' } ]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;