import React from 'react';

import AuthStack from './auth';
import AppNavigation from './Main';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  // async componentDidMount() {}

  render() {
    const { user } = this.props.users;

    if (user && user.token) {
      return <AppNavigation {...this.props} />;
    }
    return <AuthStack {...this.props} />;
  }
}
