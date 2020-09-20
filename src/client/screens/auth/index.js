import React, { PureComponent } from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';
import Layout from '../Layout';
import styles from './styles.css';

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
    if (status === 200) {
      console.log('getAllfolders');
      this.props.getAllfolders();
    }
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

    return (
      <Layout>
        <View className={styles.containt}>
          <View className={styles.body}>
            <View className={styles.containtLogo}>
              <View />
              <View className={styles.viewLogo}>
                <Image
                  source={images.logo}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <View />
            </View>
            <View className={styles.containtForm}>
              <View />
              <View className={styles.viewForm}>
                <View className={styles.containtFormItem}>
                  <Text className={styles.textLogin}>Login*</Text>
                </View>
                <View className={styles.containtFormItem}>
                  <TextInput
                    className={styles.textInput}
                    placeholder='Email'
                    placeholderTextColor='#8190A5'
                    value={email}
                    onChangeText={(text) => this.setState({ email: text })}
                  />
                </View>
                <View className={styles.containtFormItem}>
                  <Text className={styles.textLogin}>Mot de passe*</Text>
                </View>
                <View className={styles.containtFormItem}>
                  <TextInput
                    className={styles.textInput}
                    placeholder='Password'
                    placeholderTextColor='#8190A5'
                    value={password}
                    onChangeText={(text) => this.setState({ password: text })}
                  />
                </View>
                <View className={styles.containtBtnConnex}>
                  <TouchableOpacity
                    className={styles.btnConnex}
                    onPress={this.signIn}
                  >
                    {loading ? <ActivityIndicator size='large' color={'red'} style={{ paddingTop: 5, paddingBottom: 5 }} />
                      : <Text className={styles.txtConnexion}>Connexion</Text>}
                  </TouchableOpacity>
                </View>
                <View className={styles.containtMdp}>
                  <TouchableOpacity>
                    <Text className={styles.textMDO}>Mot de passe oublié ?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View />
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
