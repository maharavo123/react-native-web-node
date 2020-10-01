import crud from './actions/crud';
import { setFormAudit, addAudit, getAll, deleteAudit, editAudit } from './actions/audit';
import users from './actions/users';
import folders from './actions/folders';
import comptes from './actions/comptes';

const mapDispatchToProps = (dispatch) => ({
  getAllCrud: (payload, cb) => dispatch(crud.getAllCrud(payload, cb)),
  navigateHeader: (payload, cb) => dispatch(crud.navigateHeader(payload, cb)),

  // Users
  signin: (payload, cb) => dispatch(users.signin(payload, cb)),
  signup: (payload, cb) => dispatch(users.signup(payload, cb)),
  logout: () => dispatch(users.logout()),
  updateUser: (payload, cb) => dispatch(users.updateUser(payload, cb)),

  // Folders
  // oneRibOperation: (payload, cb) => dispatch(folders.oneRibOperation(payload, cb)),
  getAllfolders: (payload, cb) => dispatch(folders.getAllfolders(payload, cb)),
  getPfd: (payload, cb) => dispatch(folders.getPfd(payload, cb)),
  createFolder: (payload, cb) => dispatch(folders.createFolder(payload, cb)),

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

  setFormAudit: (payload, cb) => dispatch(setFormAudit(payload, cb)),
  addAudit: (payload, cb) => dispatch(addAudit(payload, cb)),
  getAll: (payload, cb) => dispatch(getAll(payload, cb)),
  deleteAudit: (payload, cb) => dispatch(deleteAudit(payload, cb)),
  editAudit: (payload, cb) => dispatch(editAudit(payload, cb)),
});

export default mapDispatchToProps;
