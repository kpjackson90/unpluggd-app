const Joi = require('joi');

const eventSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow('').optional(),
  date: Joi.date().required(),
  start_time: Joi.date().required(),
  end_time: Joi.date().required(),
  categories: Joi.array().max(3),
  link: Joi.string()
    .pattern(/\.(com|net|org)$/)
    .allow('')
    .optional(),
  host: Joi.string().required(),
  max_occupancy: Joi.string().required(),
  custom_url: Joi.string()
    .pattern(/\.(com|net|org)\/(.*)$/)
    .allow('')
    .optional(),
  facebook_url: Joi.string().allow('').optional(),
  twitter_url: Joi.string().allow('').optional(),
  instagram_url: Joi.string().allow('').optional(),
  youtube_url: Joi.string().allow('').optional(),
  twitch: Joi.string().allow('').optional(),
  rsvp: Joi.string().allow('').optional(),
  free_ticket_name: Joi.string().allow('').optional(),
  free_ticket_quantity: Joi.string().allow('').optional(),
  paid_ticket_name: Joi.string().allow('').optional(),
  paid_ticket_quantity: Joi.string().allow('').optional(),
  paid_ticket_access: Joi.string().allow('').optional(),
  paid_ticket_price: Joi.string().allow('').optional(),
});

exports.validateEventBody = ({body}) => eventSchema.validate(body);
