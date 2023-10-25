
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











// Post Request 


async function sendData(username, password) {
  console.log('Post Requested');
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  console.log('Form data value:', formData);

  try {
      const response = await fetch('http://127.0.0.1:5500/NodeServer/login', {
          method: 'POST',
          body: formData,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      });

      console.log('Promise Activated');
      
      if (response.ok) {
          console.log('Action seen');
      } else {
          console.error('ERR 999 Response failed');
      }
  } catch (error) {
      console.error('The Post was rejected', error);
  } finally {
      console.log('The Post was neither rejected nor accepted');
  }
}

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userNparcel = userName.value;
  const passWparcel = passWord.value;
  console.log(userNparcel);
  console.log(passWparcel);

  // Send the form data to the server
  await sendData(userNparcel, passWparcel);

  userName.value = null;
  passWord.value = null; 
});









// Define the route for handling POST requests
app.post('/NodeServer/login', (req, res) => {
  const clientIP = req.ip;
  console.log('The incoming req is from', clientIP);
  res.json({ message: 'Received a POST request', data: req.body });
});






/*
cors: {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'my-custom-header'],
  credentials: true,
},
*/







// Cors 
import cors from 'cors';
// Apply the CORS middleware
app.use(cors());