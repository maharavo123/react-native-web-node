import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from './styles.css';

// adress_client: "dsfsdfsdf"
// audits: ["5f763474a8b8f74c9ba8fea9"]
// code_client: "sdfsfsfsf"
// mail_client: "qsdqsdqsd@qsdqsdq"
// nom_client: "sdfsdfsd sdfsfsfs"
// onwer: "5f7609396ecd29364bda65cb"
// phone_client: "0888888888"
// reference_document: "sqsdqsdqs"
// type_audit: "Existant"
// vile_client: "dsfdfsdf"

class FoldersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      search: '',
    };
  }

  componentDidMount() {
    this.props.navigateHeader({ index: 2, name: 'Rechercher' });
    this.props.getAllfolders(this.cb);
  }

  cb = (res) => {
    console.log({ res });
  }

  render() {
    const { folder, folders } = this.props.folders;
    const { search } = this.state;
    console.log({ folder, folders });
    return (
      <View className={styles.containtFolders}>
        <View className={styles.bodyFolders}>
          <Text>List</Text>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoldersScreen);
