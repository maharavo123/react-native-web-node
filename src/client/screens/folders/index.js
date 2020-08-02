import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/screens/folders/styles.css';

class FoldersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    console.log('this.props.getAllfolders ========>');
    this.props.getAllfolders(this.cb);
  }

  cb = (res) => {
    console.log({ res });
  }

  render() {
    const { folders } = this.props.folders;
    console.log({ folders });
    return (
      <View className={styles.containt}>
        <Text className={styles.textFull}>Folder</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoldersScreen);
