import folders from '../bdl/folders';

export default {
  getAllfolders: async (url) => await folders.getAllfolders(url),
  // oneRibOperation: async (url) => await folders.oneRibOperation(url),
};
