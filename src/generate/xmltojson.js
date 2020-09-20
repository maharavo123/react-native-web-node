// var convert = require('xml-js');
// var json1 = require('fs').readFileSync('./test.json', 'utf8');
// var options = {compact: true, ignoreComment: true, spaces: 4};
// var result = convert.json2xml(json1, options);
// console.log(result);

var convert = require('xml-js');
var xml = require('fs').readFileSync('./test.xml', 'utf8');

var result = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result);
