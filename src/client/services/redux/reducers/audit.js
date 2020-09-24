import constants from '../constants/crud';

const initialState = {
  cruds: [],
  form: {},
};

const audit = (state = initialState, action) => {
  switch (action.type) {
  case constants.form:
    return {
      ...state,
      form: action.payload,
    };
  default:
    return state;
  }
};

export default audit;
