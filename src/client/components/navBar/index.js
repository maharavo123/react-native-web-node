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

const NavBar = (props) => (
  <View className={styles.containt}>
    <View className={styles.body}>
      <View className={styles.itemLogo}>
        <Image
          source={images.home}
          className={styles.home}
        />
      </View>
      <View className={styles.itemView}>
        <Text className={styles.itemText}>Préambule</Text>
      </View>
      <View className={styles.itemView}>
        <Text className={styles.itemText}>Informations génerale</Text>
      </View>
      <View className={styles.itemView}>
        <Text className={styles.itemText}>Etat des lieux</Text>
      </View>
      <View className={styles.itemView}>
        <Text className={styles.itemText}>Audit énergetique</Text>
      </View>
      <View className={styles.itemView}>
        <Text className={styles.itemText}>Conclusion audit</Text>
      </View>
      <View className={styles.itemView}>
        <Text className={styles.itemText}>Aperçu pdf</Text>
      </View>
    </View>
  </View>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
