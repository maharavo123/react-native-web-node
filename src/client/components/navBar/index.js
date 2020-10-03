import React, { useState } from 'react';
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

import rubriques from '../../../utils/rubriques';

const menuGroupe = (data, parent) => data.reduce((acc, { title, id, children }) => {
  const newItem = { title, id, children, parent };
  if(children){
    return [...acc, newItem, ...menuGroupe(children, id)];
  }
  return [...acc, newItem];
}, []);

const ItemView = (props) => {
  const {
    title,
    image=images.bell,
    onPressItem=() => {},
    toogleRaster=() => {},
    childrenIds=[],
    isOpen=[],
    parent=null,
    id,
    rotateIds=[],
  } = props;

  const idString = id.toString();
  const margin_left = () => {
    if(typeof id === 'string') {
      return 10;
    }
    if(id && idString.split('.').length > 1) {
      return 6;
    }
    return 0;
  }

  if(idString.length > 1 && !isOpen.includes(id)) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View className={styles.itemView_navBar_containers}>
        <View className={styles.itemView_navBar}>
          <View style={{ paddingLeft: margin_left() }}>
            <Image
              source={image}
              className={styles.bell}
            />
          </View>
          <View className={styles.itemTitle_navBarView}>
            <View>
              <Text className={styles.itemTitle_navBarId}>{`${id} - `}</Text>
            </View>
            <View className={styles.itemTitle_navBarViewTitle}>
              <Text className={styles.itemTitle_navBarText}>{title}</Text>
            </View>
          </View>
        </View>
        <View className={styles.viewReset_navBar}>
          {childrenIds && childrenIds.length > 0 && <TouchableOpacity
            style={{transform: [{ rotate: rotateIds.includes(id) ? '180deg' : '0deg' }]}}
            onPress={() => toogleRaster([...childrenIds, id], parent)}>
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

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState([]);
  const [rotateIds, setRotateIds] = useState([]);
  const menuNav = menuGroupe(rubriques);
  const toogleRaster = (data, parentId, id, chIds) => {
    if(rotateIds.includes(id)) {
      setRotateIds(rotateIds.filter(i => i !== id));
      setIsOpen(isOpen.filter(i => !chIds.includes(i)));
      return;
    }
    setRotateIds([parentId, id]);
    const openIds = menuNav.filter(({ parent }) => parent === parentId).map(i => i.id);
    setIsOpen([...data, parentId, ...openIds]);
  }

  return (
    <View className={styles.containt}>
      <View className={styles.body}>
        <View className={styles.itemLogo}>
          <Image
            source={images.home}
            className={styles.home}
          />
        </View>
        {
          menuNav.map((item) => {
            const childrenIds = item.children ? item.children.map(i => i.id) : []
            return <ItemView
            {...item}
            key={`rubrique ${item.id}`}
            childrenIds={childrenIds}
            toogleRaster={(data, parentId) => toogleRaster(data, parentId, item.id, childrenIds)}
            isOpen={isOpen}
            rotateIds={rotateIds}
          />})
        }
      </View>
    </View>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
