import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { Link } from 'react-router-dom';

const isWeb = Platform.OS === 'web';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class NoMatch extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  }

  static path = 'feed';

  render() {
    return <View style={styles.container}>
      <Text>This is the 404 screen !</Text>
      {
        !isWeb ? <Button
          title="Go to Auth"
          onPress={() => this.props.navigation.navigate('Auth')}
        /> : <Link to="Auth">Go Profile</Link>

      }
    </View>;
  }
}
