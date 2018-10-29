const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
  name: String,
  customer_name: String,
  customer_address: String,
  customer_email: String,
  products: Array,
  owner: {
    type: ObjectId,
    ref: 'User'
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;