var Unrar = require('unrar');

var archive = new Unrar('PhotosGARCIA.rar');
// or
// var archive = new Unrar({
//   path:      protectedArchivePath,
//   arguments: ['-pPassword'],
//   bin: pathToUnrarBin // Default: unrar
// });

archive.list(function (err, entries) {
  console.log({ entries });
  var stream = archive.stream('PhotosGARCIA'); // name of entry
  stream.on('error', console.error);
  stream.pipe(require('fs').createWriteStream('some-binary-file'));
});
