var fs = require('fs');

fs.rename('test1.txt', 'testrenamed.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});