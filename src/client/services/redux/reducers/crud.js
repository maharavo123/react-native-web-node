import constants from '../constants/crud';

const initialState = {
  cruds: [],
  crud: {},
  navigate: { name: '', index: 0 }
};

const crud = (state = initialState, action) => {
  switch (action.type) {
    case constants.navigateHeader:
      return {
        ...state,
        navigate: action.payload,
      }
    case constants.getAll:
      return {
        ...state,
        cruds: action.payload,
      };
    default:
      return state;
  }
};

export default crud;
