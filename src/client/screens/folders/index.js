import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Select from 'react-select';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import styles from './styles.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

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
        <Text style={{ paddingBottom: 10, paddingTop: 5 }}>{this.props.title}</Text>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className={styles.selectBox}
          theme={theme => ({
            ...theme,
            borderRadius: 10,
            colors: {
              ...theme.colors,
              primary25: '#E5E9F2',
              primary: '#2C7AC3',
            },
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
          }}>
            <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',

          }}>
              <SelectOption title={'Ville'} />
              <SelectOption title={'Code postal'} />
              <SelectOption title={"Type d'audit"} />
            </View>
            <View style={{ justifyContent: 'flex-end', marginBottom: 10, marginRight: 40, }}>
              <View
                style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
                <View style={{ justifyContent: 'center' }}>
                  <Image
                    source={images.Raster}
                    style={{ width: 10, height: 10 }}
                  />
                </View>
                <View>
                  <TextInput style={{ backgroundColor: 'white', height: 40 }} />
                </View>
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
