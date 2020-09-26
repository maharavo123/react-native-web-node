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
// Abonnementsetconsommations(Gazetélectricité)#Abonnement: ""
// Abonnementsetconsommations(Gazetélectricité)#Commentaires: ""
// Abonnementsetconsommations(Gazetélectricité)#Consommationeneurosen2016: ""
// Abonnementsetconsommations(Gazetélectricité)#Consommationeneurosen2017: ""
// Abonnementsetconsommations(Gazetélectricité)#Consommationeneurosen2018: ""
// Abonnementsetconsommations(Gazetélectricité)#ConsommationenkWHen2017: ""
// Abonnementsetconsommations(Gazetélectricité)#ConsommationenkWhen2016: ""
// Abonnementsetconsommations(Gazetélectricité)#ConsommationenkWhen2018: ""
// Abonnementsetconsommations(Gazetélectricité)#Energie:: ""
// Abonnementsetconsommations(Gazetélectricité)#Indexabonnement:: ""
// Abonnementsetconsommations(Gazetélectricité)#Nomdel'abonnement?: ""
// Abonnementsetconsommations(Gazetélectricité)#Photo: ""
// Abonnementsetconsommations(Gazetélectricité)#Puissancesouscrite?: ""
// Abonnementsetconsommations(Gazetélectricité)#Usagedecetteénergie?: ""
// Adresse:Adresse: ""
// Adresse:Codepostal: ""
// Adresse:Pays: ""
// Adresse:Ville: ""
// Agemoyendesoccupants: "40"
// Altitude(enm)sansvirgule:: "338"
// Annéedeconstruction:: "1975"
// Audit: "Audit classique (non CITE)"
// Caluldedéperditionparpièce: "Non"
// Chauffage#Cesystèmechauffetoutel'habitation?: "Oui"
// Chauffage#Commentaires(marque,modèle,référence,...):: "Chaudière gaz condensation  De Dietrich INNOVENS MCA 25 BS 60"
// Chauffage#Energie?: "Gaz"
// Chauffage#Indexgénérateurchauffage: "42"
// Chauffage#IndexÉmetteurChauffage:: "2"
// Chauffage#Photo: "c37739f586281pu428671_20200608101625_2568.jpg"
// Chauffage#Puissance(enkW):: "25.5"
// Chauffage#Résumédelasaisi:: "Gaz-Chaudière gaz indivi condens-Générateur hors volume chauffé"
// Chauffage#Surfacechaufféparcesystème?: ""
// Chauffage#Sélectiondugénérateurdechauffage:: "Gaz-Chaudière gaz indivi condens-Générateur hors volume chauffé"
// Chauffage#Typed'emetteur: "Radiateurs avec vannes thermostatiques"
// Chauffage#Typedegénérateur?: "Chaudière gaz indivi condens"
// Chauffage#Volumechaufféouhorsvolumechauffé?: "Générateur hors volume chauffé"
// Climatisation:#Commentaires:: ""
// Climatisation:#Descriptiondel'installation:: ""
// Climatisation:#Photo: ""
// Coefficientb: "0.00"
// Commentaireduréedevieeclairage: "Très bon"
// Commentairerendementlumineux: "Très bon"
// Commentaires:: ""
// Commentaires:Travauxenvisagés: ""
// Commentairesdivers#Commentaire: ""
// Commentairesdivers#Dessin: ""
// Commentairesdivers#Illustration: ""
// Commentjugez-vousl'humiditéauseindevotrelogement?: "Satisfaisant"
// Commentjugez-vousleconfortthermiquedevotrelogementenhiver?: "Satisfaisant"
// Commentjugez-vousleconfortthermiquedevotrelogementenintersaison?: "Satisfaisant"
// Commentjugez-vousleconfortthermiquedevotrelogementenété?: "Satisfaisant"
// Commentjugez-vouslescourantsd'airindésirablesetsourcesd'inconfortdevotrelogement?: "Satisfaisant"
// CoordonnéesMaîtred'ouvrage#Adresse:: "10b Rue du Muhlele"
// CoordonnéesMaîtred'ouvrage#Civilité:: "Monsieur"
// CoordonnéesMaîtred'ouvrage#Codepostal:: "68140"
// CoordonnéesMaîtred'ouvrage#Mail:: ""
// CoordonnéesMaîtred'ouvrage#Nom:: "GARCIA"
// CoordonnéesMaîtred'ouvrage#Prénom:: ""
// CoordonnéesMaîtred'ouvrage#Téléphone:: "0000000000"
// CoordonnéesMaîtred'ouvrage#Ville:: "GUNSBACH"
// Coordonnéesauditeur:#Adrese:: "240 rue de cumène"
// Coordonnéesauditeur:#Codepostal:: "54000"
// Coordonnéesauditeur:#Localité:: "Neuves-maisons"
// Coordonnéesauditeur:#Mail:: "damien.hochard@thermiconseil.com"
// Coordonnéesauditeur:#NOM:: "HOCHARD"
// Coordonnéesauditeur:#Portable:: "09 52 11 30 44"
// Coordonnéesauditeur:#Prénom:: "Damien"
// Coordonnéesauditeur:#Telfixe:: "06 16 40 28 66"
// Datederéponse: "2020-06-08 10:23:14"
// DateetHeure: "2020-06-08 08:42"
// Destravauxsont-ilsdéjàenvisagés?: "Non"
// Expositionauxvents: "Moyennement exposé"
// Fenêtreouporte-fenêtres:#Choixdelafenêtre:: "Remplissage Argon ou Krypton"
// Fenêtreouporte-fenêtres:#Code: "F1"
// Fenêtreouporte-fenêtres:#Commentaires:: ""
// Fenêtreouporte-fenêtres:#Epaisseurdelalamed'air(ouduverrepourleSV):: "15 et +"
// Fenêtreouporte-fenêtres:#Famille:: "Fenêtres ou portes Fenêtres"
// Fenêtreouporte-fenêtres:#Fermeture(volet):: "Volet roulant alu"
// Fenêtreouporte-fenêtres:#Hauteur(enm):: "1.5"
// Fenêtreouporte-fenêtres:#Indexfenêtre:: "1"
// Fenêtreouporte-fenêtres:#Indexfenêtres:: "45"
// Fenêtreouporte-fenêtres:#Indexfermeture: "3"
// Fenêtreouporte-fenêtres:#Largeur(enm):: "1.5"
// Fenêtreouporte-fenêtres:#Matériau:: "PVC"
// Fenêtreouporte-fenêtres:#Photo: "c37739f586281pu428671_20200608095731_1920.jpg"
// Fenêtreouporte-fenêtres:#Remplissagegaz:: "Remplissage Argon ou Krypton"
// Fenêtreouporte-fenêtres:#Résumédelasaisi:: "Fenêtres ou portes Fenêtres-Fenêtres battante-PVC -Double vitrage-épaisseur de la lame d'air = 15 et +-Remplissage Argon ou Krypton"
// Fenêtreouporte-fenêtres:#Surfacedefenêtredecetype:: "2.25"
// Fenêtreouporte-fenêtres:#Typedefenêtres:: "Fenêtres battante"
// Fenêtreouporte-fenêtres:#Typedevitrage:: "Double vitrage"
// Géolocalisation: "Latitude : , Longitude : "
// Hauteursousplafondmoyenne(enm):: "2.5"
// Ilyat'iluneinstallationdeclimatisation?: "Non"
// Ilyat'iluneinstallationpourlacuisson?: "Oui"
// Indexbatetudie: "2"
// Informationscommunes#Altitudemoyennedelacommune: "591"
// Informationscommunes#CodeInseedelacommune: "68117"
// Informationscommunes#Codedépartement:: "68"
// Informationscommunes#Coeffa=: "1.3"
// Informationscommunes#Commune(saisirlecodepostal): "GUNSBACH"
// Informationscommunes#Département:: "HAUT-RHIN"
// Informationscommunes#Populationenmilliersd'hab(en1997):: "1"
// Informationscommunes#Région: "ALSACE"
// Informationscommunes#Statutdelacommune:: "Commune simple"
// Informationscommunes#Superficiedelacommune(enhectares):: "615"
// Informationscommunes#Zoneclimatique:: "H1b"
// LesdonnéesdeceformulairessontexlusivementréservéesàThermiConseildanslecadredelaréalisationdel'AuditEnergétiquetelquedéfinitdanslebondecommande.: "Je valide"
// Lesmursderefendssonten?: "Maconnerie"
// Mercid'indiquericilesconsommationsdestroisdernièresannéesdebois:: ""
// Mercid'indiquericilesconsommationsdestroisdernièresannéesdefioul:: ""
// Moyennedeladuréedeviedel'éclairage:: "70000.00"
// Moyennedurendementlumineuxdevotreéclairage:: "80.00"
// Mur#Code: "M1"
// Mur#Commentaires:: ""
// Mur#Couleursurplan: "Bleu"
// Mur#Doublagebrique?: "Absence de doublage brique avec lame d'air"
// Mur#Famille:: "Murs en béton"
// Mur#Indexdumur(codificationinterne)?: "264"
// Mur#Indexmitoymur: "1"
// Mur#Isolationparl'extérieur?: "Pas d'isolation par l'extérieur"
// Mur#Isoléounon?: "Murs non isolés"
// Mur#Localisationdumur?(S'ils'agitd'unpetitboutdemur,mercid'indiquerlapiècedanslaquelleilestprésent): ""
// Mur#Photo: "c37739f586281pu428671_20200608093424_1350.jpg"
// Mur#Siautre,mercidedécrireaussiprécisémentquepossiblelacompositiondecemur:: ""
// Mur#Sélectiondumur: "Murs en béton-Murs en blocs de béton pleins-30 cm-Murs non isolés-Pas d'isolation par l'extérieur-Absence de doublage brique avec lame d'air"
// Mur#Type:: "Murs en blocs de béton pleins"
// Mur#Typedemur:: "Mur extérieur"
// Mur#Épaisseurdel'isolant(encm)?: ""
// Mur#Épaisseurdumur(structure):: "30"
// Mêmecoordonnnéesquelemaîtred'ouvrage: "Oui"
// Nom: "Bureauétudes"
// Nombred'heuredeprésence/jourlasemaine: "12"
// Nombred'heuresdeprésence/jourleWeek-end?: "24"
// Nombred'occupants?: "2"
// Nombredepiècesaisie: "1"
// Nombredesemaineinoccupationenpériodedechauffe?: "2"
// Nombredesemainesinoccupationhorspériodedechauffe?: "2"
// NomduMaîtred'ouvrage:: "M. GARCIA"
// Objectifsdel'étude:(plusieurschoixpossibles): "Economie d'énergie"
// Occupant?: "Propriétaire occupant - Résidence principale"
// Photo: ""
// Photodelafacadenord:: ""
// PhotodelafaçadeEst:: ""
// PhotodelafaçadeOuest:: ""
// PhotodelafaçadeSud:: ""
// Photodelapagedegarde:: "c37739f586281pu428671_20200608102234_2828.jpg"
// Photosdiverses#Description: ""
// Photosdiverses#Photo: ""
// Photosdiverses#Titre: ""
// Photovoltaïque:#Commentaires(nbrpanneaux,surfaced'unpanneau,...):: ""
// Photovoltaïque:#Inclinaisondesmodules?: ""
// Photovoltaïque:#Installationventilés?: ""
// Photovoltaïque:#Orientation?: ""
// Photovoltaïque:#Photo: ""
// Photovoltaïque:#Puissancecrêtedel'installation?: ""
// Plafonds#Code: "T1"
// Plafonds#Commentaires:: ""
// Plafonds#Indexmitoyplafonds: "1"
// Plafonds#Indexplafond:: "20"
// Plafonds#Isoléoupas?: "Plafond non isolé"
// Plafonds#Localisation:(Pourlespetitessurfacesdeplafondsspécifiques,mercid'indiquerleurpositionnementdanslamaison): "Au dessus de la cuisine et au dessus du bureau"
// Plafonds#Photo: "c37739f586281pu428671_20200608095226_1864.jpg"
// Plafonds#Résumédelasaisi:: "Entrevous terre-cuite ou poutrelles en béton-Plafond non isolé"
// Plafonds#Siautre,mercidedécrireaussiprécisémentquepossiblelacompositiondeceplafond:: ""
// Plafonds#Typedeplafond:Comblesperdus=surlocalnonchauffé,Comblesaménagés=Rampants: "Terrasse"
// Plafonds#Typedeplafonds:: "Entrevous terre-cuite ou poutrelles en béton"
// Plafonds#Typeplafonds: "Entrevous terre-cuite ou poutrelles en béton-Plafond non isolé"
// Plafonds#Épaisseurdel'isolant(encm)?: ""
// Plancherinter#Commentaires:: ""
// Plancherinter#Designation: ""
// Plancherinter#Photo: ""
// Plancherinter#Plancherintermédiairelourdouléger?: "Plancher intermédiaire entrevous"
// Portes:#Codificationporte:: "P1"
// Portes:#Commentaires:: "Double vitrage < 30 %"
// Portes:#Donnantsur:: "Extérieur"
// Portes:#Famille:: "Porte simple en PVC"
// Portes:#Hauteur(enm):: "2.2"
// Portes:#Indexcodificationouvrants:: "71"
// Portes:#Indexporte:: "13"
// Portes:#Largeur(enm):: "1"
// Portes:#Photo: "c37739f586281pu428671_20200608101356_2439.jpg"
// Portes:#Résumédelasaisi:: "Porte simple en PVC-Opaque pleine simple"
// Portes:#Surfacedelaporte:: "2.20"
// Portes:#Sélectiondelaporte: "Opaque pleine simple"
// Portes:#Type:: "Opaque pleine simple"
// Prénom: "Bureauétudes"
// Présenced'unesondedetempératureextérieures?: "Oui"
// Présenced'unprogrammateur?: "Oui"
// Présenced'unthermostat?: "Oui"
// Présencederobinetsthermostatiques?: "Oui"
// Saisiedel’éclairage:#Caseàcochercachée: "Oui"
// Saisiedel’éclairage:#Commentaires: ""
// Saisiedel’éclairage:#Duréedevie(enheures):: "70000"
// Saisiedel’éclairage:#Liste: "LED"
// Saisiedel’éclairage:#Photo: ""
// Saisiedel’éclairage:#Pièce:: ""
// Saisiedel’éclairage:#RendementLumens/watt: "80"
// Scenariosdetravaux#Précisez: ""
// Scenariosdetravaux#Précisez:: ""
// Scenariosdetravaux#Scenario1: ""
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
      cesysteme_chauffe_toute_l_habitation: i["Chauffage#Cesystèmechauffetoutel'habitation?"],
      surface_chauffe_par_cesysteme: i['Chauffage#Surfacechauff�parcesystème?'],
      puissance: i['Chauffage#Puissance(enkW):'],
      photo: i['Chauffage#Photo'],
      commentaires: i['Chauffage#Commentaires(marque,modèle,r�f�rence,...):'],
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
    caludede_perdition: i['Caluldedéperditionparpièce'],
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
