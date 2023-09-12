const { Writable } = require('stream');
const fs = require('fs');

// Create a writable stream to write data to a file
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    fs.appendFile('output.txt', chunk, (err) => {
      if (err) {
        console.error('Error writing data to file:', err);
      } else {
        console.log(`Data written to file: ${chunk.toString()}`);
      }
      callback(); // Callback to signal that data has been processed
    });
  },
});

writableStream.on('finish', () => {
  console.log('Writable Stream has finished writing to the file.');
});

// Writing data to the Writable Stream
writableStream.write('Data 1\n');
writableStream.write('Data 2\n');
writableStream.end(); // Signals the end of writing

// Note: Make sure to create the 'output.txt' file before running this code.
