// import React from 'react';
// import { OrientationChangeProvider } from 'react-native-orientation-change-provider';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import App from './App.container';
// import { tabs } from './reducers';

// const store = createStore(combineReducers({ tabs }));

// const Wrapper = () => (
//   <Provider store={store}>
//     <OrientationChangeProvider>
//       <App />
//     </OrientationChangeProvider>
//   </Provider>
// );

// export default Wrapper;


import React from 'react';
import { Provider } from 'react-redux';
import { OrientationChangeProvider } from 'react-native-orientation-change-provider';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './services/redux/store';

import Main from './screens/App.container';

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
