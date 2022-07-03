const kafka = require('../kafka')

const topic = 'test-topic'

const consumer = kafka.consumer({ groupId: 'test-group' })

const consume = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

consume()