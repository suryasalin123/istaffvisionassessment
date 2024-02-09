const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Synchronous mode
rl.question('Enter the filename (sync mode): ', (filenameSync) => {
  try {
    const data = fs.readFileSync(filenameSync, 'utf8');
    console.log('File Contents (sync mode):');
    console.log(data);
  } catch (err) {
    console.error('Error reading file (sync mode):', err);
  }
  rl.close();
});
