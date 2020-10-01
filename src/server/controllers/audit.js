const Audit = require('../models/audit');
// const User = require('../models/users');

module.exports = {
  create: async (req, res) => {
    const audit = await Audit.create(req.body);
    const newAudit = await audit.save();
    return res.send(newAudit);
  },
  remove: async (req, res) => {
    const audits = await Audit.findByIdAndRemove(req.params.id);
    res.send({ sucsess: audits && audits._id, _id: req.params.id });
  },
  view: async (req, res) => {
    const audit = await Audit.findById(req.params.id);
    res.json(audit);
  },
  userByAudit: async (req, res) => {
    const { id } = req.params;
    const userByAudit = await Audit.findById(id).populate('user');
    res.send(userByAudit);
  },
  list: async (_, res) => {
    const audits = await Audit.find();
    res.json(audits);
  },
  update: async (req, res) => {
    const audit = await Audit.findById(req.params.id);
    if (!audit) {
      return res.status(404).json({ error: 'Not Found' });
    }

    const update = await Audit.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true },
    ).exec();
  
    res.json(update);
  }
};
