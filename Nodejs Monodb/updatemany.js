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

    // Define a filter to specify which documents to update
    const filter = { "age": "24" }; // Specify the filter to match the documents you want to update

    // Define the update operation (in this example, we're changing "color" to "green")
    const updateOperation = {
      $set: { "age": "21" } // Update the "color" field to "green"
    };

    // Update all documents that match the filter
    const updateResult = await collection.updateMany(filter, updateOperation);

    console.log(`${updateResult.modifiedCount} documents updated successfully.`);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
