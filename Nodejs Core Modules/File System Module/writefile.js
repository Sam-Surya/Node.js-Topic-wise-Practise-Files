var fs = require('fs');


fs.writeFile('test1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});