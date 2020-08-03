import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/screens/folders/styles.css';

class FoldersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      search: '',
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
        <View className={styles.listContainers}>
          <ScrollView>
            {
              folders && folders.map(({ info_generale, _id }) => {
                console.log({ info_generale });
                if (!info_generale || !info_generale.maitre_ovrage) {
                  return <View key={_id} />;
                }
                const { maitre_ovrage, reference } = info_generale;
                const { adress_batiment, code, code_postal, objet } = reference;
                const { adress, statut, nom } = maitre_ovrage;
                return (
                  <View className={styles.item} key={`XXXXXXXXXXXXXX ${_id}`}>
                    <View className={styles.reference}>
                      <Text className={styles.labelText}>{code}</Text>
                      <Text className={styles.valueText}>{objet}</Text>
                      <Text className={styles.valueText}>{adress_batiment}</Text>
                      <Text className={styles.valueText}>{code_postal}</Text>
                    </View>
                    <View className={styles.maitreOuvrage}>
                      <Text className={styles.labelText}>Maître d’ouvrage</Text>
                      <Text className={styles.valueText}>{adress}</Text>
                      <Text className={styles.valueText}>{nom}</Text>
                      <Text className={styles.valueText}>{statut}</Text>
                    </View>
                  </View>
                );
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoldersScreen);
