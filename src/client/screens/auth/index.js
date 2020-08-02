import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

import styles from 'css/screens/auth/styles.css';

import Layout from '../Layout';

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
      <Layout>
        <View className={{}}>
          <View className={{}}>
            <Text className={styles.tille}>Authentification</Text>
          </View>
        </View>
          {/* <View className={styles.tabsWrapper}>
          </View> */}
      </Layout>
    );
  }
}
