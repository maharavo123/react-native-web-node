const mongoose = require('mongoose');

const AuditSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  etoile: {
    type: Number,
  },
  rubriques: [Number],
});

module.exports = mongoose.model('Audit', AuditSchema);
