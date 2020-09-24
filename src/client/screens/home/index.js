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

  render() {
    return (
      <View className={styles.containt}>
        <View className={styles.body}>
          <View className={styles.itemView}>
            <Image
              source={images.audit}
              className={styles.icon}
            />
            <Text className={styles.name}>Nouvelle audits</Text>
          </View>
          <View className={styles.itemView}>
            <Image
              source={images.files}
              className={styles.icon}
            />
            <Text className={styles.name}>Consulter un dossier</Text>
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
