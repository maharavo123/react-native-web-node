import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from './styles.css';

import Headers from '../components/headers';
import NavBar from '../components/navBar';
import Routes from './routes.web';

class LayoutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <SafeAreaView className={styles.wrapper}>
        <View className={styles.containt}>
          <View className={styles.body}>
            <Headers {...this.props}/>
            <View className={styles.corps}>
              <NavBar />
              <Routes {...this.props} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutApp);
