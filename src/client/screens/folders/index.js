import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Select from 'react-select';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import Loader from '../../components/common/loader';

import styles from './styles.css';

const dm = Dimensions.get('window').width;
const width_d = (93 * dm / 100) - 80;

const width_pourc = (pourc) => (pourc * width_d / 100);

// const optionsTypeAudit = [
//   { value: 'Existant', label: 'Existant' },
//   { value: 'Premium', label: 'Premium' },
//   { value: 'Optimum', label: 'Optimum' },
// ];

// const optionsCodePostal = [
//   { value: '75000', label: '75000' },
//   { value: '75001', label: '75001' },
//   { value: '75002', label: '75002' },
//   { value: '75003', label: '75003' },
// ];

// const optionsVille = [
//   { value: 'Vienne', label: 'Vienne' },
//   { value: 'Paris', label: 'Paris' },
//   { value: 'Marseille', label: 'Marseille' },
// ];

const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
  backgroundColor: '#2C7AC3',
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

const selectStyles = {
  container: (base, state) => ({
    ...base,
    opacity: state.isDisabled ? ".5" : "1",
    backgroundColor: 'red',
    zIndex: "999"
  })
};

class SelectOption extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <View style={{ alignItems: 'center', margin: 5 }}>
        <Text style={{ paddingBottom: 10, paddingTop: 5, color: '#2C7AC3' }}>{this.props.title}</Text>
          <Select
            value={selectedOption}
            isSearchable
            components={{ IndicatorSeparator }}
            // onChange={this.handleChange}
            options={this.props.options}
            className={styles.selectBox}
            theme={theme => ({
              ...theme,
              borderRadius: 10,
              colors: {
                ...theme.colors,
                primary25: '#E5E9F2',
                primary: '#2C7AC3',
              },
              backgroundColor: '#2C7AC3',
            })}
            placeholder="sélectionner"
            menuPortalTarget={document.body}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
            onChange={(item) => {
              console.log({ item });
              this.props.onSelectItem(item);
            }}
            value={this.props.value}
          />
      </View>
    );
  }
}

class FoldersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      search: '',
      selectedOption: null,
      folders: [],
      index: 0,
      currentPage: 1,
      numberDysplay: 10,
      code: '',
      type: '',
      ville: '',
    };
  }

  async componentDidMount() {
    await this.props.navigateHeader({ index: 2, name: 'Rechercher' });
    await this.props.getAllfolders(this.cb);
    const { folders } = this.props.folders;
    this.setState({ folders });
  }

  cb = (res) => {
    console.log({ res });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  next = () => {
    const { folder, folders, index, currentPage, numberDysplay } = this.state;
    if(currentPage < Math.ceil(folders.length / numberDysplay)) {
      this.setState({ currentPage: currentPage + 1 })
    }
  }

  prev = () => {
    const { currentPage } = this.state;
    if(currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  }

  customerFilter = ({ vile_client, code_client, type_audit, nom_client, reference_document }) => {
    const { code, ville, type, search } = this.state;
    let f_code = code_client.toLowerCase(), f_ville = vile_client.toLowerCase(), f_type = type_audit.toLowerCase();
    code.length > 0 && (f_code = code);
    ville.length > 0 && (f_ville = ville);
    type.length > 0 && (f_type = type);

    const filter = vile_client.toLowerCase() === f_ville
      && code_client.toLowerCase() === f_code
      && type_audit.toLowerCase() === f_type
      && (nom_client.toLowerCase().includes(search.toLowerCase()) || reference_document.toLowerCase().includes(search.toLowerCase()));
    console.log({ filter });
    return filter;
  }

  render() {
    const { folder, folders, currentPage, numberDysplay, code, ville, type } = this.state;
    if(!folders || !(folders.length > 0)) {
      return <Loader style={{ flex: 1, backgroundColor: '#97CC53', minHeight: 400, justifyContent: 'center' }} />
    }
    console.log({ code, ville, type });

    const optionsVille = folders.map(({ vile_client }) => ({ value: vile_client.toLowerCase(), label: vile_client }));
    const optionsCodePostal = folders.map(({ code_client }) => ({ value: code_client.toLowerCase(), label: code_client }));
    const optionsTypeAudit = folders.map(({ type_audit }) => ({ value: type_audit.toLowerCase(), label: type_audit }));

    const list = folders.slice((currentPage - 1) * numberDysplay, currentPage * numberDysplay).filter(this.customerFilter);
    const list_not_p = folders.filter(this.customerFilter);
    return (
      <View className={styles.containtFolders}>
        <View className={styles.bodyFolders}>
          <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: width_d,
          }}>
            <View style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
              <SelectOption
                title={'Ville'}
                options={[{ value: '', label: 'Sélectionner' }, ...optionsVille.filter((v,i,a)=>a.findIndex(t=>(t.value === v.value))===i)]}
                onSelectItem={({ value }) => this.setState({ ville: value })}
                inputValue={ville}
                // setValue={() => ville}
              />
              <SelectOption
                title={'Code postal'}
                options={[{ value: '', label: 'Sélectionner' }, ...optionsCodePostal.filter((v,i,a)=>a.findIndex(t=>(t.value === v.value))===i)]}
                onSelectItem={({ value }) => this.setState({ code: value })}
                inputValue={code}
              />
              <SelectOption
                title={"Type d'audit"}
                options={[{ value: '', label: 'Sélectionner' }, ...optionsTypeAudit.filter((v,i,a)=>a.findIndex(t=>(t.value === v.value))===i)]}
                onSelectItem={({ value }) => this.setState({ type: value })}
                inputValue={type}
              />
            </View>
            <View style={{ justifyContent: 'flex-end', marginBottom: 10, marginRight: 3 }}>
              <View
                style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: '#2C7AC3',
                borderRadius: 4,
                width: 255,
                height: 32,
                padding: 2,
              }}>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                  <Image
                    source={images.search}
                    style={{ width: 11, height: 12 }}
                  />
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <TextInput
                    style={{
                      backgroundColor: 'white',
                      height: 28,
                      fontSize: 20,
                      width: 226,
                      borderRadius: 4,
                      textAlign: 'center',
                    }}
                    placeholder='Search'
                    onChangeText={(search) => this.setState({ search })}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: '#2C7AC3',
              width: width_d,
              height: 45,
              borderRadius: 5,
              padding: 5,
              marginBottom: 3
            }}
          >
            <View style={{ width: width_pourc(50) / 5, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Référence dosier</Text>
            </View>
            <View style={{ width: width_pourc(50) / 2, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Nom du client</Text>
            </View>
            <View style={{ width: width_pourc(50) / 2, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Ville</Text>
            </View>
            <View style={{ width: width_pourc(50) / 5, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Code Postall</Text>
            </View>
            <View style={{ width: width_pourc(50) / 4, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Type Audit</Text>
            </View>
            <View style={{ width: width_pourc(50) / 4, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>PDF Audit / Annex</Text>
            </View>
          </View>
          <View style={{ minHeight: 400 }}>
          {
            list.map(({ _id, nom_client, vile_client, reference_document, code_client, type_audit }) => {
              return (<View
                key={_id}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  width: width_d,
                  height: 45,
                  borderRadius: 5,
                  padding: 5,
                  marginBottom: 3,
                }}
              >
                <View style={{ width: width_pourc(50) / 5, justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center' }}>{reference_document}</Text>
                </View>
                <View style={{ width: width_pourc(50) / 2, justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center' }}>{nom_client}</Text>
                </View>
                <View style={{ width: width_pourc(50) / 2, justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center' }}>{vile_client}</Text>
                </View>
                <View style={{ width: width_pourc(50) / 5, justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center' }}>{code_client}</Text>
                </View>
                <View style={{ width: width_pourc(50) / 4, justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center' }}>{type_audit}</Text>
                </View>
                <View style={{ width: width_pourc(50) / 4, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                  <View style={{ justifyContent: 'center' }}>
                    <Image
                      source={images.down_pdf}
                      style={{ width: 30, height: 28 }}
                    />
                  </View>
                  <View style={{ justifyContent: 'center' }}>
                    <Image
                      source={images.down_pdf}
                      style={{ width: 30, height: 28 }}
                    />
                  </View>
                </View>
              </View>)
            })
          }
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                onPress={this.prev}
                activeOpacity={currentPage > 1 ? 0 : 1}
              >
                <Image
                  source={images.Raster}
                  style={{ width: 13, height: 13, transform: [{ rotate: '90deg' }] }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
              <Text>{`${currentPage} / ${Math.ceil(list_not_p.length / numberDysplay)}`}</Text>
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                onPress={this.next}
                activeOpacity={currentPage < Math.ceil(list_not_p.length / numberDysplay) ? 0 : 1}
              >
                <Image
                  source={images.Raster}
                  style={{ width: 13, height: 13, transform: [{ rotate: '270deg' }] }}
                />
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoldersScreen);
