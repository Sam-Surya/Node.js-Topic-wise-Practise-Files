const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://samsuryabackup2:84771188@test123.9iwav8j.mongodb.net/";

const dbName = "MongoDBLearning"; // Specify your database name here

async function main() {
  
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db(dbName);
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

main();
