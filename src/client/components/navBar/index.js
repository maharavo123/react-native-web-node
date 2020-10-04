import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import images from 'images';
import styles from './styles.css';

import rubriques from '../../../utils/rubriques';

const dm = Dimensions.get('window').width;

const p_marg = (marg) => (17 * dm / 100) - marg;

const menuGroupe = (data, parent) => data.reduce((acc, { title, id, children, notLogo, to }) => {
  const newItem = { title, id, children, parent, notLogo, to };
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
    notLogo,
    to,
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

  const history = useHistory();


  return (
    <TouchableOpacity onPress={() => {
      toogleRaster([...childrenIds, id], parent);
      history.push({
        pathname: to,
        params: {},
      })
      }}>
      <View className={styles.itemView_navBar_containers}
        style={{
          marginLeft: margin_color_left().left,
          backgroundColor: margin_color_left().color,
          width: p_marg(margin_color_left().left)
        }}
      >
        <View className={styles.itemView_navBar}>
          <View style={{}}>
            {!notLogo && <Image
              source={image}
              className={styles.bell}
            />}
          </View>
          <View className={styles.itemTitle_navBarView}>
            <View>
              {!notLogo && <Text
                className={styles.itemTitle_navBarId}
                style={{ color: margin_color_left().text_color }}
              >{`${id} - `}</Text>}
            </View>
            <View className={styles.itemTitle_navBarViewTitle}>
              <Text
                className={styles.itemTitle_navBarText}
                style={{ color: margin_color_left().text_color }}>{title}</Text>
            </View>
          </View>
        </View>
        <View className={styles.viewReset_navBar}>
          {childrenIds && childrenIds.length > 0 && <View
            style={{transform: [{ rotate: rotateIds.includes(id) ? '180deg' : '0deg' }]}}
            // onPress={() => toogleRaster([...childrenIds, id], parent)}
          >
            <Image
              source={images.Raster}
              className={styles.Raster_navBar}
              style={{ }}
            />
          </View>}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const NavBar = (props) => {
  let initOpen = [], initRotateIds = [];
  const { defaultValue } = props;
  if (defaultValue === 2) {
    initOpen = [2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2];
    initRotateIds = [2];
  }
  const [isOpen, setIsOpen] = useState(initOpen);
  const [rotateIds, setRotateIds] = useState(initRotateIds);
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

  console.log({ defaultValue, isOpen });
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
            // defaultValue={defaultValue}
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
