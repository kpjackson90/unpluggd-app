const Event = require('../../models/Event');

const {
  EVENT_NOT_FOUND,
  REQUEST_SUCCESSFUL,
  SERVER_ERROR,
} = require('../../middleware/response/responses');

const {sendResponse} = require('../../middleware/response/sendResponse');

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById({_id: req.params.id});

    if (!event) {
      return sendResponse(req, res, EVENT_NOT_FOUND);
    }

    return sendResponse(req, res, REQUEST_SUCCESSFUL, event);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
