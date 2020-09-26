export const trasformCSVKizeoArray = (csvArray) => {
  return csvArray.reduce((acc, curr) => {
    const csv = trasformCSVKizeo(curr);
    console.log({ csv });
    const { mur, plafond, portes } = csv;
    let newMur = [mur];
    let newPlafond = [plafond];
    let newPortes = [portes];
    if (acc.mur) {
      newMur = [...acc.mur, mur];
      newPlafond = [...acc.plafond, plafond];
      newPortes = [...acc.portes, portes];
    }
    return {
      ...csv,
      ...acc,
      mur: newMur,
      plafond: newPlafond,
      portes: newPortes,
    }
  }, {});
};

export const trasformCSVKizeo = i => {
  console.log({ i });
  return {
    photos: {
      photodelapagedegarde: i['Photodelapagedegarde:'],
      photodelafacade_Nord: i['Photodelafacadenord:'],
      photodelafacade_Est: i['PhotodelafaçadeEst:'],
      photodelafacade_Sud: i['PhotodelafaçadeSud:'],
      photodelafacade_Ouest: i['PhotodelafaçadeOuest:'],
      photosdiverses_titre: i['Photosdiverses#Titre'],
      photosdiverses_description: i['Photosdiverses#Description'],
      photosdiverses_photo: i['Photosdiverses#Photo'],
    },
    scenariosdetravaux: {
      scenario1: i['Scenariosdetravaux#Scenario1'],
      scenario2: i['Scenariosdetravaux#Scenario2'],
      scenario3: i['Scenariosdetravaux#Scenario3'],
      precisez: i['Scenariosdetravaux#Précisez'],
      precisez1: i['Scenariosdetravaux#Précisez:'],
      commentaires_Travauxenvisages: i['Commentaires:Travauxenvisagés'],
    },
    abonnementsetconsommations_Gazet_electricite: {
      abonnement : i['Abonnementsetconsommations(Gazetélectricité)#Abonnement'],
      indexabonnement : i['Abonnementsetconsommations(Gazetélectricité)#Indexabonnement:'],
      energie : i['Abonnementsetconsommations(Gazetélectricité)#Energie:'],
      nomdel_abonnement: ["Abonnementsetconsommations(Gazetélectricité)#Nomdel'abonnement?"],
      puissancesouscrite: i['Abonnementsetconsommations(Gazetélectricité)#Puissancesouscrite?'],
      usagedecette_energie: i['Abonnementsetconsommations(Gazetélectricité)#Usagedecetteénergie?'],
      consommationenkWhen2016: i['Abonnementsetconsommations(Gazetélectricité)#ConsommationenkWhen2016'],
      consommationeneurosen2016: i['Abonnementsetconsommations(Gazetélectricité)#Consommationeneurosen2016'],
      consommationenkWHen2017: i['Abonnementsetconsommations(Gazetélectricité)#ConsommationenkWHen2017'],
      consommationeneurosen2017: i['Abonnementsetconsommations(Gazetélectricité)#Consommationeneurosen2017'],
      consommationenkWhen2018: i['Abonnementsetconsommations(Gazetélectricité)#ConsommationenkWhen2018'],
      consommationeneurosen2018: i['Abonnementsetconsommations(Gazetélectricité)#Consommationeneurosen2018'],
      photo: i['Abonnementsetconsommations(Gazetélectricité)#Photo'],
      commentaires: i['Abonnementsetconsommations(Gazetélectricité)#Commentaires'],
    },
    saisiedele_eclairage: {
      piece: i['Saisiedelééclairage:#Pièce:'],
      liste: i['Saisiedelééclairage:#Liste'],
      duree_devie: i['Saisiedelééclairage:#Duréedevie(enheures):'],
      rendement_lumens: i['Saisiedelééclairage:#RendementLumens/watt'],
      commentaires: i['Saisiedelééclairage:#Commentaires'],
      photo: i['Saisiedelééclairage:#Photo'],
      casee_cochercachee: i['Saisiedelééclairage:#Caseàcochercachée'],
    },
    Il_y_a_t_il_une_installation_pour_la_cuisson: ["Ilyat'iluneinstallationpourlacuisson?"],
    photovoltaeque: {
      puissancecretedel_installation: i["Photovoltaïque:#Puissancecrêtedel'installation?"],
      y_a_t_il_uneinstallation_photovoltaeque: i["Yat'iluneinstallationphotovoltaïque?"],
      photo: i['Photovoltaïque:#Photo'],
      commentaires: i["Photovoltaïque:#Commentaires(nbrpanneaux,surfaced'unpanneau,...):"],
      installationventiles: i['Photovoltaïque:#Installationventilés?'],
      orientation: i['Photovoltaïque:#Orientation?'],
      inclinaisondesmodules: i['Photovoltaïque:#Inclinaisondesmodules?'],
    },
    climatisation: {
      il_y_a_t_il_uneinstallation_declimatisation: i["Ilyat'iluneinstallationdeclimatisation?"],
      Descriptiondel_installation: i[ "Climatisation:#Descriptiondel'installation:"],
      photo: i['Climatisation:#Photo'],
      commentaires: i['Climatisation:#Commentaires:'],
    },
    ventilation: {
      type: i['Ventilation:#Typedeventilation'],
      indexVentilation: i['Ventilation:#IndexVentilation'],
      famille: i['Ventilation:#Famille?'],
      reference: i['Ventilation:#Référence'],
      resume_de_la_saisi: i['Ventilation:#Résumédelasaisi:'],
      siconnu_puissancedu_des_ventilateurs: i['Ventilation:#Siconnu,puissancedu(des)ventilateurs(enW):'],
      nombredesalledebains: i['Ventilation:#Nombredesalledebains?'],
      nombred_autresalled_eau: i["Ventilation:#Nombred'autresalled'eau?"],
      nombredeWC: i['Ventilation:#NombredeWC?'],
      photo: i['Ventilation:#Photo'],
      commentaires: i['Ventilation:#Commentaires:'],
    },
    tableau: {
      Selection_de_la_production_d_ECS: i["Tableau#Sélectiondelaproductiond'ECS:"],
      IndexECS: i['Tableau#IndexECS'],
      Energie: i["Tableau#Energiepourl'ECS?"],
      Type: i['Tableau#Type:'],
      Enouhorsvolumechauffe: i['Tableau#Enouhorsvolumechauffé?'],
      resume_de_la_saisi: i['Tableau#Résumédelasaisi:'],
      marque_modele_ref: i['Tableau#Marque,Modèle,Réf:'],
      capaciteduballon: i['Tableau#Capacitéduballon(enL):'],
      photo: i['Tableau#Photo'],
      commentaires_ECSSolaireouautre: i['Tableau#Commentaires(ECSSolaireouautre):'],
      modedecuisson: i['Tableau#Modedecuisson?'],
      commentaire: i['Tableau#Commentaire:'],
      commentaires: i['Tableau#Commentaires:'],
      liste: i['Tableau#Liste:'],
      caracteristiques_techniques: i['Tableau#Caractéristiquestechniques'],
    },
    chauffage: {
      selection_du_generateur_de_chauffage: i['Chauffage#Sélectiondugénérateurdechauffage:'],
      index_generateur_chauffage: i['Chauffage#Indexgénérateurchauffage'],
      energie: i['Chauffage#Energie?'],
      type_de_generateur: i['Chauffage#Typedegénérateur?'],
      volume_chauffe_ou_hors_volume_chauffe: i['Chauffage#Volumechaufféouhorsvolumechauffé?'],
      resume_de_la_saisi: i['Chauffage#Résumédelasaisi:'],
      typed_emetteur: i["Chauffage#Typed'emetteur"],
      index_emetteur_chauffage: i['Chauffage#IndexémetteurChauffage:'],
      cesysteme_chauffe_toute_l_habitation: i["Chauffage#Cesystèmechauffetoutel'habitation?"],
      surface_chauffe_par_cesysteme: i['Chauffage#Surfacechaufféparcesystème?'],
      puissance: i['Chauffage#Puissance(enkW):'],
      photo: i['Chauffage#Photo'],
      commentaires: i['Chauffage#Commentaires(marque,modèle,référence,...):'],
    },
    portes: {
      codification_porte: i['Portes:#Codificationporte:'],
      selection_de_la_porte: i['Portes:#Sélectiondelaporte'],
      index_codification_ouvrants: i['Portes:#Indexcodificationouvrants:'],
      indexporte: i['Portes:#Indexporte:'],
      famille: i['Portes:#Famille:'],
      type: i['Portes:#Type:'],
      resume_de_la_saisi: i['Portes:#Résumédelasaisi:'],
      donnantsur: i['Portes:#Donnantsur:'],
      largeur: i['Portes:#Largeur(enm):'],
      hauteur: i['Portes:#Hauteur(enm):'],
      surface_de_la_porte: i['Portes:#Surfacedelaporte:'],
      photo: i['Portes:#Photo'],
      commentaires: i['Portes:#Commentaires:'],
    },
    fenetre_ou_porte_fenetres: {
      code: i['Fenêtreouporte-fenêtres:#Code'],
      indexfenetre: i['Fenêtreouporte-fenêtres:#Indexfenêtre:'],
      choixdelafenetre: i['Fenêtreouporte-fenêtres:#Indexfenêtre:'],
      famille: i['Fenêtreouporte-fenêtres:#Famille:'],
      typedefenetres: i['Fenêtreouporte-fenêtres:#Typedefenêtres:'],
      indexfenetres: i['Fenêtreouporte-fenêtres:#Indexfenêtres:'],
      materiau: i['Fenêtreouporte-fenêtres:#Matériau:'],
      typedevitrage: i['Fenêtreouporte-fenêtres:#Typedevitrage:'],
      epaisseurdelalamed: i["Fenêtreouporte-fenêtres:#Epaisseurdelalamed'air(ouduverrepourleSV):"],
      remplissagegaz: i['Fenêtreouporte-fenêtres:#Remplissagegaz:'],
      resumedelasaisi: i['Fenêtreouporte-fenêtres:#Résumédelasaisi:'],
      largeur: i['Fenêtreouporte-fenêtres:#Largeur(enm):'],
      hauteur: i['Fenêtreouporte-fenêtres:#Hauteur(enm):'],
      fermeture: i['Fenêtreouporte-fenêtres:#Fermeture(volet):'],
      indexfermeture: i['Fenêtreouporte-fenêtres:#Indexfermeture'],
      surfacedefenetredecetype: i['Fenêtreouporte-fenêtres:#Surfacedefenêtredecetype:'],
      photo: i['Fenêtreouporte-fenêtres:#Photo'],
      commentaires: i['Fenêtreouporte-fenêtres:#Commentaires:'],
    },
    plancherinter: {
      Designation: i['Plancherinter#Designation'],
      mediairelourdouleger: i['Plancherinter#Plancherintermédiairelourdouléger?'],
      photo: i['Plancherinter#Photo'],
      commentaires: i['Plancherinter#Commentaires:'],
    },
    plafond: {
      code: i['Plafonds#Code'],
      typeComblesperdus: i['Plafonds#Typedeplafond:Comblesperdus=surlocalnonchauffé,Comblesaménagés=Rampants'],
      indexmitoy: i['Plafonds#Indexmitoyplafonds'],
      localisation: i["Plafonds#Localisation:(Pourlespetitessurfacesdeplafondsspécifiques,mercid'indiquerleurpositionnementdanslamaison)"],
      typeplafonds: i['Plafonds#Typeplafonds'],
      type: i['Plafonds#Typedeplafonds:'],
      resume_de_la_saisi: i['Plafonds#Résumédelasaisi:'],
      indexi: i['Plafonds#Indexplafond:'],
      isolant_ou_nom: i['Plafonds#Isoléoupas?'],
      epaisseur_isolant: i["Plafonds#Épaisseurdel'isolant(encm)?"],
      siautre: i['Plafonds#Siautre,mercidedécrireaussiprécisémentquepossiblelacompositiondeceplafond:'],
      photo: i['Plafonds#Photo'],
      commentaires: i['Plafonds#Commentaires'],
      hauteur_sous_plafond_moyenne: i['Hauteursousplafondmoyenne(enm):'],
    },
    sols: {
      code: i['Sols#Code'],
      donnantsur: i["Sols#Donnantsur:(Pourlespetitessurfacesdesolsspécifiques,mercid'indiquerleurpositiondanslamaison)"],
      indexMitoyPlancher: i['Sols#IndexMitoyPlancher'],
      localisation: i['Sols#Localisation:'],
      typedeplancher: i['Sols#Typedeplancher:'],
      indexplancher: i['Sols#Indexplancher'],
      type: i['Sols#Type:'],
      isolant_ou_nom: i['Sols#Isoléounon?'],
      type_isolation: i["Sols#Typed'isolation"],
      epaisseur_isolant: i["Sols#Épaisseurdel'isolant(encm)?"],
      resume_de_la_saisi: i['Sols#Résumédelasaisi:'],
      siautre: i['Sols#Siautre,mercidedécrireaussiprécisémentquepossiblelacompositiondeceplancher:'],
      photo: i['Sols#Photo'],
      commentaires: i['Sols#Commentaires'],
    },
    mur: {
      code: i['Mur#Code'],
      couleur_sur_plan: ['Mur#Couleursurplan'],
      typede: i['Mur#Typedemur:'],
      indexmitoy: i['Mur#Indexmitoymur'],
      localisation: i["Mur#Localisationdumur?(S'ils'agitd'unpetitboutdemur,mercid'indiquerlapiècedanslaquelleilestprésent)"],
      selection: i['Mur#Sélectiondumur'],
      famille: i['Mur#Famille:'],
      type: i['Mur#Type:'],
      epaisseur: i['Mur#épaisseurdumur(structure):'],
      isole_ou_nom: i['Mur#Isoléounon?'],
      isolationparl: i["Mur#Isolationparl'extérieur?"],
      doublagebrique: i['Mur#Doublagebrique?'],
      index: i['Mur#Indexdumur(codificationinterne)?'],
      epaisseurdel: i["Mur#épaisseurdel'isolant(encm)?"],
      Siautre: i['Mur#Siautre,mercidedécrireaussiprécisémentquepossiblelacompositiondecemur:'],
      Photo: i['Mur#Photo'],
      commentaires: i['Mur#Commentaires:'],
    },
    informations_communes: {
      commune: i['Informationscommunes#Commune(saisirlecodepostal)'],
      codeInsee: i['Informationscommunes#CodeInseedelacommune'],
      altitude_moyenne: i['Informationscommunes#Altitudemoyennedelacommune'],
      region: i['Informationscommunes#Région'],
      code_departement: i['Informationscommunes#Codedépartement:'],
      statut: i['Informationscommunes#Statutdelacommune:'],
      departement: i['Informationscommunes#Département:'],
      superficie: i['Informationscommunes#Superficiedelacommune(enhectares):'],
      coeffa: i['Informationscommunes#Coeffa='],
      // "Informationscommunes#Populationenmilliersd'hab(en1997):": '1',
      zone_climatique: i['Informationscommunes#Zoneclimatique:'],
    },
    reference_dossier: {
      adresse: i['Adresse:Adresse'],
      codepostal: i['Adresse:Codepostal'],
      ville: i['Adresse:Ville'],
      pays: i['Adresse:Pays'],
    },
    esauditeur: {
      nom: i['Coordonnéesauditeur:#NOM:'],
      localite: i['Coordonnéesauditeur:#Localité:'],
      prenom: i['Coordonnéesauditeur:#Prénom:'],
      adresse: i['Coordonnéesauditeur:#Adrese:'],
      codepostal: i['Coordonnéesauditeur:#Codepostal:'],
      phone_fix: i['Coordonnéesauditeur:#Telfixe:'],
      phone_portable: i['Coordonnéesauditeur:#Portable:'],
      email: i['Coordonnéesauditeur:#Mail:'],
    },
    maitre_de_ouvrage: {
      nom: i["NomduMaîtred'ouvrage:"],
      civilite: i["CoordonnéesMaîtred'ouvrage#Civilité:"],
      prenom: i["CoordonnéesMaîtred'ouvrage#Prénom:"],
      c_adresse: i["CoordonnéesMaîtred'ouvrage#Adresse:"],
      codepostal: i["CoordonnéesMaîtred'ouvrage#Codepostal:"],
      vile: i["CoordonnéesMaîtred'ouvrage#Ville:"],
      phone: i["CoordonnéesMaîtred'ouvrage#Téléphone:"],
      email: i["CoordonnéesMaîtred'ouvrage#Mail:"],
      type_de_bien: i['Typedebienétudié:'],
      Occupant: i['Occupant?'],
      statut: i['Typedebienétudié:'] + ' ' + i['Occupant?'],
      nom_all: i["CoordonnéesMaîtred'ouvrage#Civilité:"] + ' ' + i["NomduMaîtred'ouvrage:"] + ' ' + i["CoordonnéesMaîtred'ouvrage#Prénom:"],
      adresse: i["CoordonnéesMaîtred'ouvrage#Adresse:"] + ' ' + i["CoordonnéesMaîtred'ouvrage#Codepostal:"] + ' ' + i["CoordonnéesMaîtred'ouvrage#Ville:"],
    },
    commentaires_divers: {
      commentaire: i['Commentairesdivers#Commentaire'],
      illustration: i['Commentairesdivers#Illustration'],
      dessin: i['Commentairesdivers#Dessin'],
    },
    nom: i['Nom'],
    prenom: i['Prénom'],
    date_de_reponse: i['Datederéponse'],
    caludede_perdition: i['Caluldedéperditionparpièce'],
    audit: i['Audit'],
    meme_coordonnees: i["Mémecoordonnnéesquelemaétred'ouvrage"],
    zone_cotiere: i['Zonecotière'],
    exposition_aux_vents: i['Expositionauxvents'],
    indexbatetudie: i['Indexbatetudie'],
    coefficient_b: i['Coefficientb'],
    type: i['Type'],
    altitude: i['Altitude(enm)sansvirgule:'],
    station_meteo: i['Stationmétéo(saisirlen°dedépartement)'],
    les_murs_derefendssonten: i['Lesmursderefendssonten?'],
    surface_totale_defenetre: i['Surfacetotaledefenêtre:'],
    somme_des_surfaces_desportes: i['Sommedessurfacesdesportes:'],
    presenced_un_programmateur: i["Présenced'unprogrammateur?"],
    photo: i['Photo'],
    Presenced_un_thermostat: i["Présenced'unthermostat?"],
    presencederobinetsthermostatiques: i['Présencederobinetsthermostatiques?'],
    presenced_une_sondede_temperature_exterieures: i["Présenced'unesondedetempératureextérieures?"],
    commentaires: i['Commentaires:'],
    objectifs_de_l_etude: i["Objectifsdel'étude:(plusieurschoixpossibles)"],
    des_travauxsont_ils_deja_envisages: i['Destravauxsont-ilsdèjàenvisagés?'],
    comment_jugez_vous_le_confortthermi_que_de_votre_logement_en_hiver: i['Commentjugez-vousleconfortthermiquedevotrelogementenhiver?'],
    comment_jugez_vous_le_confortthermi_que_de_votre_logement_en_ete: i['Commentjugez-vousleconfortthermiquedevotrelogementenété?'],
    comment_jugez_vous_le_confortthermi_que_de_votre_logement_en_intersaison: i['Commentjugez-vousleconfortthermiquedevotrelogementenintersaison?'],
    comment_jugez_vous_les_courants_d_airindesirableset_sources_d_inconfort_de_votre_logement: i["Commentjugez-vouslescourantsd'airindésirablesetsourcesd'inconfortdevotrelogement?"],
    comment_jugez_vous_l_humiditeausein_de_votre_logement: i["Commentjugez-vousl'humiditéauseindevotrelogement?"],
    mercid_indiquer_ici_les_consommations_des_trois_dernieres_annees_defioul: i["Mercid'indiquericilesconsommationsdestroisdernièresannéesdefioul:"],
    mercid_indiquer_ici_lesc_onsommations_des_trois_dernieres_annees_debois: i["Mercid'indiquericilesconsommationsdestroisdernièresannéesdebois:"],
    surface_chauffee: i['Surfacechauffée(enm²)?'],
    nombred_occupants: i["Nombred'occupants?"],
    agemoyen_des_occupants: i['Agemoyendesoccupants'],
    temperature_deconsigne_en_chauffe: i['Températuredeconsigneenchauffe?'],
    temperaturedeconsigneenreduit: i['Températuredeconsigneenréduit?'],
    nombre_de_semaine_inoccupationen_periode_de_chauffe: i['Nombredesemaineinoccupationenpériodedechauffe?'],
    nombre_de_semaines_inoccupation_hors_periodedechauffe: i['Nombredesemainesinoccupationhorspériodedechauffe?'],
    nombred_heures_de_presence_jour_lasemaine: i["Nombred'heuredeprésence/jourlasemaine"],
    nombred_heures_de_presence_jour_le_Week_end: i["Nombred'heuresdeprésence/jourleWeek-end?"],
    nombre_de_piecesaisie: ['Nombredepiècesaisie'],
    moyenne_de_la_duree_devie_de_l_eclairage: i["Moyennedeladuréedeviedel'éclairage:"],
    commentaire_du_reedevie_eclairage: i['Commentaireduréedevieeclairage'],
    moyenne_durendement_lumineux_de_votre_eclairage: i['Moyennedurendementlumineuxdevotreéclairage:'],
    commentaire_rendementlumineux: i['Commentairerendementlumineux'],
    vouspouveziciprendreplusieursphotosdesplans: i['Vouspouveziciprendreplusieursphotosdesplans.'],
    vouspouvezrealiserplusieurscroquisdel_habitationavecdesoutilspre_existants: i["Vouspouvezréaliserplusieurscroquisdel'habitationavecdesoutilspré-existants.vouspouvezaussichargerunephotodevotretéléphoneouenprendreune."],
    vouspouvezrealisericiuncroquisemainleveeetajouterunephotodevotreappareilouenprendreune: i['Vouspouvezréalisericiuncroquisàmainlevéeetajouterunephotodevotreappareilouenprendreune.'],
    geolocalisation: i['Géolocalisation'],
    DateetHeure: i['DateetHeure'],
    les_donneedeceformulairessontexlusivementre_serveeseThermiConseil: i["LesdonnéesdeceformulairessontexlusivementréservéesàThermiConseildanslecadredelaréalisationdel'AuditEnergétiquetelquedéfinitdanslebondecommande."],
    signaturede_l_auditeur: i["Signaturedel'auditeur"],
    Zonedetexte: i['Zonedetexte'],
    annee_de_construction: i['Annéedeconstruction:'],
    surface_habitable: i['Surfacehabitable(enm²):'],
  };
}

