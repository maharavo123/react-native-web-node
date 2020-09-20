import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView, ImageBackground, View } from 'react-native';

import styles from 'css/screens/layout.css';

import images from 'images';

export default class LayoutComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.initialSelected,
    };
  }

  render() {

    return (
      <SafeAreaView className={styles.wrapper}>
        <ScrollView>
          <View style={{ width: '100%', height: '100%' }}>
            {this.props.children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
