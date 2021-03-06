import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from './styles.css';

import Headers from '../components/headers';
import Routes from './routes.web';
import history from './history';

class LayoutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView className={styles.wrapper}>
        <View className={styles.containt}>
          <Headers {...this.props} history={history} />
          <Routes {...this.props} />
        </View>
      </ScrollView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutApp);
