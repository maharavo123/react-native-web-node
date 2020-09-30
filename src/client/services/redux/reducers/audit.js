import constants from '../constants/audit';

const initialState = {
  list: [],
  form: {},
};

const audit = (state = initialState, action) => {
  switch (action.type) {
    case constants.deleteAudit:
      return {
        ...state,
        list: state.list.filter(({ _id }) => _id !== action.payload),
      };
    case constants.addAudit:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case constants.form:
      return {
        ...state,
        form: action.payload,
      };
    case constants.getAll:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default audit;
