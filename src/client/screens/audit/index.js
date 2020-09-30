import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';

import Navigate from '../../components/navigate';

import styles from './styles.css';

class AuditScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.props.navigateHeader({ index: 1, name: 'Créer un audit' });
  }

  navigateTo = (arc, cb) => {
    cb && typeof cb === 'function' && cb();
  }

  render() {
    return (
      <View className={styles.containt}>
        <View className={styles.body}>
          <View className={styles.itemView}>
            <Navigate
              className={{}}
              style={{}}
              to={'page-coverture'}
              onPress={(arg, cb) => this.navigateTo(arg, cb)}
            >
              <Image
                source={images.audit}
                className={styles.icon}
              />
            </Navigate>
            <Text className={styles.name}>Existant</Text>
          </View>
          <View className={styles.itemView}>
            <Image
              source={images.files}
              className={styles.icon}
            />
            <Text className={styles.name}>Optimum</Text>
          </View>
          <View className={styles.itemView}>
            <Image
              source={images.files}
              className={styles.icon}
            />
            <Text className={styles.name}>Premium</Text>
          </View>
          <View className={styles.itemView}>
            <Image
              source={images.plus}
              className={styles.icon}
            />
            <Text className={styles.name}>Ajout</Text>
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
