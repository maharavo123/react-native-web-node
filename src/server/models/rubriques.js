const mongoose = require('mongoose');

const RubriquesSchema = new mongoose.Schema({
  onwer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comptes',
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media',
  },
  rubrique1: {},
  rubrique2: {},
  rubrique3: {},
  rubrique4: {},
  rubrique5: {},
  rubrique6: {},
  rubrique7: {},
  rubrique8: {},
});

module.exports = mongoose.model('Rubriques', RubriquesSchema);
