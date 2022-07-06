const kafka = require("../kafka")

// const conf = {
//   'bootstrap.servers': os.environ['CLOUDKARAFKA_BROKERS'],
//   'session.timeout.ms': 6000,
//   'default.topic.config': {'auto.offset.reset': 'smallest'},
//   'security.protocol': 'SASL_SSL',
//   'sasl.mechanisms': 'SCRAM-SHA-256',
//   'sasl.username': os.environ['CLOUDKARAFKA_USERNAME'],
//   'sasl.password': os.environ['CLOUDKARAFKA_PASSWORD']
// }

const main = async () => {
  const producer = kafka.producer()
  await producer.connect()
  console.log('Enviando')
  await producer.send({
    topic: '0vs5rme2-default',
    messages: [
      { value: 'Oi Alanzinho!' },
    ],
  })

  await producer.disconnect()
}

main()