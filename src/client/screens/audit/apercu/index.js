import React, { PureComponent } from 'react';
import { Text, View, FlatList, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import styles from './styles.css';

const DEFAULT_PROPS = {
  htmlStyles: CUSTOM_STYLES,
  renderers: CUSTOM_RENDERERS,
  imagesMaxWidth: IMAGES_MAX_WIDTH,
  onLinkPress: (evt, href) => { Linking.openURL(href); },
  debug: true
};

const html = '<html><body><h1>Hello world!</h1></body></html>';

const IMAGES_MAX_WIDTH = (1 - 1/3) * Dimensions.get('window').width;
const CUSTOM_STYLES = {};
const CUSTOM_RENDERERS = {};

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      documentName: '',
      clientName: '',
      lieuName: '',
      name: '',
      phoneFix: '',
      phonePortable: '',
      csv: null,
      liciel: null,
      kizeo: null,
    };
  }

  navigateTo = (arc, cb) => {
    this.props.getPfd();
  }

  render() {
    console.log(this.props);
    return (
      <View className={styles.containt}>
        <View className={styles.body}>
          <WebView source={{ html }} />;
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
