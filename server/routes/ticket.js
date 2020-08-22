const express = require('express');
const mongoose = require('mongoose');
// const Ticket = mongoose.model('Ticket'); => this import was giving me issues.
const Ticket = require('../models/Ticket');
const User = mongoose.model('User');
const Event = mongoose.model('Event');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');

const router = express.Router();
//events should have 2 additional quantity(number of tickets) and quantity sold(array)
//update events with the number of tickets requested
//when tickets are sold, update the tickets requested field in the events model
//and generate random IDS starting from 1 and they are placed in array that shows quantity sold

router.post('/api/ticket', requireAuth, roleAuthorization('user'), async (req, res) => {
	if (!req.user) {
		return res.status(400).json({error: 'Bad Request'});
	}
	const isHost = await User.findOne({_id: req.user._id, user_role: 'host'});

	if (!isHost) {
		return res.status(400).send({error: 'Only host can create a ticket'});
	}

	const {ticket_name, ticket_type, ticket_access, ticket_quantity, event_id} = req.body;

	try {
		const ticket = new Ticket({
			ticket_name,
			ticket_type,
			ticket_access,
			ticket_quantity,
			host: req.user._id,
			event: event_id,
		});
		const newTicket = await ticket.save();
		const existingEvent = await Event.findById(event_id);

		//tickets array should only have 2 types. regular, vip, backstage
		if (existingEvent.tickets.length !== 3) {
			existingEvent.tickets.push(newTicket._id);
		}

		existingEvent.quantityRequested = ticket_quantity;

		await existingEvent.save();

		return res.status(200).send({success: 'Ticket created'});
	} catch (err) {
		return res.status(400).send({error: err.message});
	}
});

router.get('/api/tickets', requireAuth, roleAuthorization(['user']), async (req, res) => {
	try {
		const tickets = await Ticket.find({host: req.user._id});
		return res.status(200).send({success: 'OK'});
	} catch (err) {
		return res.status(400).send({error: err.message});
	}
});

router.get('/api/tickets/event/:id', requireAuth, roleAuthorization(['user']), async (req, res) => {
	try {
		const tickets = await Ticket.find({event: req.params.id});
		return res.status(200).send({success: 'OK'});
	} catch (err) {
		return res.status(400).send({error: err.message});
	}
});

router.get('/api/ticket/:id', requireAuth, roleAuthorization(['user']), async (req, res) => {
	try {
		const tickets = await Ticket.find({host: req.user._id});
		return res.status(200).send({success: 'OK'});
	} catch (err) {
		return res.status(400).send({error: err.message});
	}
});
module.exports = router;
