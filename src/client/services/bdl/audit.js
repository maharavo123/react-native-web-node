import { get, post, remove } from '../technique/api';

export default {
  getAll: async (url) => await get(url),
  addAudit: async (url, data) => await post(url, data),
  deleteAudit: async (url) => await remove(url),
};
