
// MongoDB Code

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Johno:<FrQI1BKarDHkhyDV>@cluster0.ngvjmi1.mongodb.net/?retryWrites=true&w=majority";

export { MongoClient, ServerApiVersion, uri };

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// ____ mongoDB
