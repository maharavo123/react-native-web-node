import React, { PureComponent } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
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
      csv: null,
      liciel: null,
      kizeo: null,
    };
  }

  navigateTo = (arc, cb) => {
    const { csv, liciel, kizeo } = this.state;
    console.log({ csv, liciel, kizeo });
    cb && typeof cb === 'function' && cb();
    this.props.getPfd(this.state);
    this.props.setFormAudit(this.state);
  }

  render() {
    console.log(this.props);
    return (
      <View className={styles.containt}>
        <View className={styles.body}>
          <View className={styles.corps}>
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
          <View className={styles.corps}>
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
          <View className={styles.corps}>
            <TitleInput title={'Import fichier'} />
            <InputContaint>
              <View className={styles.importFileView}>
                <ImportFile
                  label={'CSV'}
                  accept={'.csv'}
                  onAddfile={(csv) => this.setState({ csv })}
                  value={this.state.csv}
                />
                <ImportFile
                  label={'XLM kizeo'}
                  accept={'.xml'}
                  onAddfile={(kizeo) => this.setState({ kizeo, liciel: null })}
                  value={this.state.kizeo}
                />
                <ImportFile
                  label={'XLM liciel'}
                  accept={'.xml'}
                  onAddfile={(liciel) => this.setState({ liciel, kizeo: null })}
                  value={this.state.liciel}
                />
              </View>
            </InputContaint>
          </View>
          <View className={styles.corps}>
            <Navigate
              className={{}}
              style={{}}
              to={'/aperçu'}
              onPress={(arg, cb) => this.navigateTo(arg, cb)}
            >
              <View className={styles.selector} onTouchEnd={(e) => console.log({ e })}>
                <Image source={images.right_arrow} className={styles.right_arrow} />
                <Text>Valider</Text>
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
