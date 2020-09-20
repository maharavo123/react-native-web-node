import React from 'react';
import {
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';
import styles from './styles.css';

const Headers = (props) => (
  <View className={styles.containt}>
    <View className={styles.body}>
      <View className={styles.top}>
        <View className={styles.topLeft}>
          <Image
            source={images.logo}
            className={styles.thremi_png}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => props.logout()}>
            <Image
              source={images.logout}
              className={styles.logout_png}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Headers);
