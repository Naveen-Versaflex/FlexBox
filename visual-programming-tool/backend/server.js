const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http'); // For creating the HTTP server
const { Server } = require('socket.io'); // For creating the WebSocket server
const { getConsumer } = require('./routes/cnKafkaConsumer');
const {
  connectProducer,
  connectConsumer,
  connectAdmin,
  createTopic,
  produceMessage,
} = require('./routes/kafka');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

const server = http.createServer(app); // Create the HTTP server
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Allow frontend requests
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('joinRoom',async ({ topic, groupId }) => {
    console.log(`Subscribed to topic: ${topic} with group ID: ${groupId}`);
  
    let consumer=await getConsumer(topic, groupId)
    await consumer.run({
      eachMessage: async ({ message }) => {
        socket.emit('newMessage', message.value.toString());
        console.log(`got the messages as ${message.value.toString()}`)
      },
    });  
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.post('/produce', async (req, res) => {
  const { topic, message } = req.body;
  await produceMessage(topic, message);
  res.status(200).send('Message produced');
});

app.post('/create-topic', async (req, res) => {
  const { topics } = req.body;
  await createTopic(topics);
  res.status(200).send('Topics created');
});

const startServer = async () => {
  await connectProducer();
  await connectConsumer();
  await connectAdmin();
  server.listen(3000, () => { // Ensure that Socket.IO and Express share the same server
    console.log('Server is running on port 3000');
  });
};

startServer().catch(console.error);
module.exports={io}
