import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import bodyParser from 'body-parser';

console.log('Server code loaded')




const app = express()
const port = 5500;

// More Defining 
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data



  
  const server = http.createServer(app);
  const io = new Server(server, { 
    cors: {
    
      origin: '*',
      methods: ['POST'],
      allowedHeaders: ['Content-Type','my-custom-header'],
      credentials: true,
    },
  });
 

  server.listen(port, () => console.log(`Server listening on port ${port}`));

  

  // ** Recieving 

app.post('/NodeServer/login', (req, res) => {
  const clientIP = req.ip;
  console.log('The incoming req is from',clientIP)

    res.json({ message: 'Received a POST request', data: req.body });
});


  