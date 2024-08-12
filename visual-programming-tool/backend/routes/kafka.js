// kafka.js

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9096'],
  retry: {
    initialRetryTime: 300,
    retries: 10,
  },
  requestTimeout: 30000,
});

const producer = kafka.producer();
const admin = kafka.admin();

const connectProducer = async () => {
  try {
    await producer.connect();
  } catch (error) {
    console.error('Error connecting producer:', error);
  }
};

const connectConsumer = async () => {
  try {
    // No need to subscribe here, as we subscribe in the consumeMessages function
  } catch (error) {
    console.error('Error connecting consumer:', error);
  }
};

const connectAdmin = async () => {
  try {
    await admin.connect();
  } catch (error) {
    console.error('Error connecting admin:', error);
  }
};

const createTopic = async (topics) => {
  try {
    if (!Array.isArray(topics)) {
      throw new Error('Invalid topics format. Expected an array.');
    }

    await admin.createTopics({
      topics: topics.map(topic => ({ topic: topic.topic, numPartitions: topic.numPartitions || 1, replicationFactor: 1 })),
    });
    console.log('Topics created successfully.');
  } catch (error) {
    console.error('Error creating topics:', error);
    throw error;
  }
};

const produceMessage = async (topic, message) => {
  try {
    await producer.send({
      topic,
      messages: [{ value: message }],
    });
    console.log(`Message sent to topic: ${topic}`);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

module.exports = {
  kafka, // Export the Kafka client
  connectProducer,
  connectConsumer,
  connectAdmin,
  createTopic,
  produceMessage,
};
