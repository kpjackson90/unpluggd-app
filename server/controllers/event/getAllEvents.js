const Event = require('../../models/Event');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  SERVER_ERROR,
  REQUEST_SUCCESSFUL,
  NO_CONTENT,
} = require('../../middleware/response/responses');

exports.getAllEvent = async (req, res) => {
  try {
    //TODO: Implement pagination
    const events = await Event.find({});
    if (!events) {
      sendResponse(req, res, NO_CONTENT);
    }
    return sendResponse(req, res, REQUEST_SUCCESSFUL, events);
  } catch (err) {
    return sendResponse(req, res, SERVER_ERROR);
  }
};
