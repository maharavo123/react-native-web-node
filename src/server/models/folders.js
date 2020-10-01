const mongoose = require('mongoose');

const FoldersSchema = new mongoose.Schema({
  onwer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comptes',
  },
  type_audit: {
    type: String,
  },
  nom_client: {
    type: String,
  },
  reference_document: {
    type: String,
  },
  code_client: {
    type: String,
  },
  adress_client: {
    type: String,
  },
  vile_client: {
    type: String,
  },
  mail_client: {
    type: String,
  },
  phone_client: {
    type: String,
  },
  interlocuteur: {},
  audits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rubriques',
  }],
  // info_generale: {
  //   maitre_ovrage: {
  //     type: Object,
  //   },
  //   bureau_etude: {
  //     type: Object,
  //   },
  //   reference: {
  //     type: Object,
  //   },
  //   zone_climatique: {
  //     type: Object,
  //   },
  //   plan: {
  //     type: Object,
  //   },
  //   calculs: {
  //     type: Object,
  //   },
  //   site_audit: {
  //     type: Object,
  //   },
  //   photos_face: {
  //     type: Object,
  //   },
  // },
  // etat_lieux_existants: {
  //   conditions_utilisation: {
  //     type: Object,
  //   },
  //   descriptif_parois: {
  //     type: Object,
  //   },
  //   descriptif_system: {
  //     type: Object,
  //   },
  //   decriptif_ouvrants: {
  //     type: Object,
  //   },
  //   ressenti_occupans: {
  //     type: Object,
  //   },
  // },
});

module.exports = mongoose.model('Folders', FoldersSchema);
