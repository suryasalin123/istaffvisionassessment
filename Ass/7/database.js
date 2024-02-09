const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'stud';
const client = new MongoClient(url);
async function getData() {
    try {
        let result = await client.connect();
        let db = result.db(database);
        let collection = db.collection('studcoll');
        let response = await collection.find({}).toArray();
        console.log(response);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}
getData();
