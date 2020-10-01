import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';

const LinkTo = props => {
  const { children, className, to, onPress, style, activeOpacity = 0, params } = props;
  const history = useHistory();
  const redirect = () => {
    onPress({}, () => history.push({
      pathname: to,
      params: {},
    }));
  }

  return (
    <View className={className} style={style ? style : {}}>
      <TouchableOpacity onPress={() => redirect()} activeOpacity={activeOpacity}>
        {children}
      </TouchableOpacity>
    </View>
  );
}

export default LinkTo;
