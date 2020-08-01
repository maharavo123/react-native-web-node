import crud from './actions/crud';
import users from './actions/users';
import rib from './actions/rib';
import comptes from './actions/comptes';

const mapDispatchToProps = (dispatch) => ({
  getAllCrud: (payload, cb) => dispatch(crud.getAllCrud(payload, cb)),

  // Users
  signin: (payload, cb) => dispatch(users.signin(payload, cb)),
  signup: (payload, cb) => dispatch(users.signup(payload, cb)),
  logout: () => dispatch(users.logout()),

  // Rib
  oneRibOperation: (payload, cb) => dispatch(rib.oneRibOperation(payload, cb)),
  operations: (payload, cb) => dispatch(rib.operations(payload, cb)),

  // Comptes
  getComptes: (payload, cb) => dispatch(comptes.getComptes(payload, cb)),
  getCompte: (payload, cb) => dispatch(comptes.getCompte(payload, cb)),
  createCompte: (payload, cb) => dispatch(comptes.createCompte(payload, cb)),
  onTabSelect: index => {
    dispatch({
      type: 'SET_TAB',
      index,
    });
  },
});

export default mapDispatchToProps;
