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
    const filter = {}; // For example, find all documents

    // Define a sorting criteria (ascending order) based on the "age" field
    const sortCriteria = { "age": 1 }; // Sort by the "age" field in ascending order (1)

    // Find and sort documents based on the filter and sorting criteria
    const cursor = collection.find(filter).sort(sortCriteria);

    // Convert the results to an array
    const results = await cursor.toArray();

    console.log("Sorted documents by age:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
