import React, { PureComponent } from 'react';
import { Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import Navigate from '../../../components/navigate';

import styles from './styles.css';

const Rubriques = [
  { id: 1, name: '1- Préambule' },
  { id: 2, name: '2- Informations générale' },
  { id: 3, name: "3- Etat des lieux de l'existant" },
  { id: 4, name: "4- Audit énergetique de l'existant" },
  { id: 5, name: "5- Conclusion audit de l'existant" },
  { id: 6, name: "6- Plan de travaux énergetiques" },
  { id: 7, name: "7- Audits énergetique par scenario travaux" },
  { id: 8, name: "8- Bilan et synthèse comparative des 3 scénarios" },
];

class AuditNewScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rubriques: [],
      etoile: 1,
      _id: null,
    };
  }

  componentDidMount() {
    if (window.location && window.location.hash) {
      const params = window.location.hash.split('/');
      const id = params[params.length - 1];
      const audit = this.props.audit.list.find(i => i._id === id);
      if (audit) {
        this.setState(audit);
        return this.props.navigateHeader({ index: 1, name: "Création Audit Energétique > Modifier type d'audit" });
      }
    }
    this.props.navigateHeader({ index: 1, name: "Création Audit Energétique > Ajout type d'audit" });
  }

  callBack = (res, cb) => {
    this.setState({ loading: false });
    if (res && res.data) {
      cb && typeof cb === 'function' && cb();
    }
  }

  navigateTo = (_arc, cb) => {
    this.setState({ loading: true });
    const { _id, ...rubrique } = this.state;
    if (_id) {
      this.props.editAudit(this.state, (res) => this.callBack(res, cb));
    } else {
      this.props.addAudit(rubrique, (res) => this.callBack(res, cb));
    }
  }

  selectRubrique = (rubrique) => {
    const { rubriques } = this.state;
    if (rubriques.includes(rubrique)) {
      this.setState({ rubriques: rubriques.filter(i => i !== rubrique) });
    } else {
      this.setState({ rubriques: [...rubriques, rubrique] });
    }
  }

  validation = () => {
    const { name, rubriques, etoile } = this.state;
    return name.length > 2 && rubriques.length > 0 && etoile > 0
  };

  render() {
    const { name, rubriques, etoile } = this.state;
    return (
      <View className={styles.containtNew}>
        <View className={styles.bodyNew}>
          <View className={styles.auditViewName}>
            <View className={styles.new_audit_label}>
              <Text className={styles.new_audit_labelText}>Nom de l'audit :</Text>
            </View>
            <View>
              <TextInput
                value={name}
                onChangeText={(text) => this.setState({ name: text })}
                className={styles.new_audi_textInput}
              />
            </View>
          </View>
          <View className={styles.auditViewName}>
            <View className={styles.new_audit_label}>
              <Text className={styles.new_audit_labelText}>Rubrique inclus :</Text>
            </View>
            <View>
              {
                Rubriques.map(rubrique => {
                  return (
                    <View
                      key={`rubrique ${rubrique.id}`}
                      style={{ justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 5 }}
                    >
                      <TouchableOpacity onPress={() => this.selectRubrique(rubrique.id)}>
                        <View
                          style={{
                            height: 30,
                            width: 30,
                            borderRadius: 40,
                            backgroundColor: rubriques.includes(rubrique.id) ? '#2C7AC3' : 'white',
                            marginRight: 10
                          }} />
                      </TouchableOpacity>
                      <View style={{ justifyContent: 'center' }}>
                        <Text style={{}}>{rubrique.name}</Text>
                      </View>
                    </View>
                  );
                })
              }
            </View>
          </View>
          <View className={styles.auditViewName}>
            <View className={styles.new_audit_label}>
              <Text className={styles.new_audit_labelText}>Nombre étoile :</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <TextInput
                value={etoile}
                onChangeText={(text) => this.setState({ etoile: text })}
                style={{ backgroundColor: 'white', fontSize: 30 }}
                keyboardType='numeric'
              />
            </View>
          </View>
          <View className={styles.btnValider}>
            <Navigate
              className={{}}
              style={this.validation() ? { backgroundColor: '#2C7AC3', borderRadius: 10 } : { borderRadius: 10 }}
              to={'/audit'}
              onPress={(arg, cb) => this.navigateTo(arg, cb)}
              activeOpacity={this.validation() ? 0 : 1}
            >
              {this.state.loading ? <ActivityIndicator size='large' color='red' style={{ padding: 10 }} /> : <View className={styles.selectorbtnValider}>
                <Image source={images.right_arrow} className={styles.right_new} />
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
)(AuditNewScreen);
