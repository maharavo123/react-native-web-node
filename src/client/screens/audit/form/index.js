import React, { PureComponent } from 'react';
import { Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import InputText, { ImportFile } from '../../../components/common/inputText';
import TitleInput, { InputContaint } from '../../../components/common/titleInput';
import Navigate from '../../../components/navigate';

import styles from './styles.css';

const inputT = [
  { id: 1, label: 'Nom du document*', state: 'documentName' },
  { id: 2, label: 'Nom du client*', state: 'clientName' },
  { id: 3, label: 'Nom du lieu*', state: 'lieuName' },
];

const inputT2 = [
  { id: 12, label: 'Nom et prénom*', state: 'name' },
  { id: 24, label: 'Telephone fixe*', state: 'phoneFix' },
  { id: 33, label: 'Telephone portable*', state: 'phonePortable' },
  { id: 32, label: 'Mail*', state: 'mail' },
];

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
      mail: '',
      csv: null,
      liciel: null,
      kizeo: null,
      xml: null,
      imagesAll: null,
      errors: false,
      loading: false,
    };
  }

  validation = () => {
    const { csv, xml, documentName, clientName, lieuName, name, phoneFix, phonePortable, mail  } = this.state;
    return csv && xml && documentName && clientName && lieuName && name && phoneFix && phonePortable && mail
      && documentName.length > 2 && clientName.length > 2 && lieuName.length > 2 && name.length > 2 && phoneFix.length > 2 && phonePortable.length > 2 && mail.length > 2
  }

  navigateTo = async (arc, cb) => {
    const { loading, liciel, kizeo, errors, imagesAll, ...inputForm } = this.state;
    if (loading) return;
    if (this.validation()) {
        this.setState({ loading: true });
        await this.props.getPfd(inputForm, () => cb && typeof cb === 'function' && cb());
        await this.props.setFormAudit(inputForm);
        this.setState({ loading: false });
    } else {
      this.setState({ errors: true });
    }
    console.log({ liciel, kizeo });
  }

  render() {
    console.log(this.state);
    return (
      <View className={styles.containtForm}>
        <View className={styles.bodyForm}>
          <View className={styles.corpsForm}>
            <TitleInput title={'Information du document'} />
            <InputContaint>
              <FlatList style={{ margin: 5 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={inputT}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <InputText
                      label={item.label}
                      value={this.state[item.state]}
                      onChangeText={(text) => this.setState({ [item.state]: text })}
                    />
                  )
                }}
              />
            </InputContaint>
          </View>
          <View className={styles.corpsForm}>
            <TitleInput title={'Information interlocuteur'} />
            <InputContaint>
              <FlatList style={{ margin: 5 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={inputT2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <InputText
                      label={item.label}
                      value={this.state[item.state]}
                      onChangeText={(text) => this.setState({ [item.state]: text })}
                    />
                  )
                }}
              />
            </InputContaint>
          </View>
          <View className={styles.corpsForm}>
            <TitleInput title={'Import fichier'} />
            <InputContaint>
              <View className={styles.importFileView}>
                <ImportFile
                  label={'CSV kizeo'}
                  accept={'.csv'}
                  multiple={false}
                  onAddfile={(kizeo) => this.setState({ kizeo, liciel: null, csv: kizeo })}
                  value={this.state.kizeo}
                />
                <ImportFile
                  label={'CSV liciel'}
                  accept={'.csv'}
                  multiple={false}
                  onAddfile={(liciel) => this.setState({ liciel, kizeo: null, csv: liciel })}
                  value={this.state.liciel}
                />
                <ImportFile
                  label={'XML'}
                  accept={'.xml'}
                  multiple={false}
                  onAddfile={(xml) => this.setState({ xml })}
                  value={this.state.xml}
                />
                <ImportFile
                  label={'Images'}
                  accept={'image/*'}
                  multiple
                  onAddfile={(imagesAll) => this.setState({ imagesAll })}
                  value={this.state.imagesAll}
                />
              </View>
            </InputContaint>
          </View>
          <View className={styles.corpsForm}>
            <Navigate
              className={{}}
              style={this.validation() ? { backgroundColor: '#2C7AC3', borderRadius: 10 } : { borderRadius: 10 }}
              to={'/aperçu'}
              onPress={(arg, cb) => this.navigateTo(arg, cb)}
              activeOpacity={this.validation() ? 0 : 1}
            >
              {this.state.loading ? <ActivityIndicator size='large' color='red' style={{ padding: 10 }} /> : <View className={styles.selectorForm}>
                <Image source={images.right_arrow} className={styles.right_arrow} />
                <Text>Valider</Text>
              </View>}
            </Navigate>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
