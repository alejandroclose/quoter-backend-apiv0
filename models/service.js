const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const serviceSchema = new mongoose.Schema({
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

// Service.find({owner: 3})

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;