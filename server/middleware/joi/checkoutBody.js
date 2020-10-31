const Joi = require('joi');

const stripeCheckoutSchema = Joi.object({
  amount: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  eventId: Joi.string().required(),
  paidQauntity: Joi.string().allow('').optional(),
  freeQuantity: Joi.string().allow('').optional(),
});

exports.validateCheckoutBody = ({body}) => stripeCheckoutSchema.validate(body);
