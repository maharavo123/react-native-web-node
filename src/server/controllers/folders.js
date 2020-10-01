const Folders = require('../models/folders');
const Rubriques = require('../models/rubriques');

module.exports = {
  create: async (req, res) => {
    const rubrique = await Rubriques.create(req.body);
    const newRubrique = await rubrique.save();
    const folders = await Folders.create(req.body);
    folders.onwer = req.user.id;
    folders.audits = newRubrique._id;
    const newFolders = await folders.save();
    return res.send({ folder: newFolders, rubrique: newRubrique });
  },
  remove: async (req, res) => {
    const folders = await Folders.findByIdAndRemove(req.params.id);
    res.send({ sucsess: folders && folders._id, _id: req.params.id });
  },
  view: async (req, res) => {
    const folders = await Folders.findById(req.params.id);
    res.json(folders);
  },
  userByFolders: async (req, res) => {
    const { id } = req.params;
    const userByFolders = await Folders.findById(id).populate('user');
    res.send(userByFolders);
  },
  list: async (_, res) => {
    const folders = await Folders.find();
    res.json(folders);
  },
  update: async (req, res) => {
    const folders = await Folders.findById(req.params.id);
    if (!folders) {
      return res.status(404).json({ error: 'Not Found' });
    }

    const update = await Folders.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true },
    ).exec();
  
    res.json(update);
  }
};
