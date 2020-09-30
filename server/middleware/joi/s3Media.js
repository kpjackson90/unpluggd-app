const Joi = require('joi');

const s3Schema = Joi.object({
  media: Joi.array()
    .items({
      filename: Joi.string().pattern(/\.(jpg|jpeg|png|mp4)$/),
      contentType: Joi.string(),
    })
    .min(1),
});

exports.validateS3Media = ({body}) => s3Schema.validate(body);
