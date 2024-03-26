const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:<password>@xxxxx.mongodb.net/";
const dbName = "sample_airbnb";

async function main() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    console.log(`Connected to database "${dbName}"`);

    const collection = db.collection("listingsAndReviews");
    const changeStream = collection.watch();

    changeStream.on("change", (change) => {
      console.log("Change detected:", change);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {

  }
}

main();
