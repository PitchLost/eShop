import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import bodyParser from 'body-parser';

console.log('Server code loaded');

const app = express();
const port = 5500;

// Apply the CORS middleware
app.use(cors());

// Use the bodyParser middleware to parse form data
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'my-custom-header'],
    credentials: true,
  },
});

server.listen(port, () => console.log(`Server listening on port ${port}`));

// Define the route for handling POST requests
app.post('/NodeServer/login', (req, res) => {
  const clientIP = req.ip;
  console.log('The incoming req is from', clientIP);
  res.json({ message: 'Received a POST request', data: req.body });
});
