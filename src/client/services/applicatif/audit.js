import audit from '../bdl/audit';

export default {
  getAll: (url) => audit.getAll(url),
  addAudit: (url, data) => audit.addAudit(url, data),
  deleteAudit: (url) => audit.deleteAudit(url),
};
