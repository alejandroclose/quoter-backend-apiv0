const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;