import { post, put } from '../technique/api';

export default {
  signin: async (url, data) => await post(url, data),
  signup: async (url, data) => await post(url, data),
  updateUser: async (url, data) => await put(url, data),
};
