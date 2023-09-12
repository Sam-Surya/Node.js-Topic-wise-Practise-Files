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

    // Define a filter to specify which documents to delete (you can customize this filter)
    const filter = { "age": "19" }; // Specify the filter to match the documents you want to delete

    // Delete all documents that match the filter
    const deleteResult = await collection.deleteMany(filter);

    console.log(`${deleteResult.deletedCount} documents were deleted.`);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
