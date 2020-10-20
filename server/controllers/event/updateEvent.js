const Event = require('../../models/Event');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  EVENT_NOT_FOUND,
  EVENT_UPDATED,
  SERVER_ERROR,
} = require('../../middleware/response/responses');

exports.updateEvent = async (req, res) => {
  try {
    let event = await Event.findById({_id: req.params.id});
    if (!event) {
      return sendResponse(req, res, EVENT_NOT_FOUND);
    }

    await Event.findByIdAndUpdate(req.params.id, {
      ...(name && {name}),
      ...(date && {date}),
      ...(cover_image && {cover_image}),
      ...(occupation && {occupation}),
      ...(username && {username}),
      ...(company && {company}),
      ...(categories && {categories}),
      ...(first_name && {first_name}),
      ...(bio && {bio}),
      ...(intro_video && {intro_video}),
      ...(logo && {logo}),
      ...(residence && {residence}),
      ...(business_address && {business_address}),
      ...(color && {color}),
    });

    return sendResponse(req, res, EVENT_UPDATED);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
