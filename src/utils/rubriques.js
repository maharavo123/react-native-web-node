// 1- PREAMBULE
// 2- INFORMATIONS GENERALES
// 3 - ETAT DES LIEUX DE L’EXISTANT
// 3.1 Descriptif des parois
// 3.1.1 Murs
// 3.1.2 Planchers 
// 3.1.3 Plafonds/combles 
// 3.2 Descriptif des ouvrants 
// 3.2.1 Fenêtres/portes-fenêtres 
// 3.2.2 Portes
// 3.3 Descriptif des systèmes 
// 3.3.1 Chauffage/régulation - Emetteurs - Equipement Annexe 
// 3.3.2 Eau Chaude Sanitaire 
// 3.3.3 Ventilation 
// 3.3.4 Eclairage 
// 3.3.5 Climatisation 
// 3.3.6 Photovoltaique 
// 3.3.7 Autres (cuisson) 
// 3.4 Conditions d’utilisation 
// 3.5 Ressenti des occupants 
// 3.6 Synthèse 
// 4 – AUDIT ENERGETIQUE DE L’EXISTANT 
// 4.1 Résultats de l’existant 
// 4.2 Répartition des déperditions 
// 4.3 Consommations 
// 4.3.1 Consommations théoriques en énergie finale 
// 4.3.2 Comparatif des consommations théoriques versus réelles
// 5 – CONCLUSION AUDIT DE L’EXISTANT

export default [
  {
    id: 1,
    title: 'PREAMBULE',
  },
  {
    id: 2,
    title: 'INFORMATIONS GENERALES',
    children: [
      {
        id: 2.1,
        title: 'Maître d’ouvrage',
      },
      {
        id: 2.2,
        title: 'Bureau d’étude',
      },
      {
        id: 2.3,
        title: 'Référence de dossier',
      },
      {
        id: 2.4,
        title: 'Calculs',
      },
      {
        id: 2.5,
        title: 'Site Audité',
      },
      {
        id: 2.6,
        title: 'Zone Climatique',
      },
      {
        id: 2.7,
        title: 'Photos',
      },
      {
        id: 2.8,
        title: 'Import plan',
      }
    ]
  },
  {
    id: 3,
    title: 'ETAT DES LIEUX DE L’EXISTANT',
    children: [
      {
        id: 3.1,
        title: 'Descriptif des parois',
        children: [
          {
            id: '3.1.1',
            title: 'Murs',
          },
          {
            id: '3.1.2',
            title: 'Planchers',
          },
          {
            id: '3.1.3',
            title: 'Plafonds/combles',
          },
        ]
      },
      {
        id: 3.2,
        title: 'Descriptif des ouvrants',
        children: [
          {
            id: '3.2.1',
            title: 'Fenêtres / Portes-fenêtres',
          },
          {
            id: '3.2.2',
            title: 'Portes',
          },
        ]
      },
      {
        id: 3.3,
        title: 'Référence de dossier',
        children: [
          {
            id: '3.3.1',
            title: 'Chauffage/régulation - Emetteurs - Equipement Annexe',
          },
          {
            id: '3.3.2',
            title: 'Eau Chaude Sanitaire',
          },
          {
            id: '3.3.3',
            title: 'Ventilation',
          },
          {
            id: '3.3.4',
            title: 'Eclairage',
          },
          {
            id: '3.3.5',
            title: 'Ventilation',
          },
          {
            id: '3.3.6',
            title: 'Photovoltaique',
          },
          {
            id: '3.3.7',
            title: 'Autres (cuisson)',
          },
        ]
      },
      {
        id: 3.4,
        title: 'Conditions d’utilisation ',
      },
      {
        id: 3.5,
        title: 'Ressenti des occupants',
      },
      {
        id: 3.6,
        title: 'Synthèse',
      },
    ]
  },
  {
    id: 4,
    title: "AUDIT ENERGETIQUE DE L’EXISTANT",
    children: [
      {
        id: 4.1,
        title: 'Résultats de l’existant',
      },
      {
        id: 4.2,
        title: 'Répartition des déperditions',
      },
      {
        id: 4.3,
        title: 'Consommations',
        children: [
          {
            id: 1,
            title: 'Consommations théoriques en énergie finale',
          },
          {
            id: '4.3.2',
            title: 'Comparatif des consommations théoriques versus réelles',
          },
        ]
      },
    ],
  },
  {
    id: 1,
    title: 'CONCLUSION AUDIT DE L’EXISTANT',
  },
];
