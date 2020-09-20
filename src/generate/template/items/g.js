const fs = require('fs');

const allItems = [1, 2, 3, 4, 5, 6, 7].reduce((ac, i) => {
  const item = require('./items' + i);
  const keys = Object.keys(item).reduce((acc, cur) => ({...acc, [cur]: cur}), {});
  let data = JSON.stringify({keys});
  fs.writeFileSync(`./all/items${i}.json`, data);
  return {...ac, ...keys};
}, {})

let data = JSON.stringify({allItems});
fs.writeFileSync(`./all/allItems.json`, data);
