const fs = require('fs');

const readableStream = fs.createReadStream('sample.txt');
readableStream.setEncoding('UTF8');


readableStream.on('data', (chunk) => {

  console.log(chunk);
});
