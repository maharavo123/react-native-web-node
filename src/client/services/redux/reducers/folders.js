import constants from '../constants/folders';
import users from '../constants/users';

const initialState = {
  folders: [],
  // oneRibOperation: [],
};

const folders = (state = initialState, action) => {
  switch (action.type) {
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
