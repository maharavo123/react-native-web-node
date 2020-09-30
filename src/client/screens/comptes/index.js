import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from '../../services/redux/mapStateToProps';
import mapDispatchToProps from '../../services/redux/mapDispatchToProps';

import Create from './create';

class ComptesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      data: {},
    };
  }

  componentDidMount() {
    this.props.navigateHeader({ index: 3, name: 'Mon Compte' });
  }

  signUp = async (data, callBack) => {
    this.props.signup(data, callBack);
  }

  render() {
    const { users } = this.props;
    const user = { ...users?.user, role: 2 };

    return (
      <View style={{ flex: 1 }}>
        <Create
          {...this.props}
          signUp={this.signUp}
          user={user}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComptesScreen);
