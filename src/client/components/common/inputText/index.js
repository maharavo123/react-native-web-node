import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import styles from './styles.css';

import images from 'images';

const InputText = ({ label, ...props }) => (
  <View className={styles.inputView}>
    <Text className={styles.label}>{label}</Text>
    <TextInput
      className={styles.input}
      placeholder={label}
      {...props}
    />
  </View>
);

export const ImportFile = ({ label }) => (
  <View className={styles.importView}>
    <View className={styles.check} />
    <View>
      <Image
        source={images.calendar}
        className={styles.image}
      />
    </View>
    <View>
      <Text className={styles.labelBtn}>{label}</Text>
    </View>
  </View>
);

export default InputText;
