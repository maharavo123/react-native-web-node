import React from 'react';
import axios from 'axios';
import qs from 'qs';

import AuthStack from './screens/auth';
import AppNavigation from './navigation';

const url = 'http://192.168.1.40:6891/';

export const post = async (data) => {
  try {
    const res = await axios.post(url, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(data),
    });
    console.log('post res ------------>', res);
    return res;
  } catch (e) {
    console.log('e.response', e.response);

    const errors = e && e.response ? e.response.data : { error: true };
    console.log('post errors ------------>', errors);
    return errors;
  }
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  // async componentDidMount() {
  //   console.log('componentDidMount =====================>');
  //   const data =  "action=update&code_mag=HAP1&numero_caisse=05&cle_serveur=5DADA245&last_file=no fle",
  //   // const data = {
  //   //   action: 'update',
  //   //   code_mag: 'HAP1',
  //   //   numero_caisse: '05',
  //   //   cle_serveur: '5DADA245',
  //   //   last_file: 'no fle',
  //   // };
  //   const zip = await post(data)

  //   console.log({ zip });

  //   const t = await axios({
  //     method: 'post',     //put
  //     url,
  //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
  //     data,
  //   });

  //   console.log('=============++>' + { t });
  // }

  render() {
    const { user } = this.props.users;

    if (user && user.token) {
      return <AppNavigation {...this.props} />;
    }
    return <AuthStack {...this.props} />;
  }
}
