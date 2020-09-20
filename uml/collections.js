export const Sections = [
  {
    _id: 1,
    numero: 1,
    name: 'Preabule',
    descpiption: '',
    key: 'preabule',
    sectionTypes: [1, 2, 3],
  },
  {
    _id: 2,
    numero: 2,
    name: 'Informations générales',
    descpiption: '',
    key: 'informations_generales',
    sectionTypes: [4, 5, 6, 7, 8],
  },
  {
    _id: 3,
    numero: 2,
    name: 'ETAT DES LIEUX DE L’EXISTANT',
    descpiption: '',
    key: 'parois',
    sectionTypes: [10],
  },
];

export const SectionTypes = [
  {
    _id: 1,
    name: 'Contexte',
    key: 'contexte',
    childrens: [
      {
        name: '',
        descpiption: '',
        type: String,
        pictos: null,
        key: 'name',
        styles: {},
      }
    ],
    styles: {},
  },
  {
    _id: 2,
    name: 'Objectifs',
    key: 'objectifs',
    childrens: [
      {
        name: 'objectifs1',
        descpiption: '',
        key: 'objectifs1',
        pictos: null,
        type: String,
        styles: {},
      },
      {
        name: 'objectifs2',
        descpiption: '',
        key: 'objectifs2',
        type: String,
        styles: {},
      },
      {
        name: 'objectifs3',
        descpiption: '',
        key: 'objectifs3',
        type: String,
        pictos: null,
        styles: {},
      }
    ],
    styles: {},
  },
  {
    _id: 3,
    name: 'Preabule3',
    descpiption: '',
    key: 'Preabule3',
    childrens: [],
    styles: {},
  },
  {
    _id: 6,
    name: 'Maître d’ouvrage',
    descpiption: '',
    key: 'maitre_d_ouvrage',
    childrens: [
      {
        name: 'NOM',
        descpiption: '',
        type: 'String',
        key: 'nom',
        pictos: null,
        styles: {},
      },
      {
        name: 'Adresse',
        descpiption: '',
        type: 'String',
        key: 'adresse',
        pictos: null,
        styles: {},
      },
    ],
    styles: {},
  },
  {
    _id: 8,
    name: 'Photo',
    key: 'photos',
    childrens: [
      {
        name: 'FACE',
        type: 'MultiMedias',
        descpiption: '',
        key: 'face',
        pictos: null,
        styles: {},
      },
      {
        name: 'Adresse',
        type: String,
        descpiption: '',
        key: 'adresse',
        pictos: null,
        styles: {},
      },
    ],
    styles: {},
  },
  {
    _id: 10,
    name: 'Descriptif des parois',
    descpiption: '',
    key: 'descriptif_parois',
    childrens: [
      {
        name: 'commentaires',
        type: 'string',
        descpiption: '',
        key: 'commentaires',
        pictos: null,
        styles: {},
      },
      {
        name: 'murs',
        type: 'MultiMedias',
        descpiption: '',
        key: 'face',
        pictos: null,
        styles: {},
      },
    ],
    styles: {},
  },
];

export const Types = [
  {
    _id: 1,
    name: 'Media',
    type: Media,
  },
  {
    _id: 1,
    name: 'Boolean',
    type: Boolean,
  },
  {
    _id: 1,
    name: 'Number',
    type: Number,
  },
  {
    _id: 1,
    name: 'Array',
    type: Array,
  },
];

export const Pictos = [
  {
    _id: 1,
    url: '',
  }
];

export const MultiMedias = [
  {
    _id: 1,
    images: [],
    descpiption: '',
    title: '',
  }
];

export const Images = [
  {
    _id: 1,
    url: '',
    name: '',
    descpiption: '',
    size: 0,
  }
];

const preabule = {
  contexte: {
    name: ''
  },
  objectifs: {
    objectifs1: {
      type: 'string',
    },
    objectifs2: {
      type: 'string',
    },
    objectifs3: {
      type: 'string',
    },
  }
};

const informations_generales = {
  maitre_d_ouvrage: {

  },
  photos: {
    face1: {
      type: 'MultiMedias',
    },
  }
};

const etats_de_existance = {
  descriptif_parois: {
    murs: {
      type: 'MultiMedias',
    },
  },
};

