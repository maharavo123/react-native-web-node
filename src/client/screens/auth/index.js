import React, { PureComponent } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from 'css/styles.css';

export default class AuthComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.initialSelected,
    };
  }

  render() {
    console.log({ props: this.props });

    return (
      <SafeAreaView className={styles.wrapper}>
        <ScrollView>
          <View className={styles.header}>
            <View className={styles.headerHeadings}>
              <Text className={styles.headerSpan}>Authentification</Text>
            </View>
            <View className={styles.headerNav}>
            </View>
          </View>
          <View className={styles.tabsWrapper}>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
