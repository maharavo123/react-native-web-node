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
  return {
    photos: {
      photodelapagedegarde: i['Photodelapagedegarde:'],
      photodelafacade_Nord: i['Photodelafacadenord:'],
      photodelafacade_Est: i['Photodelafa�adeEst:'],
      photodelafacade_Sud: i['Photodelafa�adeSud:'],
      photodelafacade_Ouest: i['Photodelafa�adeOuest:'],
      photosdiverses_titre: i['Photosdiverses#Titre'],
      photosdiverses_description: i['Photosdiverses#Description'],
      photosdiverses_photo: i['Photosdiverses#Photo'],
    },
    scenariosdetravaux: {
      scenario1: i['Scenariosdetravaux#Scenario1'],
      scenario2: i['Scenariosdetravaux#Scenario2'],
      scenario3: i['Scenariosdetravaux#Scenario3'],
      precisez: i['Scenariosdetravaux#Pr�cisez'],
      precisez1: i['Scenariosdetravaux#Pr�cisez:'],
      commentaires_Travauxenvisages: i['Commentaires:Travauxenvisag�s'],
    },
    abonnementsetconsommations_Gazet_electricite: {
      abonnement : i['Abonnementsetconsommations(Gazet�lectricit�)#Abonnement'],
      indexabonnement : i['Abonnementsetconsommations(Gazet�lectricit�)#Indexabonnement:'],
      energie : i['Abonnementsetconsommations(Gazet�lectricit�)#Energie:'],
      nomdel_abonnement: ["Abonnementsetconsommations(Gazet�lectricit�)#Nomdel'abonnement?"],
      puissancesouscrite: i['Abonnementsetconsommations(Gazet�lectricit�)#Puissancesouscrite?'],
      usagedecette_energie: i['Abonnementsetconsommations(Gazet�lectricit�)#Usagedecette�nergie?'],
      consommationenkWhen2016: i['Abonnementsetconsommations(Gazet�lectricit�)#ConsommationenkWhen2016'],
      consommationeneurosen2016: i['Abonnementsetconsommations(Gazet�lectricit�)#Consommationeneurosen2016'],
      consommationenkWHen2017: i['Abonnementsetconsommations(Gazet�lectricit�)#ConsommationenkWHen2017'],
      consommationeneurosen2017: i['Abonnementsetconsommations(Gazet�lectricit�)#Consommationeneurosen2017'],
      consommationenkWhen2018: i['Abonnementsetconsommations(Gazet�lectricit�)#ConsommationenkWhen2018'],
      consommationeneurosen2018: i['Abonnementsetconsommations(Gazet�lectricit�)#Consommationeneurosen2018'],
      photo: i['Abonnementsetconsommations(Gazet�lectricit�)#Photo'],
      commentaires: i['Abonnementsetconsommations(Gazet�lectricit�)#Commentaires'],
    },
    saisiedele_eclairage: {
      piece: i['Saisiedel��clairage:#Pi�ce:'],
      liste: i['Saisiedel��clairage:#Liste'],
      duree_devie: i['Saisiedel��clairage:#Dur�edevie(enheures):'],
      rendement_lumens: i['Saisiedel��clairage:#RendementLumens/watt'],
      commentaires: i['Saisiedel��clairage:#Commentaires'],
      photo: i['Saisiedel��clairage:#Photo'],
      casee_cochercachee: i['Saisiedel��clairage:#Case�cochercach�e'],
    },
    Il_y_a_t_il_une_installation_pour_la_cuisson: ["Ilyat'iluneinstallationpourlacuisson?"],
    photovoltaeque: {
      puissancecretedel_installation: i["Photovolta�que:#Puissancecr�tedel'installation?"],
      y_a_t_il_uneinstallation_photovoltaeque: i["Yat'iluneinstallationphotovolta�que?"],
      photo: i['Photovolta�que:#Photo'],
      commentaires: i["Photovolta�que:#Commentaires(nbrpanneaux,surfaced'unpanneau,...):"],
      installationventiles: i['Photovolta�que:#Installationventil�s?'],
      orientation: i['Photovolta�que:#Orientation?'],
      inclinaisondesmodules: i['Photovolta�que:#Inclinaisondesmodules?'],
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
      reference: i['Ventilation:#R�f�rence'],
      resume_de_la_saisi: i['Ventilation:#R�sum�delasaisi:'],
      siconnu_puissancedu_des_ventilateurs: i['Ventilation:#Siconnu,puissancedu(des)ventilateurs(enW):'],
      nombredesalledebains: i['Ventilation:#Nombredesalledebains?'],
      nombred_autresalled_eau: i["Ventilation:#Nombred'autresalled'eau?"],
      nombredeWC: i['Ventilation:#NombredeWC?'],
      photo: i['Ventilation:#Photo'],
      commentaires: i['Ventilation:#Commentaires:'],
    },
    tableau: {
      Selection_de_la_production_d_ECS: i["Tableau#S�lectiondelaproductiond'ECS:"],
      IndexECS: i['Tableau#IndexECS'],
      Energie: i["Tableau#Energiepourl'ECS?"],
      Type: i['Tableau#Type:'],
      Enouhorsvolumechauffe: i['Tableau#Enouhorsvolumechauff�?'],
      resume_de_la_saisi: i['Tableau#R�sum�delasaisi:'],
      marque_modele_ref: i['Tableau#Marque,Mod�le,R�f:'],
      capaciteduballon: i['Tableau#Capacit�duballon(enL):'],
      photo: i['Tableau#Photo'],
      commentaires_ECSSolaireouautre: i['Tableau#Commentaires(ECSSolaireouautre):'],
      modedecuisson: i['Tableau#Modedecuisson?'],
      commentaire: i['Tableau#Commentaire:'],
      commentaires: i['Tableau#Commentaires:'],
      liste: i['Tableau#Liste:'],
      caracteristiques_techniques: i['Tableau#Caract�ristiquestechniques'],
    },
    chauffage: {
      selection_du_generateur_de_chauffage: i['Chauffage#S�lectiondug�n�rateurdechauffage:'],
      index_generateur_chauffage: i['Chauffage#Indexg�n�rateurchauffage'],
      energie: i['Chauffage#Energie?'],
      type_de_generateur: i['Chauffage#Typedeg�n�rateur?'],
      volume_chauffe_ou_hors_volume_chauffe: i['Chauffage#Volumechauff�ouhorsvolumechauff�?'],
      resume_de_la_saisi: i['Chauffage#R�sum�delasaisi:'],
      typed_emetteur: i["Chauffage#Typed'emetteur"],
      index_emetteur_chauffage: i['Chauffage#Index�metteurChauffage:'],
      cesysteme_chauffe_toute_l_habitation: i["Chauffage#Cesyst�mechauffetoutel'habitation?"],
      surface_chauffe_par_cesysteme: i['Chauffage#Surfacechauff�parcesyst�me?'],
      puissance: i['Chauffage#Puissance(enkW):'],
      photo: i['Chauffage#Photo'],
      commentaires: i['Chauffage#Commentaires(marque,mod�le,r�f�rence,...):'],
    },
    portes: {
      codification_porte: i['Portes:#Codificationporte:'],
      selection_de_la_porte: i['Portes:#S�lectiondelaporte'],
      index_codification_ouvrants: i['Portes:#Indexcodificationouvrants:'],
      indexporte: i['Portes:#Indexporte:'],
      famille: i['Portes:#Famille:'],
      type: i['Portes:#Type:'],
      resume_de_la_saisi: i['Portes:#R�sum�delasaisi:'],
      donnantsur: i['Portes:#Donnantsur:'],
      largeur: i['Portes:#Largeur(enm):'],
      hauteur: i['Portes:#Hauteur(enm):'],
      surface_de_la_porte: i['Portes:#Surfacedelaporte:'],
      photo: i['Portes:#Photo'],
      commentaires: i['Portes:#Commentaires:'],
    },
    fenetre_ou_porte_fenetres: {
      code: i['Fen�treouporte-fen�tres:#Code'],
      indexfenetre: i['Fen�treouporte-fen�tres:#Indexfen�tre:'],
      choixdelafenetre: i['Fen�treouporte-fen�tres:#Indexfen�tre:'],
      famille: i['Fen�treouporte-fen�tres:#Famille:'],
      typedefenetres: i['Fen�treouporte-fen�tres:#Typedefen�tres:'],
      indexfenetres: i['Fen�treouporte-fen�tres:#Indexfen�tres:'],
      materiau: i['Fen�treouporte-fen�tres:#Mat�riau:'],
      typedevitrage: i['Fen�treouporte-fen�tres:#Typedevitrage:'],
      epaisseurdelalamed: i["Fen�treouporte-fen�tres:#Epaisseurdelalamed'air(ouduverrepourleSV):"],
      remplissagegaz: i['Fen�treouporte-fen�tres:#Remplissagegaz:'],
      resumedelasaisi: i['Fen�treouporte-fen�tres:#R�sum�delasaisi:'],
      largeur: i['Fen�treouporte-fen�tres:#Largeur(enm):'],
      hauteur: i['Fen�treouporte-fen�tres:#Hauteur(enm):'],
      fermeture: i['Fen�treouporte-fen�tres:#Fermeture(volet):'],
      indexfermeture: i['Fen�treouporte-fen�tres:#Indexfermeture'],
      surfacedefenetredecetype: i['Fen�treouporte-fen�tres:#Surfacedefen�tredecetype:'],
      photo: i['Fen�treouporte-fen�tres:#Photo'],
      commentaires: i['Fen�treouporte-fen�tres:#Commentaires:'],
    },
    plancherinter: {
      Designation: i['Plancherinter#Designation'],
      mediairelourdouleger: i['Plancherinter#Plancherinterm�diairelourdoul�ger?'],
      photo: i['Plancherinter#Photo'],
      commentaires: i['Plancherinter#Commentaires:'],
    },
    plafond: {
      code: i['Plafonds#Code'],
      typeComblesperdus: i['Plafonds#Typedeplafond:Comblesperdus=surlocalnonchauff�,Comblesam�nag�s=Rampants'],
      indexmitoy: i['Plafonds#Indexmitoyplafonds'],
      localisation: i["Plafonds#Localisation:(Pourlespetitessurfacesdeplafondssp�cifiques,mercid'indiquerleurpositionnementdanslamaison)"],
      typeplafonds: i['Plafonds#Typeplafonds'],
      type: i['Plafonds#Typedeplafonds:'],
      resume_de_la_saisi: i['Plafonds#R�sum�delasaisi:'],
      indexi: i['Plafonds#Indexplafond:'],
      isolant_ou_nom: i['Plafonds#Isol�oupas?'],
      epaisseur_isolant: i["Plafonds#�paisseurdel'isolant(encm)?"],
      siautre: i['Plafonds#Siautre,mercided�crireaussipr�cis�mentquepossiblelacompositiondeceplafond:'],
      photo: i['Plafonds#Photo'],
      commentaires: i['Plafonds#Commentaires'],
      hauteur_sous_plafond_moyenne: i['Hauteursousplafondmoyenne(enm):'],
    },
    sols: {
      code: i['Sols#Code'],
      donnantsur: i["Sols#Donnantsur:(Pourlespetitessurfacesdesolssp�cifiques,mercid'indiquerleurpositiondanslamaison)"],
      indexMitoyPlancher: i['Sols#IndexMitoyPlancher'],
      localisation: i['Sols#Localisation:'],
      typedeplancher: i['Sols#Typedeplancher:'],
      indexplancher: i['Sols#Indexplancher'],
      type: i['Sols#Type:'],
      isolant_ou_nom: i['Sols#Isol�ounon?'],
      type_isolation: i["Sols#Typed'isolation"],
      epaisseur_isolant: i["Sols#�paisseurdel'isolant(encm)?"],
      resume_de_la_saisi: i['Sols#R�sum�delasaisi:'],
      siautre: i['Sols#Siautre,mercided�crireaussipr�cis�mentquepossiblelacompositiondeceplancher:'],
      photo: i['Sols#Photo'],
      commentaires: i['Sols#Commentaires'],
    },
    mur: {
      code: i['Mur#Code'],
      couleur_sur_plan: ['Mur#Couleursurplan'],
      typede: i['Mur#Typedemur:'],
      indexmitoy: i['Mur#Indexmitoymur'],
      localisation: i["Mur#Localisationdumur?(S'ils'agitd'unpetitboutdemur,mercid'indiquerlapi�cedanslaquelleilestpr�sent)"],
      selection: i['Mur#S�lectiondumur'],
      famille: i['Mur#Famille:'],
      type: i['Mur#Type:'],
      epaisseur: i['Mur#�paisseurdumur(structure):'],
      isole_ou_nom: i['Mur#Isol�ounon?'],
      isolationparl: i["Mur#Isolationparl'ext�rieur?"],
      doublagebrique: i['Mur#Doublagebrique?'],
      index: i['Mur#Indexdumur(codificationinterne)?'],
      epaisseurdel: i["Mur#�paisseurdel'isolant(encm)?"],
      Siautre: i['Mur#Siautre,mercided�crireaussipr�cis�mentquepossiblelacompositiondecemur:'],
      Photo: i['Mur#Photo'],
      commentaires: i['Mur#Commentaires:'],
    },
    informations_communes: {
      commune: i['Informationscommunes#Commune(saisirlecodepostal)'],
      codeInsee: i['Informationscommunes#CodeInseedelacommune'],
      altitude_moyenne: i['Informationscommunes#Altitudemoyennedelacommune'],
      region: i['Informationscommunes#R�gion'],
      code_departement: i['Informationscommunes#Coded�partement:'],
      statut: i['Informationscommunes#Statutdelacommune:'],
      departement: i['Informationscommunes#D�partement:'],
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
      nom: i['Coordonn�esauditeur:#NOM:'],
      localite: i['Coordonn�esauditeur:#Localit�:'],
      prenom: i['Coordonn�esauditeur:#Pr�nom:'],
      adresse: i['Coordonn�esauditeur:#Adrese:'],
      codepostal: i['Coordonn�esauditeur:#Codepostal:'],
      phone_fix: i['Coordonn�esauditeur:#Telfixe:'],
      phone_portable: i['Coordonn�esauditeur:#Portable:'],
      email: i['Coordonn�esauditeur:#Mail:'],
    },
    maitre_de_ouvrage: {
      nom: i["NomduMa�tred'ouvrage:"],
      civilite: i["Coordonn�esMa�tred'ouvrage#Civilit�:"],
      prenom: i["Coordonn�esMa�tred'ouvrage#Pr�nom:"],
      c_adresse: i["Coordonn�esMa�tred'ouvrage#Adresse:"],
      codepostal: i["Coordonn�esMa�tred'ouvrage#Codepostal:"],
      vile: i["Coordonn�esMa�tred'ouvrage#Ville:"],
      phone: i["Coordonn�esMa�tred'ouvrage#T�l�phone:"],
      email: i["Coordonn�esMa�tred'ouvrage#Mail:"],
      type_de_bien: i['Typedebien�tudi�:'],
      Occupant: i['Occupant?'],
      statut: i['Typedebien�tudi�:'] + ' ' + i['Occupant?'],
      nom_all: i["Coordonn�esMa�tred'ouvrage#Civilit�:"] + ' ' + i["NomduMa�tred'ouvrage:"] + ' ' + i["Coordonn�esMa�tred'ouvrage#Pr�nom:"],
      adresse: i["Coordonn�esMa�tred'ouvrage#Adresse:"] + ' ' + i["Coordonn�esMa�tred'ouvrage#Codepostal:"] + ' ' + i["Coordonn�esMa�tred'ouvrage#Ville:"],
    },
    commentaires_divers: {
      commentaire: i['Commentairesdivers#Commentaire'],
      illustration: i['Commentairesdivers#Illustration'],
      dessin: i['Commentairesdivers#Dessin'],
    },
    nom: i['Nom'],
    prenom: i['Pr�nom'],
    date_de_reponse: i['Dateder�ponse'],
    caludede_perdition: i['Calulded�perditionparpi�ce'],
    audit: i['Audit'],
    meme_coordonnees: i["M�mecoordonnn�esquelema�tred'ouvrage"],
    zone_cotiere: i['Zonecoti�re'],
    exposition_aux_vents: i['Expositionauxvents'],
    indexbatetudie: i['Indexbatetudie'],
    coefficient_b: i['Coefficientb'],
    type: i['Type'],
    altitude: i['Altitude(enm)sansvirgule:'],
    station_meteo: i['Stationm�t�o(saisirlen�ded�partement)'],
    les_murs_derefendssonten: i['Lesmursderefendssonten?'],
    surface_totale_defenetre: i['Surfacetotaledefen�tre:'],
    somme_des_surfaces_desportes: i['Sommedessurfacesdesportes:'],
    presenced_un_programmateur: i["Pr�senced'unprogrammateur?"],
    photo: i['Photo'],
    Presenced_un_thermostat: i["Pr�senced'unthermostat?"],
    presencederobinetsthermostatiques: i['Pr�sencederobinetsthermostatiques?'],
    presenced_une_sondede_temperature_exterieures: i["Pr�senced'unesondedetemp�ratureext�rieures?"],
    commentaires: i['Commentaires:'],
    objectifs_de_l_etude: i["Objectifsdel'�tude:(plusieurschoixpossibles)"],
    des_travauxsont_ils_deja_envisages: i['Destravauxsont-ilsd�j�envisag�s?'],
    comment_jugez_vous_le_confortthermi_que_de_votre_logement_en_hiver: i['Commentjugez-vousleconfortthermiquedevotrelogementenhiver?'],
    comment_jugez_vous_le_confortthermi_que_de_votre_logement_en_ete: i['Commentjugez-vousleconfortthermiquedevotrelogementen�t�?'],
    comment_jugez_vous_le_confortthermi_que_de_votre_logement_en_intersaison: i['Commentjugez-vousleconfortthermiquedevotrelogementenintersaison?'],
    comment_jugez_vous_les_courants_d_airindesirableset_sources_d_inconfort_de_votre_logement: i["Commentjugez-vouslescourantsd'airind�sirablesetsourcesd'inconfortdevotrelogement?"],
    comment_jugez_vous_l_humiditeausein_de_votre_logement: i["Commentjugez-vousl'humidit�auseindevotrelogement?"],
    mercid_indiquer_ici_les_consommations_des_trois_dernieres_annees_defioul: i["Mercid'indiquericilesconsommationsdestroisderni�resann�esdefioul:"],
    mercid_indiquer_ici_lesc_onsommations_des_trois_dernieres_annees_debois: i["Mercid'indiquericilesconsommationsdestroisderni�resann�esdebois:"],
    surface_chauffee: i['Surfacechauff�e(enm�)?'],
    nombred_occupants: i["Nombred'occupants?"],
    agemoyen_des_occupants: i['Agemoyendesoccupants'],
    temperature_deconsigne_en_chauffe: i['Temp�raturedeconsigneenchauffe?'],
    temperaturedeconsigneenreduit: i['Temp�raturedeconsigneenr�duit?'],
    nombre_de_semaine_inoccupationen_periode_de_chauffe: i['Nombredesemaineinoccupationenp�riodedechauffe?'],
    nombre_de_semaines_inoccupation_hors_periodedechauffe: i['Nombredesemainesinoccupationhorsp�riodedechauffe?'],
    nombred_heures_de_presence_jour_lasemaine: i["Nombred'heuredepr�sence/jourlasemaine"],
    nombred_heures_de_presence_jour_le_Week_end: i["Nombred'heuresdepr�sence/jourleWeek-end?"],
    nombre_de_piecesaisie: ['Nombredepi�cesaisie'],
    moyenne_de_la_duree_devie_de_l_eclairage: i["Moyennedeladur�edeviedel'�clairage:"],
    commentaire_du_reedevie_eclairage: i['Commentairedur�edevieeclairage'],
    moyenne_durendement_lumineux_de_votre_eclairage: i['Moyennedurendementlumineuxdevotre�clairage:'],
    commentaire_rendementlumineux: i['Commentairerendementlumineux'],
    vouspouveziciprendreplusieursphotosdesplans: i['Vouspouveziciprendreplusieursphotosdesplans.'],
    vouspouvezrealiserplusieurscroquisdel_habitationavecdesoutilspre_existants: i["Vouspouvezr�aliserplusieurscroquisdel'habitationavecdesoutilspr�-existants.vouspouvezaussichargerunephotodevotret�l�phoneouenprendreune."],
    vouspouvezrealisericiuncroquisemainleveeetajouterunephotodevotreappareilouenprendreune: i['Vouspouvezr�alisericiuncroquis�mainlev�eetajouterunephotodevotreappareilouenprendreune.'],
    geolocalisation: i['G�olocalisation'],
    DateetHeure: i['DateetHeure'],
    les_donneedeceformulairessontexlusivementre_serveeseThermiConseil: i["Lesdonn�esdeceformulairessontexlusivementr�serv�es�ThermiConseildanslecadredelar�alisationdel'AuditEnerg�tiquetelqued�finitdanslebondecommande."],
    signaturede_l_auditeur: i["Signaturedel'auditeur"],
    Zonedetexte: i['Zonedetexte'],
    annee_de_construction: i['Ann�edeconstruction:'],
    surface_habitable: i['Surfacehabitable(enm�):'],
  };
}

