const router = require('express').Router();
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');

const {createStripePayment} = require('../controllers/stripe/createPayment');

router.post(
  '/api/create/payment',
  requireAuth,
  roleAuthorization(['guest', 'attendee']),
  createStripePayment
);

module.exports = router;
