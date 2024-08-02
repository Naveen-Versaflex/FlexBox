const express = require('express');
const bodyParser = require('body-parser');
const {
  connectProducer,
  connectConsumer,
  connectAdmin,
  createTopic,
  produceMessage,
  consumeMessages,
} = require('./routes/kafka');

const app = express();
app.use(bodyParser.json());

app.post('/produce', async (req, res) => {
  const { topic, message } = req.body;
  await produceMessage(topic, message);
  res.status(200).send('Message produced');
});

app.post('/consume', async (req, res) => {
  const { topic, groupId } = req.body;
  const messages = await consumeMessages(topic, groupId);
  res.status(200).json(messages);
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
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

startServer().catch(console.error);
