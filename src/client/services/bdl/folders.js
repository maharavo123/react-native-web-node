import { get, post } from '../technique/api';

export default {
  getAllfolders: async (url) => await get(url),
  getPfd: async (url, data) => await post(url, data),
};
