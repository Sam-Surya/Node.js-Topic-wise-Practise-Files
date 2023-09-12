const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://samsuryabackup2:84771188@test123.9iwav8j.mongodb.net/";
const dbName = "MongoDBLearning"; // Specify your database name here
const collectionName = "Students"; // Specify your collection name here

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Define a filter to specify which documents to find (you can customize this filter)
    const filter = { "name": "S Sam Surya" }; // Specify the filter to match the documents you want to find

    // Find documents that match the filter
    const cursor = collection.find(filter);

    // Iterate through the cursor to access the found documents
    await cursor.forEach((document) => {
      console.log("Found document:", document);
    });
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
