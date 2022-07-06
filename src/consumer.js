const kafka = require('../kafka')

const topic = process.env.TOPIC

const consumer = kafka.consumer({ groupId: process.env.GROUP_ID })

const consume = async () => {
  await consumer.connect()
  await consumer.subscribe({ topics: [topic] })
	await consumer.run({
		eachMessage: ({ message }) => {
			console.log(`received message: ${message.value}`)
		},
	})

  // await consumer.disconnect()
}

consume()