import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import bodyParser from 'body-parser';


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
    // Connect the client to the server	(optional starting in v4.7)
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




const app = express
const port = 5500;

// Cors Config
const corsOptions = {
 
    origin: ['http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type','my-custom-header'],
  };
  
  
  // Apply The Cors

  
  const server = http.createServer(app);
  const io = new Server(server, { 
    cors: {
    
      origin: 'http://127.0.0.1:5500',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type','my-custom-header'],
      credentials: true,
    },
  });
 

  server.listen(port, () => console.log(`Server listening on port ${port}`));
  if (server.listen != 5500) { 
    console.error('The server is running on the wrong port!')
    return
  }