const example = {
  info_generale: {
    maitre_ovrage: {
      statut: 'string',
      adress: 'string',
      nom: 'string'
    },
    bureau_etude: {
      name: 'string',
      contact: 'string',
      adressElectronique: 'string'
    },
    reference: {
      code: 'string',
      code_postal: 'string',
      objet: 'string',
      adress_batiment: 'string',
      media: {
        type: 'string',
        url: 'string',
        name: 'string'
      }
    },
    zone_climatique: {
      media: {
        type: 'string',
        url: 'string',
        name: 'string'
      }
    },
    plan: {
      description: 'string',
      legende: 'string',
      media: {
        type: 'string',
        url: 'string',
        name: 'string'
      }
    },
    calculs: {
      logiciel: 'string',
      temps: 'string'
    },
    site_audit: {
      date: 'string',
      departement: 'string',
      surface_habitable: 'string',
      anne_construction: 'string'
    },
    photos_face: {
      nord: {
        description: 'string',
        video: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        photo: {
          type: 'string',
          url: 'string',
          name: 'string'
        }
      },
      sud: {
        description: 'string',
        video: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        photo: {
          type: 'string',
          url: 'string',
          name: 'string'
        }
      },
      ouest: {
        description: 'string',
        video: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        photo: {
          type: 'string',
          url: 'string',
          name: 'string'
        }
      },
      est: {
        description: 'string',
        video: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        photo: {
          type: 'string',
          url: 'string',
          name: 'string'
        }
      }
    }
  },
  etat_lieux_existants: {
    conditions_utilisation: {
      surface_chauffe: 'string',
      heures_presence: 'string',
      numbre_occupants: 'string',
      temperature: 'string'
    },
    descriptif_parois: {
      planchers: {
        description: 'string',
        composition: 'string',
        information: 'string',
        materiau: 'string',
        vitrage: 'string',
        surface: 'string',
        Uw: 'string',
        volet: 'string',
        epaisseur_lame_air: 'string',
        dimension: 'string',
        Ud: 'string',
        code: 'string',
        quantites: 'string',
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        performance: {
          key: 'string',
          description: 'string'
        }
      },
      plafonds: {
        description: 'string',
        composition: 'string',
        information: 'string',
        materiau: 'string',
        vitrage: 'string',
        surface: 'string',
        Uw: 'string',
        volet: 'string',
        epaisseur_lame_air: 'string',
        dimension: 'string',
        Ud: 'string',
        code: 'string',
        quantites: 'string',
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        performance: {
          key: 'string',
          description: 'string'
        }
      },
      murs: {
        description: 'string',
        composition: 'string',
        information: 'string',
        materiau: 'string',
        vitrage: 'string',
        surface: 'string',
        Uw: 'string',
        volet: 'string',
        epaisseur_lame_air: 'string',
        dimension: 'string',
        Ud: 'string',
        code: 'string',
        quantites: 'string',
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        performance: {
          key: 'string',
          description: 'string'
        }
      }
    },
    descriptif_system: {
      climatisation: {
        description: 'string',
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        performance: {
          key: 'string',
          description: 'string'
        }
      },
      eclairage: {
        type: 'string',
        dure_de_vie: 'string',
        efficacite: 'string',
        pice: 'string',
        performance: {
          key: 'string',
          description: 'string'
        },
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        }
      },
      ventilation: {
        descriptif: 'string',
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        performance: {
          key: 'string',
          description: 'string'
        }
      },
      eau_chaude_sanitaire: {
        description: 'string',
        quantites: 'string',
        lieu: 'string',
        volume_chauffe: 'string',
        performance: {
          key: 'string',
          description: 'string'
        },
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        }
      },
      chauffage_regulation: {
        type: 'string',
        marque: 'string',
        energie: 'string',
        commentaire: 'string',
        annex: 'string'
      }
    },
    decriptif_ouvrants: {
      portes: {
        description: 'string',
        composition: 'string',
        information: 'string',
        materiau: 'string',
        vitrage: 'string',
        surface: 'string',
        Uw: 'string',
        volet: 'string',
        epaisseur_lame_air: 'string',
        dimension: 'string',
        Ud: 'string',
        code: 'string',
        quantites: 'string',
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        performance: {
          key: 'string',
          description: 'string'
        }
      },
      fenetres: {
        description: 'string',
        composition: 'string',
        information: 'string',
        materiau: 'string',
        vitrage: 'string',
        surface: 'string',
        Uw: 'string',
        volet: 'string',
        epaisseur_lame_air: 'string',
        dimension: 'string',
        Ud: 'string',
        code: 'string',
        quantites: 'string',
        media: {
          type: 'string',
          url: 'string',
          name: 'string'
        },
        performance: {
          key: 'string',
          description: 'string'
        }
      }
    },
    ressenti_occupans: {
      question: 'string',
      resulta: 'string'
    }
  }
};
