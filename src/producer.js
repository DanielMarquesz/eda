const kafka = require("../kafka")

const main = async () => {
  const producer = kafka.producer()
  await producer.connect()
  console.log('Enviando')
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Oi Danielzinho!' },
    ],
  })

  await producer.disconnect()
}

main()