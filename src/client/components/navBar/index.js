import React, { useState } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';
import styles from './styles.css';

import rubriques from '../../../utils/rubriques';

const dm = Dimensions.get('window').width;

const p_marg = (marg) => (17 * dm / 100) - marg;

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
  const margin_color_left = () => {
    if(typeof id === 'string') {
      return { left: 10, color: '#2C7AC3', text_color: '#FFFFFF' };
    }
    if(id && idString.split('.').length > 1) {
      return { left: 6, color: '#D3DCE6', text_color: '#97CC53' };
    }
    return { left: 0, color: '#FFFFFF', text_color: '#2C7AC3' };
  }

  if(idString.length > 1 && !isOpen.includes(id)) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View className={styles.itemView_navBar_containers}
        style={{
          marginLeft: margin_color_left().left,
          backgroundColor: margin_color_left().color,
          width: p_marg(margin_color_left().left)
        }}
      >
        <View className={styles.itemView_navBar}>
          <View style={{}}>
            <Image
              source={image}
              className={styles.bell}
            />
          </View>
          <View className={styles.itemTitle_navBarView}>
            <View>
              <Text
                className={styles.itemTitle_navBarId}
                style={{ color: margin_color_left().text_color }}
              >{`${id} - `}</Text>
            </View>
            <View className={styles.itemTitle_navBarViewTitle}>
              <Text
                className={styles.itemTitle_navBarText}
                style={{ color: margin_color_left().text_color }}>{title}</Text>
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
              style={{ }}
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
