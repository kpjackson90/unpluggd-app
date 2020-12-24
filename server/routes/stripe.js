const router = require('express').Router();
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');

const {createStripePayment} = require('../controllers/stripe/createPayment');

router.post(
  '/api/create/payment',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  createStripePayment
);

module.exports = router;
