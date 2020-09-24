const Folders = require('../models/folders');
const path = require('path');
// var html_to_pdf = require('html-pdf-node');

var fs = require('fs');
var pdf = require('html-pdf');

module.exports = {
  create: async (req, res) => {

    const id = req.user.id;
    const folder = await Folders.create({ ...req.body, onwer: id });
    const newFolders = await folder.save();

    return res.send(newFolders);
  },
  remove: async (req, res) => {
    const folders = await Folders.findByIdAndRemove(req.params.id);
    res.json({ sucsess: folders && folders._id, _id: req.params.id });
  },
  view: async (req, res) => {
    const folder = await Folders.findById(req.params.id);
    res.json(folder);
  },
  foldersByCompte: async (req, res) => {
    const { id } = req.params;
    const foldersByCompte = await Folders.findById(id).populate('onwer');
    res.send(foldersByCompte);
  },
  list: async (_, res) => {
    const folders = await Folders.find();
    res.json(folders);
  },
  pdf: async (_, res) => {

    var html = fs.readFileSync('./public/html/index.html', 'utf8');
    var options = {
      format: 'A4',
      base: path.resolve('./public') + '/'
    };

    // pdf.create(html).toStream(function(err, stream){
    //   console.log({ stream });
    //   if (err) {
    //     console.log({ err });
    //     return res.end(err.stack);
    //   }
    //   stream.pipe(fs.createWriteStream('./foo.pdf'));

    //   res.setHeader('Content-type', 'application/pdf');
    //   res.setHeader('Content-disposition', 'attachment; filename=export-from-html.pdf'); // Remove this if you don't want direct download
    //   res.setHeader('Content-Length', '' +stream.length);
    //   stream.pipe(res);
    // });

    pdf.create(html, options).toFile('./businesscard.pdf', function(err, response) {
      if (err) return console.log(err);
      console.log(response); // { filename: '/app/businesscard.pdf' }
      res.send(response);
    });
  },
};
