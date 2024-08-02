const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9096'],
});

const consumeMessages = async () => {
  const consumer = kafka.consumer({ groupId: 'my-group' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'your-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

consumeMessages().catch(console.error);
