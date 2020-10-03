import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Select from 'react-select';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import styles from './styles.css';

const optionsTypeAudit = [
  { value: 'Existant', label: 'Existant' },
  { value: 'Premium', label: 'Premium' },
  { value: 'Optimum', label: 'Optimum' },
];

const optionsCodePostal = [
  { value: '75000', label: '75000' },
  { value: '75001', label: '75001' },
  { value: '75002', label: '75002' },
  { value: '75003', label: '75003' },
];

const optionsVille = [
  { value: 'Vienne', label: 'Vienne' },
  { value: 'Paris', label: 'Paris' },
  { value: 'Marseille', label: 'Marseille' },
];

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
          components={{ IndicatorSeparator }}
          onChange={this.handleChange}
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
    };
  }

  componentDidMount() {
    this.props.navigateHeader({ index: 2, name: 'Rechercher' });
    this.props.getAllfolders(this.cb);
  }

  cb = (res) => {
    console.log({ res });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { folder, folders } = this.props.folders;
    console.log({ folder, folders });
    return (
      <View className={styles.containtFolders}>
        <View className={styles.bodyFolders}>
          <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginRight: 50,
            marginLeft: 50,
          }}>
            <View style={{
              justifyContent: 'space-between',
              flexDirection: 'row',

            }}>
              <SelectOption title={'Ville'} options={optionsVille} />
              <SelectOption title={'Code postal'} options={optionsCodePostal} />
              <SelectOption title={"Type d'audit"} options={optionsTypeAudit} />
            </View>
            <View style={{ justifyContent: 'flex-end', marginBottom: 10 }}>
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
                    />
                </View>
              </View>
            </View>
            {PositioningActionsColumn()}
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
