import constants from '../constants/folders';
import foldersApp from '../../applicatif/folders';

// export const oneRibOperation = ({ min, max, folders }, callBack) => async (dispatch) => {
//   const res = await foldersApp.oneRibOperation(`${constants.url.oneRibOperation}${folders}/${min}/${max}`);
//   callBack && callBack(res);
//   if (res && res.data && res.data.folderss) {
//     return dispatch({
//       type: constants.oneRibOperation,
//       payload: res.data.folderss,
//     });
//   }
// };

export const getAllfolders = (callBack) => async (dispatch) => {
  const res = await foldersApp.getAllfolders(constants.url.getAllfolders);
  callBack && callBack(res);
  if (res && res.status === 200) {
    return dispatch({
      type: constants.getAllfolders,
      payload: res.data,
    });
  }
};

export default { getAllfolders };
