const fs = require('fs');
const path = 'package.json'; // Replace with your actual JSON file path

// Read the JSON file
fs.readFile(path, (error, data) => {
    if (error) {
        console.error('Error reading the JSON file:', error);
        return;
    }

    // Parse the JSON data
    const parsedData = JSON.parse(data);

    // Display results on the console
    console.log('Parsed JSON data:');
    console.log(parsedData);
// Write to a .txt file
const txtFilePath = './output.txt'; // Replace with your desired output file path
fs.writeFile(txtFilePath, JSON.stringify(parsedData, null, 2), (err) => {
    if (err) {
        console.error('Error writing to the .txt file:', err);
    } else {
        console.log(`Results written to ${txtFilePath}`);
    }
});
});