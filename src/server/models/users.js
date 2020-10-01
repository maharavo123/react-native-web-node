const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  role: {
    type: Number,
    required: true,
    enum: [1, 2],
    default: 1,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  adress: {
    type: String,
  },
  nom: {
    type: String,
  },
  phone: {
    type: String,
  },
  phone_fix: {
    type: String,
  },
  prenom: {
    type: String,
  },
  code_postal: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
});

// const User = mongoose.model('User', UserSchema);

module.exports = mongoose.models.Users || mongoose.model('Users', UserSchema);

// module.exports = User;
