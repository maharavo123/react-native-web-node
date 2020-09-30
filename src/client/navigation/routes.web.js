import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  // BrowserRouter as Router,
} from 'react-router-dom';
import { View } from 'react-native';
import history from './history';

import Home from '../screens/home';
import Audit from '../screens/audit';
import NewAudit from '../screens/audit/new';
import FormAudit from '../screens/audit/form';
import Apercu from '../screens/audit/apercu';
import Dossiers from '../screens/folders';
import Comptes from '../screens/comptes';
import NoMatch from '../screens/noMatch';

import NavBar from '../components/navBar';

import styles from './styles.css';

const App = props => {
  return (
    <View className={styles.corps1}>
      <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/'>
            {/* <NavBar {...this.props} /> */}
            <Home {...props} />
          </Route>
          <Route exact path='/aperçu'>
            {/* <Apercu {...props} /> */}
            <View className={styles.corps3}>
              <NavBar {...this.props} />
              <Apercu {...props} />
            </View>
          </Route>
          <Route path='/page-coverture'>
            <FormAudit {...props} />
          </Route>
          <Route path='/add-audit'>
            <NewAudit {...props} />
          </Route>
          <Route path='/audit'>
            <Audit {...props} history={history} />
          </Route>
          <Route path='/dossiers'>
            <Dossiers />
          </Route>
          <Route path='/comptes'>
            <Comptes />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    </View>
  );
}

export default App;
