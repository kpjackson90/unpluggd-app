const express = require('express');
const mongoose = require('mongoose');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');
const {createEvent} = require('../controllers/event/createEvent');
const {updateEvent} = require('../controllers/event/updateEvent');
const {getEvent} = require('../controllers/event/getEvent');
const {getAllEvent} = require('../controllers/event/getAllEvents');

const router = express.Router();

/**
 * GET /api/events
 * Get All Events
 */
router.get(
  '/api/events',
  requireAuth,
  roleAuthorization(['host', 'guest']),
  getAllEvent
);

/**
 * GET /api/events/id
 * Get Single event
 */
router.get(
  '/api/events/:id',
  requireAuth,
  roleAuthorization(['host', 'guest']),
  getEvent
);

/**
 * POST /api/event
 * Create Event
 */
router.post(
  '/api/event',
  requireAuth,
  roleAuthorization(['host', 'admin']),
  createEvent
);

/**
 * PUT /api/event/id
 * Update Event
 */
router.put(
  '/api/event/:id',
  requireAuth,
  roleAuthorization(['host']),
  updateEvent
);

module.exports = router;
