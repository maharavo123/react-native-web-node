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

const Headers = (props) => {
  const { history, navigation } = props;
  const goTo = name => {
    console.log({ name, props })
    if (name && history && history.go) {
      history.push('audit');
    }
    if (name && navigation && navigation.navigate) {
      navigation.navigate(name)
    }
  }

  return (
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
            <TouchableOpacity onPress={() => goTo('/')}>
              <Text className={styles.textItem}>Accueil</Text>
            </TouchableOpacity>
          </View>
          <View className={styles.itemNavigation} style={{ backgroundColor: 'white' }}>
          <TouchableOpacity onPress={() => goTo('audit')}>
            <Text className={styles.textItem}>Audit</Text>
            </TouchableOpacity>
          </View>
          <View className={styles.itemNavigation} style={{ backgroundColor: 'white' }}>
          <TouchableOpacity onPress={() => goTo()}>
            <Text className={styles.textItem}>Dossier</Text>
            </TouchableOpacity>
          </View>
          <View className={styles.itemNavigation} style={{ backgroundColor: 'white' }}>
          <TouchableOpacity onPress={() => goTo()}>
            <Text className={styles.textItem}>Mon compte</Text>
            </TouchableOpacity>
          </View>
        </View>}
      </View>
    </View>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Headers);
