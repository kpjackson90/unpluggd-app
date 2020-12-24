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
 *    parameters:
 *     - name: page_number
 *       in: query
 *       required: true
 *       description: the page number requested
 *     - name: page_size
 *       in: query
 *       required: true
 *       description: the number of items per page
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 *      '204':
 *        description: Successful response. No data found
 *      '400':
 *         description: An unsuccessful response.
 *      '500':
 *         description: unsuccessful response. Possible error on server side
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
 *    description: Get all events for a host
 *    parameters:
 *     - name: page_number
 *       in: query
 *       required: true
 *       description: the page number requested
 *     - name: page_size
 *       in: query
 *       required: true
 *       description: the number of items per page
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 *      '204':
 *        description: Successful response. No data found
 *      '400':
 *         description: An unsuccessful response.
 *      '500':
 *         description: unsuccessful response. Possible error on server side
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
 *        description: A successful response. Event found
 *      '404':
 *         description: An unsuccessful response. Event not found
 *      '500':
 *        description: unsuccessful response. Possible error on server side
 */
router.get(
  '/api/events/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  getEvent
);

/**
 * @swagger
 * /api/events:
 *  post:
 *    tags: ['Events']
 *    description: Create event
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: name
 *        schema:
 *          type: string
 *        in: formData
 *        required: true
 *        description: The name of the event
 *      - name: description
 *        schema:
 *          type: string
 *        in: formData
 *        description: Event description
 *      - name: date
 *        schema:
 *          type: string
 *        in: formData
 *        description: Event Date
 *        required: true
 *      - name: start_time
 *        schema:
 *          type: string
 *        in: formData
 *        description: Event start time
 *        required: true
 *      - name: end_time
 *        schema:
 *          type: string
 *        in: formData
 *        description: Event end time
 *        required: true
 *      - name: categories
 *        schema:
 *          type: string
 *        in: formData
 *        description: Categories for the event. This field cannot be empty
 *        required: true
 *      - name: host
 *        schema:
 *          type: string
 *        in: formData
 *        description: the ID of the event host
 *        required: true
 *      - name: max_occupancy
 *        schema:
 *          type: string
 *        in: formData
 *        description: The event size
 *        required: true
 *      - name: custom_url
 *        schema:
 *          type: string
 *        in: formData
 *        description: the event url
 *      - name: facebook_url
 *        schema:
 *          type: string
 *        in: formData
 *        description: event's facebook url
 *      - name: twitter_url
 *        schema:
 *          type: string
 *        in: formData
 *        description: event's twitter url
 *      - name: instagram_url
 *        schema:
 *          type: string
 *        in: formData
 *        description: event's instagram url
 *      - name: youtube_url
 *        schema:
 *          type: string
 *        in: formData
 *        description: event's youtube url
 *      - name: twitch
 *        schema:
 *          type: string
 *        in: formData
 *        description: event's twitch url
 *      - name: rsvp
 *        schema:
 *          type: string
 *        in: formData
 *        description: rsvps to the event
 *      - name: free_ticket_name
 *        schema:
 *          type: string
 *        in: formData
 *        description: name of the free ticket
 *      - name: free_ticket_quantity
 *        schema:
 *          type: string
 *        in: formData
 *        description: amount of free tickets requested
 *      - name: paid_ticket_name
 *        schema:
 *          type: string
 *        in: formData
 *        description: name of paid ticket
 *      - name: paid_ticket_quantity
 *        schema:
 *          type: string
 *        in: formData
 *        description: amount of paid tickets requested
 *      - name: paid_ticket_access
 *        schema:
 *          type: string
 *        in: formData
 *        description: type of access for ticket
 *      - name: paid_ticket_price
 *        schema:
 *          type: string
 *        in: formData
 *        description: Price of ticket
 *    responses:
 *      '200':
 *        description: A successful response. Event found
 *      '404':
 *         description: An unsuccessful response. Event not found
 *      '500':
 *        description: unsuccessful response. Possible error on server side
 */
router.post(
  '/api/events',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  createEvent
);

/**
 * @swagger
 * /api/events/:id:
 *  put:
 *    tags: ['Events']
 *    description: Update single event
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: Id of event that you want to update
 *    responses:
 *      '200':
 *        description: A successful response. Event updated
 *      '404':
 *         description: An unsuccessful response. Event not found
 *      '500':
 *        description: unsuccessful response. Possible error on server side
 */

router.put(
  '/api/events/:id',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  updateEvent
);

module.exports = router;
