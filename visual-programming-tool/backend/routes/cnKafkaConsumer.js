// cnKafkaConsumer.js

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9096'],
});

const consumeMessages = async (topic, groupId) => {
  const consumer = kafka.consumer({ groupId });
  let messages = [];

  try {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ message }) => {
        messages.push(message.value.toString());
      },
    });

    return new Promise((resolve) => {
      setTimeout(async () => {
        await consumer.disconnect();
        resolve(messages);
      }, 5000); // Adjust the timeout as needed
    });
  } catch (error) {
    console.error('Error consuming messages:', error);
    throw error;
  }
};

module.exports = { kafka, consumeMessages };
 