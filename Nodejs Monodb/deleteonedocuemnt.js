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

    // Define a filter to specify which document to delete (you can customize this filter)
    const filter = { "_id": 114 }; // Specify the filter to match the document you want to delete

    // Delete one document that matches the filter
    const deleteResult = await collection.deleteOne(filter);

    if (deleteResult.deletedCount === 1) {
      console.log("Document deleted successfully.");
    } else {
      console.log("Document not found or not deleted.");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
