import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import styles from 'css/screens/layout.css';

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
          {this.props.children}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
