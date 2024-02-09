const { MongoClient } = require('mongodb');
const fs = require('fs');
const uri = 'mongodb://localhost:27017';
const dbName = stud; 
const collectionName = studcoll; // Collection to store KYC details
const jsonFile = 'kyc_details.json';
const jsonData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
const doc = { name: 'Rani', father_name: 25 , pan_id: 1234 , uid:1234 };
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function insertData() {
    try {
        await client.connect();
        console.log('Connected to MongoDB server');
        const db = client.db(stud);
        const collection = db.collection(studcoll);
        await collection.insertOne(jsonData);
        await collection.insertOne(doc);
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
        console.log('MongoDB connection closed');
    }
}
insertData().catch(console.error);
