const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://samsuryabackup2:84771188@test123.9iwav8j.mongodb.net/";
const dbName = "MongoDBLearning"; 
const collectionName = "Students"; 

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const docs = [
      { "_id": 114, "name": "Barni" ,"age": "21" },
      { "_id": 115, "name": "Surya" ,"age": "22" },
      { "_id": 116, "name": "Harsh" ,"age": "24" },
      { "_id": 117, "name": "Sai" ,"age": "28" }
    ];

    const insertManyResult = await collection.insertMany(docs);

    console.log(`${insertManyResult.insertedCount} documents were inserted.`);
    console.log("Inserted IDs:", insertManyResult.insertedIds); // Display the inserted IDs

  


  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

main();
