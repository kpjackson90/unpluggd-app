const Event = require('../../models/Event');
const {createPaymentIntent} = require('../../services/stripe');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {validateCheckoutBody} = require('../../middleware/joi/checkoutBody');
const {
  BAD_REQUEST_BODY,
  SERVER_ERROR,
  REQUEST_SUCCESSFUL,
  EVENT_NOT_FOUND,
  UNAUTHORIZED,
} = require('../../middleware/response/responses');

exports.createStripePayment = async (req, res) => {
  if (!req.user.stripe) {
    UNAUTHORIZED.message = 'Need to be a verified user to make payments';
    return sendResponse(req, res, UNAUTHORIZED);
  }

  const {error} = validateCheckoutBody(req);

  if (error) {
    BAD_REQUEST_BODY.error = error.details[0].message;
    return sendResponse(req, res, BAD_REQUEST_BODY);
  }

  const {
    amount,
    paidQauntity,
    freeQuantity,
    firstName,
    lastName,
    email,
    eventId,
  } = req.body;

  let payableAmount = parseFloat(amount, 10) * 100;
  let freeAmount;
  let paidAmount;

  //amount must be atleast $0.50 usd
  //TODO: Put stripe constant in config so it can be easily changed
  if (payableAmount < 50) {
    BAD_REQUEST_BODY.message = 'Amount must be at least $0.50 usd';
    return sendResponse(req, res, BAD_REQUEST_BODY);
  }

  try {
    //search for event
    const existingEvent = await Event.findById(eventId);

    if (!existingEvent) {
      return sendResponse(req, res, EVENT_NOT_FOUND);
    }

    //checkout for free tickets only
    if (freeQuantity.trim() && !paidQauntity.trim()) {
      freeAmount = parseInt(freeQuantity, 10);
      if (freeAmount > existingEvent.freeQuantityRemaining) {
        BAD_REQUEST_BODY.message =
          'The quantity of free tickets requested is greater than what we have available';
        return sendResponse(req, res, BAD_REQUEST_BODY);
      }

      existingEvent.freeQuantityRemaining -= freeAmount;
      existingEvent.quantityRemaining =
        existingEvent.freeQuantityRemaining +
        existingEvent.paidQuantityRemaining;
    }

    //checkout for paid tickets only
    if (!freeQuantity.trim() && paidQauntity.trim()) {
      paidAmount = parseInt(paidQauntity, 10);
      if (paidAmount > existingEvent.paidQuantityRemaining) {
        BAD_REQUEST_BODY.message =
          'The quantity of paid tickets requested is greater than what we have available';

        return sendResponse(req, res, BAD_REQUEST_BODY);
      }

      existingEvent.paidQuantityRemaining -= paidAmount;
      existingEvent.quantityRemaining =
        existingEvent.freeQuantityRemaining +
        existingEvent.paidQuantityRemaining;
    }

    //checkout for both types
    if (freeQuantity.trim() && paidQauntity.trim()) {
      freeAmount = parseInt(freeQuantity, 10);
      paidAmount = parseInt(paidQauntity, 10);

      if (
        freeAmount > existingEvent.freeQuantityRemaining ||
        paidAmount > existingEvent.paidQuantityRemaining
      ) {
        BAD_REQUEST_BODY.message =
          'The quantity of tickets requested is greater than what we have available';

        return sendResponse(req, res, BAD_REQUEST_BODY);
      }

      existingEvent.freeQuantityRemaining -= freeAmount;
      existingEvent.paidQuantityRemaining -= paidAmount;

      existingEvent.quantityRemaining =
        existingEvent.freeQuantityRemaining +
        existingEvent.paidQuantityRemaining;
    }

    //update event with new totals
    await existingEvent.save();

    const stripeParams = {
      customer: req.user.stripe,
      receipt_email: req.user.email,
      amount: payableAmount,
      currency: 'usd', //TODO: this value should not be hardcoded,
    };

    const paymentIntent = await createPaymentIntent(stripeParams);
    let responseData = {
      client_secret: paymentIntent.client_secret,
    };
    REQUEST_SUCCESSFUL.message = 'PaymentIntent successfully created';

    return sendResponse(req, res, REQUEST_SUCCESSFUL, responseData);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
