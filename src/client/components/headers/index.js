import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  Platform,
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
      {Platform.OS === 'web' && <View className={styles.buttom}>
        <View className={styles.itemNavigation} style={{ backgroundColor: '#2C7AC3' }}>
          <Text className={styles.textItem}>Accueil</Text>
        </View>
        <View className={styles.itemNavigation} style={{ backgroundColor: 'white' }}>
          <Text className={styles.textItem}>Audit</Text>
        </View>
        <View className={styles.itemNavigation} style={{ backgroundColor: 'white' }}>
          <Text className={styles.textItem}>Dossier</Text>
        </View>
        <View className={styles.itemNavigation} style={{ backgroundColor: 'white' }}>
          <Text className={styles.textItem}>Mon compte</Text>
        </View>
      </View>}
    </View>
  </View>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Headers);
