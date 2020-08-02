import React, { PureComponent } from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/screens/auth/styles.css';

import Layout from '../Layout';

class AuthComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      email: 'resdyyy3@body.email',
      password: 'req1dd12.body.password',
      loading: false,
      message: '',
    };
  }

  callBack = (res = {}) => {
    const { status } = res;
    this.setState({ loading: false });
    if (status === 201) {
      this.setState({ loading: false, message: 'Le mot de passe ou identifiant est incorrect.' });
    }
    console.log({ res });
  }

  /**
   * Function to signIn in the app
   *
   * @param {object} data Infos to login.
   * @param {function} callBack Func to execute after success action.
   */
  signIn = async () => {
    const { email, password } = this.state;
    this.setState({ loading: true, message: '' });
    this.props.signin({ email, password }, this.callBack);
  }

  render() {
    const { email, password, loading, message } = this.state;

    console.log({ props: this.props });
    return (
      <Layout>
        <View className={styles.containt}>
          <View className={styles.header}>
            <Text className={styles.tille}>Authentification</Text>
          </View>
          <View className={styles.body}>
            <View className={styles.viewNone} />
            <View className={styles.viewContainerTextInput}>
              <View className={styles.viewLabel}>
                <Text className={styles.textLabel}>Email</Text>
              </View>
              <View className={styles.viewTextInput}>
                <TextInput
                  className={styles.textInput}
                  placeholder='Email'
                  placeholderTextColor='#8190A5'
                  value={email}
                  onChangeText={(text) => this.setState({ email: text })}
                />
              </View>
            </View>
            <View className={styles.viewContainerTextInput}>
              <View className={styles.viewLabel}>
                <Text className={styles.textLabel}>Password</Text>
              </View>
              <View className={styles.viewTextInput}>
                <TextInput
                  className={styles.textInput}
                  placeholder='Password'
                  placeholderTextColor='#8190A5'
                  value={password}
                  onChangeText={(text) => this.setState({ password: text })}
                />
              </View>
            </View>
            <View>
              <Text className={styles.message}>{message}</Text>
            </View>
            <View className={styles.viewBtnSend}>
              <TouchableOpacity className={styles.btnSend} onPress={this.signIn}>
                {loading ? <ActivityIndicator size='large' color={'red'} style={{ paddingTop: 5, paddingBottom: 5 }} />
                : <Text className={styles.txtConnexion}>Connexion</Text>}
              </TouchableOpacity>
            </View>
          </View>
          <View className={styles.footer}>
            <View>
              <Text className={styles.mdpOublie}>Mot de passe oublié ?</Text>
            </View>
          </View>
        </View>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthComponent);
