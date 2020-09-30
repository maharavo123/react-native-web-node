import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import styles from './styles.css';

class AuditScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.props.navigateHeader({ index: 0, name: 'Accueil' });
  }

  render() {
    return (
      <View className={styles.containt}>
        <View className={styles.body}>
          <View className={styles.itemView}>
            <Image
              source={images.audit}
              className={styles.icon}
            />
            <Text className={styles.name}>Créer un nouvel audit</Text>
          </View>
          <View className={styles.itemView}>
            <Image
              source={images.files}
              className={styles.icon}
            />
            <Text className={styles.name}>Rechercher un audit, un client, ....</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuditScreen);
