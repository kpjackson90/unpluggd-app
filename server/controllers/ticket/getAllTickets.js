const Ticket = require('../../models/Ticket');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  SERVER_ERROR,
  BAD_REQUEST_BODY,
  NO_CONTENT,
  REQUEST_SUCCESSFUL,
} = require('../../middleware/response/responses');

exports.getAllTickets = async (req, res) => {
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

    const tickets = await Ticket.find({host: req.user.id})
      .skip(skipCount)
      .limit(limit);

    if (tickets && tickets.length === 0) {
      return sendResponse(req, res, NO_CONTENT);
    }

    //get total number of tickets
    let totalTickets = await Ticket.countDocuments({
      host: req.user.id,
    });

    let ticketsRemaining = totalTickets - page * limit;

    if (ticketsRemaining < 0) {
      ticketsRemaining = 0;
    }

    const ticketData = {
      tickets,
      currentPage: page,
      ticketsRemaining,
    };
    return sendResponse(req, res, REQUEST_SUCCESSFUL, ticketData);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
