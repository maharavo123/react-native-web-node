import React, { PureComponent } from 'react';
import { Text, View, TextInput } from 'react-native';

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
        <View className={styles.containt}>
          <View className={styles.header}>
            <Text className={styles.tille}>Authentification</Text>
          </View>
          <View className={styles.body}>
            <View className={styles.viewTextInput}>
              <Text>Email</Text>
              <TextInput
                className={styles.textInput}
              />
            </View>
          </View>
          <View className={styles.footer}>
            <Text className={styles.tille}>Footer</Text>
          </View>
        </View>
      </Layout>
    );
  }
}
