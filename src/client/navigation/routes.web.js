import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from './history';

import Home from '../screens/home';
import Contact from '../screens/contact';
import Dossiers from '../screens/folders';
import Comptes from '../screens/comptes';
import NoMatch from '../screens/noMatch';
// import FolderScreen from '../screens/addFolder';
// import TextEditor from '../screens/editText';

// import Auth from './screens/auth';
// import Home from './screens/home';

// import DevTools from './screens/devTools';
// import store from '../services/redux/store';

export default function App() {
  return (
    <Router history={history}>
      <div>
        {/* {Header} */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/dossiers'>
            <Dossiers />
          </Route>
          <Route path='/compte'>
            <Comptes />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
