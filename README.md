# iotsuite
This will be a project with which I will try to build a messaging platform for IoT devices, using technologies such as NodeJS, MQTT / Mosqquito and NATS.io

## Docker

The docker-compose.ym file contains definitions of 4 services for testing purposes (by the moment). So you could comment those that you don't need use at this moment.

 - **mongo** : a *mongo* database instance for a future catalog storage platform
 - **mysql** : a *mysql* database instance for data storage purposes
	 - user: *iotesuite*
	 - password: *iotsuite*
	 - database: *iotesuite*
 - **nats** : a message brocker, from *nats.io*, where we'll subscribe for all incoming topic publications
 - **mosquitto** : a mqtt message broker, implemenrted with *mosquitto*

## Install

For the moment, I've only a mqtt message testing example made with **mosquitto** and **nodejs**, going thru the *npm* library, **mqtt**.

 1. Download and/or clone this git project
 2. Select from the Docker Compose file the desired services (for the moment, only **mosquitto** one is required)
 3. Run the docker compose file

	    $ cd docker
	    $ docker-compose up

## Testing

### mqtt

Thre's a basic example made with ***nodejs*** and ***mqtt*** npm library. 

After starts the ***mosquitto*** service, go to the mqtt examples directory, install dependencies for the example:

    $ cd examples/nodejs/mqtt
    $ npm install


Running the example, on startup, it will subscribe to *"button"* topics from mosquitto, and when somebody performs a publication to this topic.

Run the example:

	~/iotsuite/examples/nodejs/mqtt$ node mqtt.js 

For testing purposes, we can publish some mqtt messages to the **mosquitto** service, to the topic **button**, so we can emulate the activation/deactivation of a swith at home.

You can use an mobile app, such like the ***MQTT Dash*** one (for Android), and create a boolean device, attached to ***button*** topic. COnnect & publish to your mosquitto service host, at 1883 port.

Then, when you'll publish some data to **button** topic, you will see some like this at the docker logs:

	Message: 1
	Message: 0
	Message: 1
	Message: 0