const infoG1_4 = (i, xml) => {
  const { surface_habitable, version_log, temp_ext_base_corrige, numero_departement } = xml;
  return {
    // CSV
    annee_de_construction: i['Annéedeconstruction:'],
    surface_habitable: i['Surfacehabitable(enm²):'],
    reference_dossier: {
      adresse: i['Adresse:Adresse'],
      codepostal: i['Adresse:Codepostal'],
      ville: i['Adresse:Ville'],
      pays: i['Adresse:Pays'],
    },
    maitre_de_ouvrage: {
      statut: i['Typedebienétudié:'] + ' ' + i['Occupant?'],
      nom_all: i["CoordonnéesMaîtred'ouvrage#Civilité:"] + ' ' + i["NomduMaîtred'ouvrage:"] + ' ' + i["CoordonnéesMaîtred'ouvrage#Prénom:"],
      adresse: i["CoordonnéesMaîtred'ouvrage#Adresse:"] + ' ' + i["CoordonnéesMaîtred'ouvrage#Codepostal:"] + ' ' + i["CoordonnéesMaîtred'ouvrage#Ville:"],
    },
    reference_dossier: {
      object: '', // Text Indentique
      adresse: i['Adresse:Adresse'],
      codepostal: i['Adresse:Codepostal'],
      ville: i['Adresse:Ville'],
      pays: i['Adresse:Pays'],
    },
    // XML
    surface_habitable, version_log, temp_ext_base_corrige, numero_departement,
  
    // A saisir
    bureau_d_etude: {
      // Nom bureau Etudes
      // Contact Thermi
      // Tel
      // Email
    }
  }
};

