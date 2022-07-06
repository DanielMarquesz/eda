const kafka = require("../kafka")

const main = async () => {
  const producer = kafka.producer()
  await producer.connect()
  console.log('Enviando')
  await producer.send({
    topic: process.env.TOPIC,
    messages: [
      { value: 'Oi Alanzinho!' },
    ],
  })

  await producer.disconnect()
}

main()