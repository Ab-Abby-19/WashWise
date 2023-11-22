const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  hostel: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;