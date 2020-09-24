import folders from '../bdl/folders';

export default {
  getAllfolders: async (url) => await folders.getAllfolders(url),
  getPfd: async (url, data) => await folders.getPfd(url, data),
  // oneRibOperation: async (url) => await folders.oneRibOperation(url),
};
