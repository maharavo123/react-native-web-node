import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default (props) => {
  const { onPress, children, className, style } = props;
  return (
    <View className={className} style={style ? style : {}}>
      <TouchableOpacity onPress={() => onPress()}>
        {children}
      </TouchableOpacity>
    </View>
  )
};
