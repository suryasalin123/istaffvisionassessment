const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; 
const dbName = 'stud'; 
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
if (err) {
console.error('Error connecting to MongoDB:', err);
return;
}
console.log('Connected to MongoDB successfully');
const db = client.db('stud');
client.close();
});