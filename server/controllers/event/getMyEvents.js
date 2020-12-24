const Event = require('../../models/Event');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  SERVER_ERROR,
  REQUEST_SUCCESSFUL,
  NO_CONTENT,
  BAD_REQUEST_BODY,
} = require('../../middleware/response/responses');

exports.getMyEvents = async (req, res) => {
  if (!req.query.page_number || !req.query.page_size) {
    BAD_REQUEST_BODY.message =
      'This route is paginated. Please provide a page number and limit';
    return sendResponse(req, res, BAD_REQUEST_BODY);
  }

  try {
    const {page_number, page_size} = req.query;

    let page = parseInt(page_number, 10);
    let limit = parseInt(page_size, 10);

    let skipCount = (page - 1) * limit;

    const events = await Event.find({host: req.user._id})
      .skip(skipCount)
      .limit(limit);

    if (events && events.length === 0) {
      return sendResponse(req, res, NO_CONTENT);
    }

    //get total number of events
    let totalEvents = await Event.countDocuments({});

    let eventsRemaining = totalEvents - page * limit;

    if (eventsRemaining < 0) {
      eventsRemaining = 0;
    }

    const eventData = {
      events,
      currentPage: page,
      eventsRemaining,
    };
    return sendResponse(req, res, REQUEST_SUCCESSFUL, eventData);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
