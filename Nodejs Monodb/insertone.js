const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://samsuryabackup2:84771188@test123.9iwav8j.mongodb.net/?retryWrites=true&w=majority";

async function run() {
    
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("MongoDBLearning");
    const collection = database.collection("Students");
    const doc = { name: "Chandru", age: 25 };

    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    client.close();
  }
}

run().catch(console.error);
