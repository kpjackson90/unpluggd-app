const roomRoutes = require('express').Router();
const mongoose = require('mongoose');
const {validateTime} = require('../middleware/validateTime');
const {createRoom} = require('../services/twilio');
const Event = mongoose.model('Event');

roomRoutes.post('/api/rooms/create/:eventId', async (req, res) => {
	const {eventId} = req.params;
	try {
		const existingEvent = await Event.findOne({_id: eventId});

		if (!existingEvent) {
			return res.status(404).send('Ensure event is created');
		}

		const {date, start_time} = existingEvent;
		const isTimeValid = validateTime(date, start_time);

		if (!isTimeValid) {
			return res.status(400).send('Cannot create room');
		}

		const {name, max_occupancy} = existingEvent;

		//valid time.. create room
		const params = {
			roomName: name,
			maxParticipants: max_occupancy,
		};
		const room = await createRoom(params);

		await existingEvent.updateOne({$set: {room_id: room.sid}});
		return res.status(201).send(room);
	} catch (err) {
		console.error('Error: ', err);
		return res.status(500).send('ERROR');
	}
});

module.exports = roomRoutes;
