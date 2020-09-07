const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');
const User = require('../models/User');
const Event = require('../models/Event');

exports.createTicket = async (req, res) => {
  if (!req.user) {
    return res.status(400).json({error: 'Bad Request'});
  }

  const {
    ticket_name,
    ticket_type,
    ticket_access,
    ticket_quantity,
    event_id,
  } = req.body;

  try {
    const isHost = await User.findOne({_id: req.user._id, user_role: 'host'});
    if (!isHost) {
      return res.status(400).send({error: 'Only host can create a ticket'});
    }

    const existingEvent = await Event.findById(event_id);
    if (!existingEvent) {
      return res.status(404).json({error: 'Event not found'});
    }
    //prevents users from requesting more tickets than the quantity available
    // if (
    //   existingEvent.quantityRemaining < ticket_quantity &&
    //   existingEvent.quantityRemaining !== 0
    // ) {
    //   return res.status(400).json({
    //     error: `Only allowed to create ${existingEvent.quantityRemaining} for the event ${existingEvent.name}`,
    //   });
    // }
    //no more tickets left for the event
    // if (existingEvent.quantityRemaining <= 0) {
    //   return res.status(400).json({
    //     error: `Cannot create anymore tickets for the event ${existingEvent.name}`,
    //   });
    // }
    //user already created tickets for the event
    // if (existingEvent.quantityRemaining !== existingEvent.quantityRequested) {
    //   existingEvent.quantityRemaining =
    //     existingEvent.quantityRemaining - ticket_quantity;
    // }
    //first time creating tickets for the event
    // if (existingEvent.quantityRemaining === existingEvent.quantityRequested) {
    //   existingEvent.quantityRemaining =
    //     existingEvent.quantityRequested - ticket_quantity;
    // }
    // const ticket = new Ticket({
    //   ticket_name,
    //   ticket_type,
    //   ticket_access,
    //   ticket_quantity,
    //   host: req.user._id,
    //   event: event_id,
    // });
    //const newTicket = await ticket.save();
    //existingEvent.tickets.push(newTicket._id);
    // await existingEvent.save();
    // return res.status(200).send({
    //   success: `${ticket_quantity} created for the event ${existingEvent.name}`,
    // });
  } catch (err) {
    //return res.status(400).send({error: err.message});
  }
};
