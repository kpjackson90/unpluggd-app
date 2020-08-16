const express = require('express');
const Ticket = mongoose.model('Ticket');
const User = mongoose.model('User');
const { requireAuth } = require('../middleware/requireAuth');
const { roleAuthorization } = require('../middleware/roleAuthorization');

const router = express.Router();

router.post(
  '/api/ticket',
  requireAuth,
  roleAuthorization('user'),
  async (req, res) => {
    const isHost = await User.findOne({ _id: req.user._id, user_role: 'host' });

    if (!isHost) {
      return res.send(400).send({ error: 'Only host can create a ticket' });
    }

    const {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event_id,
    } = req.body;
    try {
      const ticket = new Ticket({
        ticket_name,
        ticket_type,
        ticket_access,
        ticket_quantity,
        host: req.user._id,
        event: event_id,
      });
      await ticket.save();
      return res.status(200).send({ success: 'OK' });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
);

router.get(
  '/api/tickets',
  requireAuth,
  roleAuthorization(['user']),
  async (req, res) => {
    try {
      const tickets = await Ticket.find({ host: req.user._id });
      return res.status(200).send({ success: 'OK' });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
);

router.get(
  '/api/tickets/event/:id',
  requireAuth,
  roleAuthorization(['user']),
  async (req, res) => {
    try {
      const tickets = await Ticket.find({ event: req.params.id });
      return res.status(200).send({ success: 'OK' });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
);

router.get(
  '/api/ticket/:id',
  requireAuth,
  roleAuthorization(['user']),
  async (req, res) => {
    try {
      const tickets = await Ticket.find({ host: req.user._id });
      return res.status(200).send({ success: 'OK' });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
);
module.exports = router;
