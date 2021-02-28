const Joi = require('joi');

const mailChimpSchema = Joi.object({
  email: Joi.string().required().email(),
});

exports.validateMailChimpBody = ({body}) => mailChimpSchema.validate(body);
