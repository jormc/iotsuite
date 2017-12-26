var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://127.0.0.1');
 
client.on('connect', function () {
  client.subscribe('button')
  // client.publish('presence', 'Hello mqtt')
});
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log("Message: " + message.toString());
  // client.end()
});