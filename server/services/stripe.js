const stripe = require('stripe')('');

exports.createCustomer = async ({email}) => {
  try {
    let newCustomer = await stripe.customers.create({
      email,
    });

    return newCustomer;
  } catch (err) {
    throw err;
  }
};

exports.createPaymentIntent = async ({
  customer,
  receipt_email,
  amount,
  currency,
}) => {
  try {
    let paymentIntent = await stripe.paymentIntents.create({
      customer,
      receipt_email,
      amount,
      currency,
    });

    return paymentIntent;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//NOTE: May have to do a refund function