const infoG2_4 = (i, xml) => {
  const { zone_climatique, numero_departement, altitude } = xml;
  return {
    numero_departement,
    zone_climatique,
    altitude,
    // A saisir

    // CSV
    informations_communes: {
      coeffa: i['Informationscommunes#Coeffa='],
    },
    coefficient_b: i['Coefficientb'],
  }
};

const infoG3_4 = (i,) => {
  return {
    photos: {
      photodelapagedegarde: i['Photodelapagedegarde:'],
      photodelafacade_Nord: i['Photodelafacadenord:'],
      photodelafacade_Est: i['PhotodelafaéadeEst:'],
      photodelafacade_Sud: i['PhotodelafaéadeSud:'],
      photodelafacade_Ouest: i['PhotodelafaéadeOuest:'],
      photosdiverses_titre: i['Photosdiverses#Titre'],
      photosdiverses_description: i['Photosdiverses#Description'],
      photosdiverses_photo: i['Photosdiverses#Photo'],
    },
  }
};

const infoG4_4 = () => {
  return {
    // A saisir
    // image plan + sous titre
  }
};

// const infoG2_4 = (i, xml) => {
//   const { zone_climatique, numero_departement, altitude } = xml;
//   return {
//     numero_departement,
//     zone_climatique,
//     altitude,
//     // A saisir

