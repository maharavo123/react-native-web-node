const mongoose = require('mongoose');

const ComptesSchema = new mongoose.Schema({
  rib: {
    type: String,
  },
  onwer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Comptes', ComptesSchema);

// module.exports = User;