const infoG1_4 = (i, xml) => {
  const { surface_habitable, version_log, temp_ext_base_corrige, numero_departement } = xml;
  return {
    // CSV
    annee_de_construction: i['Ann�edeconstruction:'],
    surface_habitable: i['Surfacehabitable(enm�):'],
    reference_dossier: {
      adresse: i['Adresse:Adresse'],
      codepostal: i['Adresse:Codepostal'],
      ville: i['Adresse:Ville'],
      pays: i['Adresse:Pays'],
    },
    maitre_de_ouvrage: {
      statut: i['Typedebien�tudi�:'] + ' ' + i['Occupant?'],
      nom_all: i["Coordonn�esMa�tred'ouvrage#Civilit�:"] + ' ' + i["NomduMa�tred'ouvrage:"] + ' ' + i["Coordonn�esMa�tred'ouvrage#Pr�nom:"],
      adresse: i["Coordonn�esMa�tred'ouvrage#Adresse:"] + ' ' + i["Coordonn�esMa�tred'ouvrage#Codepostal:"] + ' ' + i["Coordonn�esMa�tred'ouvrage#Ville:"],
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
      photodelafacade_Est: i['Photodelafa�adeEst:'],
      photodelafacade_Sud: i['Photodelafa�adeSud:'],
      photodelafacade_Ouest: i['Photodelafa�adeOuest:'],
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
