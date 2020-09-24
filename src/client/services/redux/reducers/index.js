import { combineReducers } from 'redux';
import crud from './crud';
import audit from './audit';
import users from './users';
import folders from './folders';
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
  audit,
  users,
  folders,
  comptes,
  tabs,
});

export default reducers;
