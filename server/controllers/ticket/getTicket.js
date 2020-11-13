const Ticket = require('../../models/Ticket');
const {sendResponse} = require('../../middleware/response/sendResponse');
const {
  SERVER_ERROR,
  REQUEST_SUCCESSFUL,
  TICKET_NOT_FOUND,
} = require('../../middleware/response/responses');

exports.getTicket = async (req, res) => {
  try {
    const {id} = req.params;
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return sendResponse(req, res, TICKET_NOT_FOUND);
    }

    return sendResponse(req, res, REQUEST_SUCCESSFUL, ticket);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
