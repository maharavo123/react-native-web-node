import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/screens/home/styles.css';

class CompteScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  render() {
    console.log('CompteScreen');
    return (
      <View className={styles.containt}>
        <Text className={styles.textFull}>Compte</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompteScreen);
