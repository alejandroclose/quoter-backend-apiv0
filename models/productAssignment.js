const mongoose = require('mongoose');
var Product = mongoose.model('Product');


const productAssignmentSchema = new mongoose.Schema({
  // user string until auth
  user: String,
  product: { type: mongoose.Schema.ObjectId, ref: "Product" },
  productName: String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const ProductAssignment = mongoose.model('ProductAssignment', productAssignmentSchema);

module.exports = ProductAssignment;

