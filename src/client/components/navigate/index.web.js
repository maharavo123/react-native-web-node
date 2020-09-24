import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';

const LinkTo = props => {
  const { children, className, to, onPress, style } = props;
  const history = useHistory();

  const redirect = () => {
    onPress({}, () => history.push(to));
  }

  return (
    <View className={className} style={style ? style : {}}>
      <TouchableOpacity onPress={() => redirect()}>
        {children}
      </TouchableOpacity>
    </View>
  );
}

export default LinkTo;
