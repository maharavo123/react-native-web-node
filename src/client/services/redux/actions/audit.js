import constants from '../constants/audit';
import crudSapp from '../../applicatif/crud';

export const getAllCrud = (callBack) => async (dispatch) => {
  const payload = await crudSapp.getAllCrud();
  callBack && callBack(payload);
  if (payload) {
    return dispatch({
      type: constants.getAll,
      payload,
    });
  }
};

export const setFormAudit = (payload, cb) => (dispatch) => dispatch({ payload, type: constants.form })
