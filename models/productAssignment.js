const mongoose = require('mongoose');


const productAssignmentSchema = new mongoose.Schema({
  user: [ { type : ObjectId, ref: 'User' } ],
  product: [{ type: ObjectId, ref:'Product'}],
  productName: String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const ProductAssignment = mongoose.model('Product', productAssignmentSchema);

module.exports = ProductAssignment;