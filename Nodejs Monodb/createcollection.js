const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://samsuryabackup2:84771188@test123.9iwav8j.mongodb.net/";
const dbName = "MongoDBLearning"; // Specify your database name here
const collectionName = "Students1"; // Specify the name of the new collection

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db(dbName);

    // Create a new collection with the specified name
    await db.createCollection(collectionName);

    console.log(`Collection "${collectionName}" created successfully.`);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
