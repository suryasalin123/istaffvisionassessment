const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Asynchronous mode
rl.question('Enter the filename (async mode): ', (filenameAsync) => {
    fs.readFile(filenameAsync, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file (async mode):', err);
      } else {
        console.log('File Contents (async mode):');
        console.log(data);
      }
      rl.close();
    });
  });