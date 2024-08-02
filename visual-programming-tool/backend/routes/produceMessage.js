const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9096'],
});

const producer = kafka.producer();

const produceMessage = async () => {
  await producer.connect();
  await producer.send({
    topic: 'your-topic',
    messages: [{ value: 'Hello KafkaJS user!' }],
  });
  await producer.disconnect();
};

produceMessage().catch(console.error);
