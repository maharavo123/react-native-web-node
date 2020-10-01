import constants from '../constants/users';
import usersSapp from '../../applicatif/users';

export const signin = (data, callBack) => async (dispatch) => {
  const res = await usersSapp.signin(constants.url.signin, data);
  callBack && callBack(res);
  console.log(res.data);
  if (res && res.data) {
    return dispatch({
      type: constants.signinUSER,
      payload: res.data,
    });
  }
};

export const signup = (data, callBack) => async () => {
  const payload = await usersSapp.signup(constants.url.signup, data);
  callBack && callBack(payload);
};

export const updateUser = (data, callBack) => async (dispatch) => {
  const res = await usersSapp.updateUser(`${constants.url.signup}/${data.id}`, data);
  callBack && callBack(res);
  if (res && res.data) {
    return dispatch({
      type: constants.updateUser,
      payload: res.data,
    });
  }
};


export const logout = () => (dispatch) => dispatch({ type: constants.logout });

export default { signin, signup, logout, updateUser };
