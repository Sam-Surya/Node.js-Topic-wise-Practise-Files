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

    // Define a filter to specify which document to update
    const filter = { "age": "21" }; // Specify the filter to match the document you want to update

    // Define the update operation (in this example, we're changing "color" to "green")
    const updateOperation = {
      $set: { "age": "24" } // Update the "color" field to "green"
    };

    // Update the first document that matches the filter
    const updateResult = await collection.updateOne(filter, updateOperation);

    if (updateResult.modifiedCount === 1) {
      console.log("Document updated successfully.");
    } else {
      console.log("Document not found or not updated.");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
