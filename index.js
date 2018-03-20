// Get Library
var mqtt = require('mqtt')
var express = require('express')
var app = express()

// Use my cloudMQTT credentials
var client = mqtt.connect('mqtt://m10.cloudmqtt.com:17959', {
  username: "vbrreqip",
  password: "eSSF24dYzeCD"
})

app.get('/', function (req, res) {
  // load data from DB
  res.send('I\'m not a computer science major. <br><a href="/fox">Link to fox</a>')
})

app.get('/fox', function (req, res) {
  res.send('I\'m a computer science teacher')
})

app.get('/fox', function (req, res) {
  res.send('I\'m a computer science teacher')
})

// When I connected, do something
client.on('connect', function () {
  console.log("Connected to MQTT.")

  client.subscribe('device')
})


client.on('message', function (topic, message) {
  if (topic === 'device') {
    console.log("I have a message: " + message.toString())

    client.publish('web', 'I heard you.')
    // save message DB
  } else {
    console.log("IDK what to do")
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})