// const csvFilePath='./test.csv'
// const csv=require('csvtojson')
// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log({jsonObj});
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */ 
// })

let csvToJson = require('convert-csv-to-json');

const jsons = csvToJson.getJsonFromCsv("./test1.csv");

console.log(jsons);
// var convert = require('xml-js');
// var json1 = require('fs').readFileSync('./test.json', 'utf8');
// var options = {compact: true, ignoreComment: true, spaces: 4};
// var result = convert.json2xml(json1, options);
// console.log(result);
