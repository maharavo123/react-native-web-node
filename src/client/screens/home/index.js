import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/screens/home/styles.css';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  render() {
    console.log('Body', this.props);
    return (
      <View className={styles.containt}>
        <Text className={styles.textFull} numberOfLines={10}>Le secteur du bâtiment absorbe 45 % de la consommation d'énergie nationale et produit 27 % des émissions de gaz à effet de serre. Avec 7 à 8 millions de passoires thermiques (logements classés F ou G) en France, l’Etat s’est fixé comme objectif de rénover 500 000 logements par an.
          A l’horizon 2050, l’ambition de la France est d’atteindre la neutralité carbone. Ce qui consiste pour le secteur du bâtiment à la réalisation de rénovations des bâtiments existants au niveau label BBC.
          Pour rappel, un Bâtiment Basse Consommation est un logement qui consomme 80 kWhep/m2.an (Lettre A ou B de l’étiquette énergie).
          Actuellement, plus de la moitié des logements consomment entre 151 et 330 kWhep/m2.an (entre la lettre C et E) et plus du quart consomme plus de 330 kWhep/ m2.an (Lettre F ou G).
          🡪 L’enjeu majeur est donc la rénovation énergétique des bâtiments.
          Une rénovation énergétique est plus efficace et plus rentable si elle est globale. Les critères d’évaluation de l’efficacité énergétique d’une rénovation sont les suivants : économies d’énergie, amélioration de son confort l’hiver et/ou l’été, la valorisation de son patrimoine et la performance environnementale.</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
