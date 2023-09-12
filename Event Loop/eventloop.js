const fs = require('fs');

time()
time1()

// Asynchronous file read
fs.readFile('sam.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});


fs.readFile('sam1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});



function time(){


setTimeout(() => {
  console.log('This code will execute after 5000 milliseconds (5 seconds).');
}, 5000);


}



function time1(){


  setTimeout(() => {
    console.log('This code will execute after 6000 milliseconds (6 seconds).');
  }, 6000);
  
  
  }



console.log('Reading file...');


console.log('Hello World...');

