
//const {io} = require('../server');
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9096'],
});

const getConsumer = async (topic, groupId) => {
  const consumer = kafka.consumer({ groupId });

  try {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    return consumer;

  } catch (error) {
    console.error('Error consuming messages:', error);
    throw error;
  }
};
  
module.exports = { kafka, getConsumer };
 