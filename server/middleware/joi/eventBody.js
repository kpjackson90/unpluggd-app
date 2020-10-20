const Joi = require('joi');

const eventSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  date: Joi.date().required(),
  start_time: Joi.date().required(),
  end_time: Joi.date().required(),
  categories: Joi.array().max(3),
  link: Joi.string().pattern(/\.(com|net|org)$/),
  host: Joi.string().required(),
  max_occupancy: Joi.number().required(),
  custom_url: Joi.string().pattern(/\.(com|net|org)\/(.*)$/),
  facebook_url: Joi.string(),
  twitter_url: Joi.string(),
  instagram_url: Joi.string(),
  youtube_url: Joi.string(),
  twitch: Joi.string(),
  rsvp: Joi.number(),
  free_ticket_name: Joi.string(),
  free_ticket_quantity: Joi.number(),
  paid_ticket_name: Joi.string(),
  paid_ticket_quantity: Joi.number(),
  paid_ticket_access: Joi.string(),
  paid_ticket_price: Joi.number(),
});

exports.validateEventBody = ({body}) => eventSchema.validate(body);
