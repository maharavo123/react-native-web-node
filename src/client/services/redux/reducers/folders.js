import constants from '../constants/folders';
import users from '../constants/users';

const initialState = {
  folders: [],
  // oneRibOperation: [],
  pdf: '',
};

const folders = (state = initialState, action) => {
  switch (action.type) {
    case constants.getPfd:
      return {
        ...state,
        url: action.payload,
      };
    case constants.getAllfolders:
      return {
        ...state,
        folders: action.payload,
      };
    case users.logout:
      return initialState;
    default:
      return state;
  }
};

export default folders;
