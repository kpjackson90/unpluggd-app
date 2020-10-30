const {createPaymentIntent} = require('../../services/stripe');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  BAD_REQUEST_BODY,
  SERVER_ERROR,
  REQUEST_SUCCESSFUL,
} = require('../../middleware/response/responses');

exports.createStripePayment = async (req, res) => {
  const {amount} = req.body;
  let payableAmount = amount * 100;

  //amount must be atleast $0.50 usd
  //TODO: Put stripe constant in config so it can be easily changed
  if (payableAmount < 50) {
    BAD_REQUEST_BODY.message = 'Amount must be at least $0.50 usd';
    return sendResponse(req, res, BAD_REQUEST_BODY);
  }

  try {
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
