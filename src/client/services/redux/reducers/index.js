import { combineReducers } from 'redux';
import crud from './crud';
import users from './users';
import rib from './rib';
import comptes from './comptes';
import tabs from './tabs';

const reducers = combineReducers({
  // log: (_, _) => {
  log: () => {
    // eslint-disable-next-line no-console
    console.log('action');
    return {};
  },
  crud,
  users,
  rib,
  comptes,
  tabs,
});

export default reducers;
