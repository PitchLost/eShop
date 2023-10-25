import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';



console.log('Server code loaded');

const app = express();
const port = 5500;


// Cors

// Enable CORS middleware
app.use(cors({
  origin: 'http://127.0.0.1:5500/Login/createAcc.js', 
  methods: 'GET, POST, OPTIONS', 
  allowedHeaders: 'Content-Type, my-custom-header', 
  credentials: true,  
}));





// Logging middleware to log all incoming requests
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Define the route for handling POST requests
app.post('/NodeServer/server.mjs/createAcc', (req, res) => {
  const clientIP = req.ip;
  console.log('The incoming req is from', clientIP);

  let dataToSend = req.body;
  console.log('Data received in the request:', dataToSend);
  console.log(req.body)

  // MongoDB code here

  // Logging the response
  console.log('Sending response to the client');
  res.json({ message: 'Received a POST request', data: req.body });
});

// MongoDB Code

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Johno:FrQI1BKarDHkhyDV@cluster0.ngvjmi1.mongodb.net/?retryWrites=true&w=majority";

// Rest of your MongoDB setup code here

// Create a server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5500/',
    methods: ['POST','GET','OPTIONS'],
    allowedHeaders: ['Content-Type', 'my-custom-header'],
    credentials: true,
  },
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
