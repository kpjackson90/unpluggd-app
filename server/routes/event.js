const express = require('express');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');
const {createEvent} = require('../controllers/event/createEvent');
const {updateEvent} = require('../controllers/event/updateEvent');
const {getEvent} = require('../controllers/event/getEvent');
const {getAllEvent} = require('../controllers/event/getAllEvents');
const {getMyEvents} = require('../controllers/event/getMyEvents');

const router = express.Router();

/**
 * @swagger
 * /api/events:
 *  get:
 *    tags: ['Events']
 *    description: Get all events
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *         description: An unsuccessful response
 */
router.get(
  '/api/events',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  getAllEvent
);

/**
 * @swagger
 * /api/events/host:
 *  get:
 *    tags: ['Events']
 *    description: Get all my events
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *         description: An unsuccessful response
 */
router.get(
  '/api/events/host',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  getMyEvents
);

/**
 * @swagger
 * /api/events/:id:
 *  get:
 *    tags: ['Events']
 *    description: Get single event
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Id of event that you want to fetch
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *         description: An unsuccessful response
 */
router.get(
  '/api/events/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  getEvent
);

/**
 * POST /api/event
 * Create Event
 */
router.post(
  '/api/event',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  createEvent
);

/**
 * PUT /api/event/id
 * Update Event
 */
router.put(
  '/api/event/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  updateEvent
);

module.exports = router;
