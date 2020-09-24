import constants from '../constants/audit';

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
