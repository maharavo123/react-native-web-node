import { get, post, remove, put } from '../technique/api';

export default {
  getAll: async (url) => await get(url),
  addAudit: async (url, data) => await post(url, data),
  deleteAudit: async (url) => await remove(url),
  editAudit: async (url, data) => await put(url, data),
};
