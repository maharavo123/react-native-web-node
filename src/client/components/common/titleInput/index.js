import React from 'react';
import { View, Text, Image } from 'react-native';

import images from 'images';

import styles from './styles.css';

const InputText = ({ title, style }) => (
  <View className={styles.containt} style={style}>
    <View className={styles.selectorTitleInput}>
      <Text className={styles.title}>{title}</Text>
    </View>
    <View className={styles.selectorTitleInput}>
      <Image source={images.Raster} style={{ width: 25, height: 25, tintColor: "red" }} />
    </View>
  </View>
);

export const InputTextNotColor = ({ title, style }) => (
  <View className={styles.containtNotColor} style={style}>
    <View className={styles.selectorTitleInput}>
      <Text className={styles.title}>{title}</Text>
    </View>
  </View>
);

export const InputContaint = ({ children, style }) => (
  <View className={styles.InputContaint} style={style}>
    {children}
  </View>
);

export default InputText;
