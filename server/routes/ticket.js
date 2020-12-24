const express = require('express');
const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');
const User = mongoose.model('User');
const Event = mongoose.model('Event');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');
const {getAllTickets} = require('../controllers/ticket/getAllTickets');
const {getTicket} = require('../controllers/ticket/getTicket');
const {getTickets} = require('../controllers/ticket/getTickets');

const router = express.Router();

//get all tickets for host
router.get(
  '/api/tickets',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  getAllTickets
);

//tickets for an event
router.get(
  '/api/tickets/event/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  getTickets
);

//get ticket
router.get(
  '/api/ticket/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  getTicket
);
module.exports = router;
