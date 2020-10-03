import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';
import styles from './styles.css';

const ItemView = (props) => {
  const {
    title,
    image=images.bell,
    onPressItem=() => {},
    toogleRaster=() => {},
    children=[],
    parent=null
  } = props;
  return (
    <TouchableOpacity onPress={onPressItem}>
      <View className={styles.itemView_navBar_containers}>
        <View className={styles.itemView_navBar}>
          <View>
            <Image
              source={image}
              className={styles.bell}
            />
          </View>
          <View className={styles.itemTitle_navBar}>
            <Text className={styles.itemTitle_navBar}>{title}</Text>
          </View>
        </View>
        <View className={styles.viewReset_navBar}>
          {children && children.length > 0 && <TouchableOpacity onPress={toogleRaster}>
            <Image
              source={images.Raster}
              className={styles.Raster_navBar}
            />
          </TouchableOpacity>}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const NavBar = (props) => (
  <View className={styles.containt}>
    <View className={styles.body}>
      <View className={styles.itemLogo}>
        <Image
          source={images.home}
          className={styles.home}
        />
      </View>
      <ItemView title={'1- Préambule'}/>
      <ItemView title={'Informations génerale'} children={[2.1]}/>
      <ItemView title={'Etat des lieux'} children={[3.1]} niveau={2} />
      <ItemView title={'3.1- Descriptif des parois'} parent={2} />
      <ItemView title={'Audit énergetique'} />
      <ItemView title={'Conclusion audit'} />
      <ItemView title={'Aperçu pdf'} image={images.bell_red} />
    </View>
  </View>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
