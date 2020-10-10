import React, { useState } from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import {
  HashRouter as Router,
} from 'react-router-dom';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import Navigate from '../navigate';

import images from 'images';
import styles from './styles.css';

const colors = {
  activated: '#2C7AC3',
  noActive: 'white'
};

const Headers = (props) => {
  const { crud, users } = props;
  const { nom, prenom } = users.user;
  const redirect = (arg, cb, i) => {
    console.log({ arg, cb });
    cb && typeof cb === 'function' && cb();
  }

  const logout = (arg, cb) => {
    cb && typeof cb === 'function' && cb();
    props.logout();
  }

  const background = i => i === crud.navigate?.index || 0
    ? { backgroundColor: colors.activated }
    : { backgroundColor: colors.noActive };

  return (
    <View className={styles.containt}>
      <Router>
        <View className={styles.body}>
          <View className={styles.top}>
            <View className={styles.topLeft}>
              <Image
                source={images.logo}
                className={styles.thremi_png}
              />
            </View>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', paddingRight: 10 }}><Text>{nom} {prenom}</Text></View>
              <Navigate
                className={{}}
                style={{}}
                to={'/'}
                onPress={(arg, cb) => logout(arg, cb, 0)}
              >
                <Image
                  source={images.logout}
                  className={styles.logout_png}
                />
              </Navigate>
            </View>
          </View>
          <View className={styles.buttom}>
            <Navigate
              className={styles.itemNavigation}
              style={background(0)}
              to={'/'}
              onPress={(arg, cb) => redirect(arg, cb, 0)}
            >
              <Text className={styles.textItem}>Accueil</Text>
            </Navigate>
            <Navigate
              className={styles.itemNavigation}
              style={background(1)}
              to={'/audit'}
              onPress={(arg, cb) => redirect(arg, cb, 1)}
            >
              <Text className={styles.textItem}>Créer un audit</Text>
            </Navigate>
            <Navigate
              className={styles.itemNavigation}
              style={background(2)}
              to={'/dossiers'}
              onPress={(arg, cb) => redirect(arg, cb, 2)}
            >
              <Text className={styles.textItem}>Rechercher</Text>
            </Navigate>
            <Navigate
              className={styles.itemNavigation}
              style={background(3)}
              to={'/profile'}
              onPress={(arg, cb) => redirect(arg, cb, 3)}
            >
              <Text className={styles.textItem}>ACCES ADMIN</Text>
            </Navigate>
          </View>
        </View>
        <View className={styles.headerTitleView}>
          <Text className={styles.headerTitle}>{ crud.navigate?.name || 'Accueil'}</Text>
        </View>
      </Router>
    </View>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Headers);
