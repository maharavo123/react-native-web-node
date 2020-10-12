import React, { PureComponent } from 'react';
import { Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import InputText, { ImportFile } from '../../../components/common/inputText';
import { InputContaint, InputTextNotColor } from '../../../components/common/titleInput';
import Navigate from '../../../components/navigate';

import styles from './styles.css';

// type_audit

// const propsInput = {
//   keyboardType=''
// }

const inputLeft = [
  { id: 1, label: 'Référence du document*', state: 'reference_document', default_value: '' },
  { id: 2, label: 'Nom du client*', state: 'nom_client', default_value: '' },
];

const inputCenter = [
  { id: 155, label: 'Adresse*', state: 'adress_client', default_value: '' },
  { id: 254, label: 'Code postal*', state: 'code_client', default_value: 0 },
  { id: 366, label: 'Ville*', state: 'vile_client', default_value: '' },
];

const inputRigth = [
  { id: 336, label: 'Telephone portable*', state: 'phone_client', default_value: '' },
  { id: 323, label: 'Mail*', state: 'mail_client', default_value: '' },
];

const inputT2 = [
  { id: 12, label: 'Nom et prénom*', state: 'nom_interlocuteur', default_value: '' },
  { id: 24, label: 'Telephone fixe', state: 'phone_fix_interlocuteur', default_value: '' },
  { id: 33, label: 'Telephone portable*', state: 'phone_interlocuteur', default_value: '' },
  { id: 32, label: 'Mail*', state: 'mail_interlocuteur', default_value: '' },
];

const initialStateInput = [...inputLeft, ...inputCenter, ...inputRigth].reduce((acc, { state, default_value }) =>
  ({ ...acc, [state]: default_value }), {})

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...initialStateInput,
      type_audit: 'Existant',
      csv: null,
      liciel: null,
      kizeo: null,
      couverture: null,
      xml: null,
      imagesAll: null,
      errors: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.props.navigateHeader({ index: 1, name: "Création Audit Energétique > Fiche Audit" });
    const { nom, prenom, phone, phone_fix, email } = this.props.users.user;
    this.setState({
      nom_interlocuteur: nom + ' ' + prenom,
      phone_fix_interlocuteur: phone_fix,
      phone_interlocuteur: phone,
      mail_interlocuteur: email,
    });
  }

  validation = () => {
    return !Object.keys(initialStateInput).some(i => {
      const state = this.state[i];
      return (!state || state.length < 4);
    }) && this.state.csv && this.state.xml && (couverture === null || couverture);
  }

  navigateTo = async (_arc, cb) => {
    const { loading, liciel, kizeo, errors, imagesAll, ...inputForm } = this.state;
    if (loading) return;
    if (this.validation()) {
      this.setState({ loading: true });
      await this.props.getPfd(inputForm, () => cb && typeof cb === 'function' && cb());
      await this.props.setFormAudit(inputForm);
      await this.props.createFolder(inputForm);
      this.setState({ loading: false });
    } else {
      this.setState({ errors: true });
    }
  }

  render() {
    return (
      <View className={styles.containtForm}>
        <View className={styles.bodyForm}>
          <View className={styles.corpsForm}>
            <InputTextNotColor title={'Information du document'} />
            <InputContaint>
              <View style={{ justifyContent: 'center', flexDirection: 'column', flex: 1, marginTop: 10, marginBottom: 10 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                  {
                    inputLeft.map(input => {
                      return (
                        <InputText
                          columns={2}
                          key={input.id}
                          label={input.label}
                          value={this.state[input.state]}
                          onChangeText={(text) => this.setState({ [input.state]: text })}
                        />
                      )
                    })
                  }
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                  {
                    inputCenter.map(input => {
                      return (
                        <InputText
                          columns={3}
                          key={input.id}
                          label={input.label}
                          value={this.state[input.state]}
                          onChangeText={(text) => this.setState({ [input.state]: text })}
                        />
                      )
                    })
                  }
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                  {
                    inputRigth.map(input => {
                      return (
                        <InputText
                          columns={2}
                          key={input.id}
                          label={input.label}
                          value={this.state[input.state]}
                          onChangeText={(text) => this.setState({ [input.state]: text })}
                        />
                      )
                    })
                  }
                </View>
              </View>
            </InputContaint>
          </View>
          <View className={styles.corpsForm}>
            <InputTextNotColor title={'Information interlocuteur'} />
            <InputContaint>
              <FlatList style={{ marginTop: 10, marginBottom: 10 }}
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
            <InputTextNotColor title={'Import fichier'} />
            <InputContaint>
              <View
                className={styles.importFileView}
                style={{ flex: 1, padding: 15, marginRight: 100, marginLeft: 100 }}>
                <ImportFile
                  label={'Photo Couvrture'}
                  accept={'.image/*'}
                  multiple={false}
                  onAddfile={(couverture) => this.setState({ couverture })}
                  value={this.state.couverture}
                  checkBox
                />
                <ImportFile
                  label={'CSV kizeo'}
                  accept={'.csv'}
                  multiple={false}
                  onAddfile={(kizeo) => this.setState({ kizeo, liciel: null, csv: kizeo })}
                  value={this.state.kizeo}
                  checkBox
                />
                <ImportFile
                  label={'CSV liciel'}
                  accept={'.csv'}
                  multiple={false}
                  onAddfile={(liciel) => this.setState({ liciel, kizeo: null, csv: liciel })}
                  value={this.state.liciel}
                  checkBox
                />
                <ImportFile
                  checkBox
                  label={'XML'}
                  accept={'.xml'}
                  multiple={false}
                  onAddfile={(xml) => this.setState({ xml })}
                  value={this.state.xml}
                />
                <ImportFile
                  checkBox
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
              <View className={styles.selectorForm}>
                {this.state.loading
                  ? <ActivityIndicator size='large' color='red' style={{ padding: 10 }} />
                  : <Text>Valider</Text>
                }
              </View>
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
