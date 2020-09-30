import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import Navigate from '../../components/navigate';

import styles from './styles.css';

const etoileList = (key) => {
  switch (key) {
    case 1:
      return [1];
    case 2:
      return [2, 4];
    case 3:
      return [2, 3, 4];
    case 4:
      return [1, 2, 3, 4];
    default:
      return [];
  }
};

class AuditScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.props.navigateHeader({ index: 1, name: "Création Audit Energétique > Choix type d'audit" });
    this.props.getAll();
  }

  navigateTo = (arc, cb) => {
    cb && typeof cb === 'function' && cb();
  }

  render() {
    const { list } = this.props.audit;
    return (
      <View className={styles.containt}>
        <View className={styles.bodyAudit}>
        <FlatList style={{ marginTop: 20, marginBottom: 10 }}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: 'space-evenly', marginBottom: 10 }}
          data={list}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            const { name, etoile, _id } = item;
            return (
              <View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                  <View />
                  <View style={{ marginBottom: -90, padding: 5, marginRight: -35 }}>
                  <Navigate
                    key={`${_id} name`}
                    className={{}}
                    style={{}}
                    to={'add-audit'}
                    params={{ name, etoile, _id }}
                    onPress={(arg, cb) => this.navigateTo(arg, cb)}
                    >
                    {/* <TouchableOpacity
                      onPress={() => this.props.editAudit(_id)}
                      style={{  }}> */}
                      <Image
                        source={images.edit}
                        className={styles.recycle}
                      />
                    </Navigate>
                    <TouchableOpacity
                      onPress={() => this.props.deleteAudit(_id)}
                      style={{ marginTop: 5 }}>
                      <Image
                        source={images.recycle}
                        className={styles.recycle}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              <View className={styles.itemViewC} style={{}}>
                <Navigate
                  key={`${_id} name`}
                  className={{}}
                  style={{}}
                  to={'page-coverture'}
                  onPress={(arg, cb) => this.navigateTo(arg, cb)}
                >
                  <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                    {
                      (etoileList(etoile)).map((_i, key) => <Image
                        key={`${key} etoile ${_id}`}
                        source={images.star}
                        className={styles.icon}
                      />)
                    }
                  </View>
                </Navigate>
                <Text className={styles.name}>{name}</Text>
              </View>
              </View>
            )
          }}
        />
          {/* {
            list && list.map(({ name, etoile }, index) => <View className={styles.itemViewC} style={{}}>
              <Navigate
                key={`${index} name`}
                className={{}}
                style={{}}
                to={'page-coverture'}
                onPress={(arg, cb) => this.navigateTo(arg, cb)}
              >
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                  {
                    (etoileList(etoile)).map((_i, key) => <Image
                      key={`${key} etoile ${name}`}
                      source={images.star}
                      className={styles.icon}
                    />)
                  }
                </View>
              </Navigate>
              <Text className={styles.name}>{name}</Text>
            </View>)
          } */}
          <View className={styles.itemViewC}>
            <Navigate
              className={{}}
              style={{}}
              to={'/add-audit'}
              onPress={(arg, cb) => this.navigateTo(arg, cb)}
            >
              <Image
                source={images.plus}
                className={styles.icon}
              />
              <Text className={styles.name}>Ajout</Text>
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
)(AuditScreen);