//     // CSV
//     informations_communes: {
//       coeffa: i['Informationscommunes#Coeffa='],
//     },
//     coefficient_b: i['Coefficientb'],
//   }
// };

const rubrique3 = (xml) => {
  const { mur } = xml;
  return {
    mur,
    // A saisir
    // CONSTAT d’EXPERT
  }
};

export const trasformXML = ({ projet, _declaration }) => {
  const {
    donnees_climatiques, batiment, donnees_administratives,
  } = projet;
  return {
    version_log: donnees_administratives.version_log?._text,
    temp_ext_base_corrige: donnees_climatiques.temp_ext_base_corrige?._text,
    numero_departement: donnees_climatiques.numero_departement?._text,
    surface_habitable: batiment.caracteristique.surface_habitable?._text,
    zone_climatique: donnees_climatiques.zone_climatique?._text,
    altitude: donnees_climatiques.altitude?._text,
    mur: batiment.modification[0].enveloppe.liste_mur.mur,
    tot_conso_kwhepcarre_shab: batiment.modification[0].tot_conso_kwhepcarre_shab,
    tot_co2_etiq_mcarre_an: batiment.modification[0].tot_co2_etiq_mcarre_an,
    detail_deperdition: batiment.modification[0].detail_deperdition,
    modification: batiment.modification,
    // tot_cout_annuel: 
    _declaration,
    projet,
  }
};
