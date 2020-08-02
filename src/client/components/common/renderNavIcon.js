import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Icon } from '../../ressources/Icon';
import styles from '../../ressources/css/styles.css';

const renderNavIcon = (icon, index) => (
  <TouchableHighlight
    className={styles.headerNavItem}
    onPress={() => {}}
    underlayColor="rgba(71,163,218,0.5)"
    key={index}
  >
    <Icon name={icon} size={16} className={styles.headerNavIcon} />
  </TouchableHighlight>
);

export default renderNavIcon;
