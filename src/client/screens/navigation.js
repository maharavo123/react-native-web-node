import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/layoutApp.css';
import images from 'images';
import { Icon } from '../ressources/Icon';

import Home from './home';
import Contact from './contact';
import Dossiers from './folders';
import Comptes from './comptes';

const pages = ['Accueil', 'Dossiers', 'Compte', 'Contact'];

class LayoutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      tilte: pages[0],
      body: <Home {...this.props}/>,
    };
  }

  navigation = (selected) => {
    const tilte = pages[selected];
    this.setState({ tilte, selected });
    switch (selected) {
    case 0:
      return this.setState({ body: <Home {...this.props} navigation={this.navigation} /> });
    case 1:
      return this.setState({ body: <Dossiers {...this.props} navigation={this.navigation} /> });
    case 2:
      return this.setState({ body: <Comptes {...this.props} navigation={this.navigation} /> });
    case 3:
      return this.setState({ body: <Contact {...this.props} navigation={this.navigation} /> });
    case 4:
      return this.setState({ body: <Home {...this.props} navigation={this.navigation} /> });
    default:
      return this.setState({ body: <Home {...this.props} navigation={this.navigation} /> });
    }
  }

  render() {

    const { selected, tilte, body } = this.state;

    return (
      <SafeAreaView className={styles.wrapper}>
        <ImageBackground
          source={images.layout}
          style={{ width: '100%', height: '100%' }}
        >
          <View className={styles.contaniers}>
            <View className={styles.nav}>
              <View className={styles.logo}>
                <Image
                  source={images.home}
                  className={styles.logoImage}
                  resizeMode='cover'
                />
              </View>
              <View className={styles.itemNav}>
                {
                  pages.map((item, key) => (
                    <View className={styles.itemNavView} key={`map ${key}`}>
                      <TouchableOpacity onPress={() => this.navigation(key)}>
                        <Text className={styles.itemNavText}>{item}</Text>
                      </TouchableOpacity>
                    </View>
                  ))
                }
              </View>
            </View>
            <View className={styles.body}>
              <View className={styles.header}>
                <View />
                <View>
                  <Text className={styles.title}>{tilte}</Text>
                </View>
                <View className={styles.iconView}>
                  <TouchableOpacity onPress={() => this.props.logout()}>
                    <Icon
                      name={'drinks'}
                      size={30}
                      className={selected === 0 ? styles.currentIcon : styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className={styles.corps}>
                {body}
              </View>
            </View>
            <View className={styles.footer}>
              <View className={styles.iconView}>
                <TouchableOpacity onPress={() => this.navigation(0)}>
                  <Icon
                    name={'shop'}
                    size={40}
                    className={selected === 0 ? styles.currentIcon : styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View className={styles.iconView}>
                <TouchableOpacity onPress={() => this.navigation(1)}>
                  <Icon
                    name={'lab'}
                    size={40}
                    className={selected === 1 ? styles.currentIcon : styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View className={styles.iconView}>
                <TouchableOpacity onPress={() => this.navigation(2)}>
                  <Icon
                    name={'archive'}
                    size={40}
                    className={selected === 2 ? styles.currentIcon : styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View className={styles.iconView}>
                <TouchableOpacity onPress={() => this.navigation(3)}>
                  <Icon
                    name={'drop'}
                    size={40}
                    className={selected === 3 ? styles.currentIcon : styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutApp);
