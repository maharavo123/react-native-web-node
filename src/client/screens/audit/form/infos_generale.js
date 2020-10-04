import React, { PureComponent } from 'react';
import { Text, View, FlatList, Image, ActivityIndicator, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import InputText, { ImportFile } from '../../../components/common/inputText';
import TitleInput, { InputContaint } from '../../../components/common/titleInput';
import Navigate from '../../../components/navigate';

import styles from './styles.css';

const dm = Dimensions.get('window').width;
const width_d = (73.8 * dm / 100);

const interlocuteur = [
  { id: 12, label: 'Nom et prénom*', state: 'nom_interlocuteur', default_value: '' },
  { id: 24, label: 'Telephone fixe', state: 'phone_fix_interlocuteur', default_value: '' },
  { id: 33, label: 'Telephone portable*', state: 'phone_interlocuteur', default_value: '' },
  { id: 32, label: 'Mail*', state: 'mail_interlocuteur', default_value: '' },
];

const bureau_d_etude = [
  { id: 12, label: 'Nom et prénom*', state: 'nom_bureau_d_etude', default_value: '' },
  { id: 33, label: 'Contact Thérmicien*', state: 'contact_bureau_d_etude', default_value: '' },
  { id: 24, label: 'Telephone Portable*', state: 'phone_bureau_d_etude', default_value: '' },
  { id: 32, label: 'Mail*', state: 'mail_bureau_d_etude', default_value: '' },
];

const document = [
  { id: 12, label: 'Nom et prénom*', state: 'nom_bureau_d_etude', default_value: '' },
  { id: 33, label: 'Contact Thérmicien*', state: 'contact_bureau_d_etude', default_value: '' },
  { id: 24, label: 'Telephone Portable*', state: 'phone_bureau_d_etude', default_value: '' },
  { id: 32, label: 'Mail*', state: 'mail_bureau_d_etude', default_value: '' },
];

const maitre_ouvrage = [
  { id: 12, label: 'Nom et prénom*', state: 'nom_maitre_ouvrage', default_value: '' },
  { id: 24, label: 'Adresse*', state: 'address_maitre_ouvrage', default_value: '' },
  { id: 33, label: 'Statut*', state: 'statut_maitre_ouvrage', default_value: '' },
];

const data_all = [
  {
    title: 'Maître d’ouvrage',
    items: maitre_ouvrage,
  },
  {
    title: 'Bureau d’étude',
    items: bureau_d_etude,
  },
  {
    title: 'Reference dossier',
    items: document,
  },
  {
    title: 'Information interlocuteur',
    items: interlocuteur,
  },
]
const initialStateInput = [...maitre_ouvrage, ...interlocuteur, ...bureau_d_etude].reduce((acc, { state, default_value }) =>
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
    });
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
          {
            data_all.map(({ items, title }) => {
              return (
                <View className={styles.corpsForm} key={title}>
                  <TitleInput title={title}  style={{ width: width_d }}/>
                  <InputContaint style={{ width: width_d }}>
                    <FlatList style={{ marginTop: 10, marginBottom: 10 }}
                      numColumns={2}
                      columnWrapperStyle={{ justifyContent: 'space-between' }}
                      data={items}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => {
                        return (
                          <InputText
                            label={item.label}
                            value={this.state[item.state]}
                            onChangeText={(text) => this.setState({ [item.state]: text })}
                            style={{ width: (width_d / 2) - 30 }}
                          />
                        )
                      }}
                    />
                  </InputContaint>
                </View>
              )
            })
          }
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
