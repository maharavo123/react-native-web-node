import constants from '../constants/audit';
import serviceApplicatif from '../../applicatif/audit';

export const getAll = (callBack) => async (dispatch) => {
  const payload = await serviceApplicatif.getAll(constants.url.getAll);
  callBack && callBack(payload);
  if (payload && payload.data && payload.data.length > 0) {
    return dispatch({
      type: constants.getAll,
      payload: payload.data,
    });
  }
};

export const setFormAudit = (payload, cb) => ({ payload, type: constants.form });

export const addAudit = (data, callBack) => async (dispatch) => {
  const payload = await serviceApplicatif.addAudit(constants.url.addAudit, data);
  console.log({ payload });
  callBack && callBack(payload);
  if (payload && payload.data && payload.data.length > 0) {
    return dispatch({
      type: constants.addAudit,
      payload: payload.data,
    });
  }
};

export const deleteAudit = (id, callBack) => async (dispatch) => {
  const payload = await serviceApplicatif.deleteAudit(`${constants.url.deleteAudit}/${id}`);
  callBack && callBack(payload);
  if (payload && payload.data && payload.data.sucsess) {
    return dispatch({
      type: constants.deleteAudit,
      payload: payload.data.sucsess,
    });
  }
};

export const editAudit = (id, callBack) => async (dispatch) => {
  const payload = await serviceApplicatif.editAudit(`${constants.url.deleteAudit}/${id}`);
  callBack && callBack(payload);
  if (payload && payload.data && payload.data.sucsess) {
    return dispatch({
      type: constants.editAudit,
      payload: payload.data.sucsess,
    });
  }
};
