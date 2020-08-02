import { get } from '../technique/api';

export default {
  getAllfolders: async (url) => await get(url),
  // oneRibOperation: async (url) => await get(url),
};
