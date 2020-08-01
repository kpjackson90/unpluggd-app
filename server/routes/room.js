const roomRoutes = require('express').Router();
const {validateTime} = require('../middleware/validateTime');
const {createRoom} = require('../services/twilio');
const Event = require('../models/Event');

roomRoutes.post('/api/rooms/create/:eventId', async (req, res) => {
	const {eventId} = req.params;
	const {maxParticipants} = req.body;
	try {
		const existingEvent = await Event.findOne({_id: eventId});

		if (!existingEvent) {
			return res.status(404).send('Ensure event is created');
		}

		const {date, start_time} = existingEvent;
		const isTimeValid = validateTime(date, start_time);

		if (!isTimeValid) {
			return res.status(400).send('Cannot create room as yet');
		}

		//valid time.. create room
		const params = {
			roomName: 'Test-Room',
			maxParticipants,
		};
		const room = await createRoom(params);
		return res.status(201).send(room);
	} catch (err) {
		console.error('Error: ', err);
		return res.status(500).send('ERROR');
	}
});

module.exports = roomRoutes;
