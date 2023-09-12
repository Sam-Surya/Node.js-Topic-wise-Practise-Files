var fs = require('fs');

fs.appendFile('test2.txt', 'Hello Sam Surya!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});