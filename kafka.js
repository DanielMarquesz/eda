const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'dani',
  brokers: ['moped-01.srvs.cloudkafka.com:9094', 'moped-02.srvs.cloudkafka.com:9094', 'moped-03.srvs.cloudkafka.com:9094'],
  ssl: { rejectUnauthorized: false },
  sasl: {
    mechanism: 'scram-sha-512',
    username: '0vs5rme2',
    password: 'v9nEFfJXDswDQHyGLt6eq3l_UTRRhq3G'
  }
})

module.exports = kafka