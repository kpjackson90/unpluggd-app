const express = require('express');
const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');
const User = mongoose.model('User');
const Event = mongoose.model('Event');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');
const {createTicket} = require('../controllers/ticket');

const router = express.Router();

router.post(
  '/api/ticket',
  requireAuth,
  roleAuthorization('user'),
  createTicket
);

router.get(
  '/api/tickets',
  requireAuth,
  roleAuthorization(['user']),
  async (req, res) => {
    try {
      const tickets = await Ticket.find({host: req.user._id});
      return res.status(200).send({success: 'OK'});
    } catch (err) {
      return res.status(400).send({error: err.message});
    }
  }
);

router.get(
  '/api/tickets/event/:id',
  requireAuth,
  roleAuthorization(['user']),
  async (req, res) => {
    try {
      const tickets = await Ticket.find({event: req.params.id});
      return res.status(200).send({success: 'OK'});
    } catch (err) {
      return res.status(400).send({error: err.message});
    }
  }
);

router.get(
  '/api/ticket/:id',
  requireAuth,
  roleAuthorization(['user']),
  async (req, res) => {
    try {
      const tickets = await Ticket.find({host: req.user._id});
      return res.status(200).send({success: 'OK'});
    } catch (err) {
      return res.status(400).send({error: err.message});
    }
  }
);
module.exports = router;
