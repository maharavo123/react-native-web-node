import React from 'react';
import { View, Text, Image } from 'react-native';

import images from 'images';

import styles from './styles.css';

const InputText = ({ title }) => (
  <View className={styles.containt}>
    <View className={styles.selectorTitleInput}>
      <Text className={styles.title}>{title}</Text>
    </View>
    <View className={styles.selectorTitleInput}>
      <Image source={images.Raster} style={{ width: 25, height: 25, tintColor: "red" }} />
    </View>
  </View>
);

export const InputContaint = ({ children }) => (
  <View className={styles.InputContaint}>
    {children}
  </View>
);

export default InputText;
