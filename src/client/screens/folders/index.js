import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/screens/folders/styles.css';

class FoldersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      search: ''
    };
  }

  componentDidMount() {
    this.props.getAllfolders(this.cb);
  }

  cb = (res) => {
    console.log({ res });
  }

  render() {
    const { folders } = this.props.folders;
    const { search } = this.state;

    console.log({ folders });
    return (
      <View className={styles.containt}>
        <View className={styles.searchContainers}>
          <View />
          <View className={styles.searchInput}>
            <TextInput
              className={styles.textInput}
              placeholder='Recherche'
              placeholderTextColor='#47525E'
              value={search}
              onChangeText={(text) => this.setState({ search: text })}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View  className={styles.listContainers}>

        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoldersScreen);
