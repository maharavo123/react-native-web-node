import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import styles from '../../ressources/css/styles.css';

const renderContent = (content, index) => (
  <View className={styles.mediabox} key={index}>
    <View className={styles.imgWrapper}>
      <Image
        source={content.image}
        className={styles.img}
        width="100%"
        height="auto"
      />
    </View>
    <View className={styles.textWrapper}>
      <Text className={styles.h3}>{content.title}</Text>
      <Text className={styles.p}>{content.body}</Text>
    </View>
  </View>
);

export default renderContent;
