import audit from '../bdl/audit';

export default {
  getAll: (url) => audit.getAll(url),
  addAudit: (url, data) => audit.addAudit(url, data),
  deleteAudit: (url) => audit.deleteAudit(url),
  editAudit: (url, data) => audit.editAudit(url, data),
};
