import React from 'react';
import { Provider } from 'react-redux';
import { OrientationChangeProvider } from 'react-native-orientation-change-provider';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './services/redux/store';

import Main from './App.container';

const Wrapper = () => (
  <Provider store={store}>
    <OrientationChangeProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </OrientationChangeProvider>
  </Provider>
);

export default Wrapper;
