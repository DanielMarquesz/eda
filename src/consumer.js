const kafka = require('../kafka')

const topic = '0vs5rme2-default'

const consumer = kafka.consumer({ groupId: 'test-group' })

const consume = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value,
      })
    },
  })
}

consume()