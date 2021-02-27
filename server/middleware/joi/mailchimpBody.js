const Joi = require('joi');

const mailChimpSchema = Joi.object({
  email: Joi.string().required().email(),
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  address: Joi.string().allow('').optional(),
  phone: Joi.string().allow('').optional(),
  birthday: Joi.string().isoDate().optional().allow(''),
});

exports.validateMailChimpBody = ({body}) => mailChimpSchema.validate(body);
