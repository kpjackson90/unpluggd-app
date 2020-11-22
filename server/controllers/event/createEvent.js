const Event = require("../../models/Event");
const Ticket = require("../../models/Ticket");
const { validateEventBody } = require("../../middleware/joi/eventBody");
const { sendResponse } = require("../../middleware/response/sendResponse");
const {
  BAD_REQUEST_BODY,
  EVENT_CREATED,
  SERVER_ERROR,
} = require("../../middleware/response/responses");

const { createFreeTicket, createPaidTicket } = require("../ticket/ticket");

exports.createEvent = async (req, res) => {
  const { error } = validateEventBody(req);

  if (error) {
    BAD_REQUEST_BODY.error = error.details[0].message;
    return sendResponse(req, res, BAD_REQUEST_BODY);
  }

  try {
    const {
      name,
      description,
      date,
      start_time,
      end_time,
      categories,
      link,
      max_occupancy,
      custom_url,
      facebook_url,
      twitter_url,
      instagram_url,
      youtube_url,
      twitch,
      rsvp,
      free_ticket_name,
      free_ticket_quantity,
      paid_ticket_name,
      paid_ticket_quantity,
      paid_ticket_access,
      paid_ticket_price,
    } = req.body;

    //define tickcet parameters
    const free_ticket = "free";
    const paid_ticket = "paid";
    let quantityRemaining = 0;
    let freeQuantityRemaining = 0;
    let paidQuantityRemaining = 0;
    let tickets = [];
    let ticketParams = {
      ticket_name: "",
      ticket_price: 0,
      ticket_quantity: 0,
      host: req.user.id,
    };

    //create new Event
    let newEvent = await Event.create({
      name,
      description,
      date,
      start_time,
      end_time,
      categories,
      link,
      host: req.user.id,
      max_occupancy,
      custom_url,
      facebook_url,
      twitter_url,
      instagram_url,
      youtube_url,
      twitch,
      rsvp,
    });

    //user creates free tickets for event
    if (free_ticket_name.trim() && !paid_ticket_name.trim()) {
      ticketParams = {
        ...ticketParams,
        ticket_name: free_ticket_name,
        ticket_quantity: free_ticket_quantity,
        event: newEvent._id,
        ticket_type: free_ticket,
      };
      const newTicket = await createFreeTicket(ticketParams);
      tickets.push(newTicket._id);

      //set quantity of tickets remaining for the event
      freeQuantityRemaining += newTicket.ticket_quantity;
      quantityRemaining += newTicket.ticket_quantity;
    }

    //user only creates paid tickets
    if (!free_ticket_name.trim() && paid_ticket_name.trim()) {
      ticketParams = {
        ...ticketParams,
        ticket_name: paid_ticket_name,
        ticket_price: paid_ticket_price,
        ticket_quantity: paid_ticket_quantity,
        ticket_type: paid_ticket,
        ticket_access: paid_ticket_access,
        event: newEvent._id,
      };
      const newTicket = await createPaidTicket(ticketParams);
      tickets.push(newTicket._id);

      //set quantity of tickets remaining for the event
      paidQuantityRemaining += newTicket.ticket_quantity;
      quantityRemaining += newTicket.ticket_quantity;
    }

    //both free and paid tickets created
    if (free_ticket_name.trim() && paid_ticket_name.trim()) {
      const freeTicketParams = {
        ...ticketParams,
        ticket_name: free_ticket_name,
        ticket_quantity: free_ticket_quantity,
        event: newEvent._id,
        ticket_type: free_ticket,
      };

      const paidTicketParams = {
        ...ticketParams,
        ticket_name: paid_ticket_name,
        ticket_price: paid_ticket_price,
        ticket_quantity: paid_ticket_quantity,
        ticket_type: paid_ticket,
        ticket_access: paid_ticket_access,
        event: newEvent._id,
      };

      const [newFreeTicket, newPaidTicket] = await Promise.all([
        await createFreeTicket(freeTicketParams),
        await createPaidTicket(paidTicketParams),
      ]);

      tickets.push(newFreeTicket._id, newPaidTicket._id);

      //set quantity of tickets remaining for the event
      freeQuantityRemaining += newFreeTicket.ticket_quantity;
      paidQuantityRemaining += newPaidTicket.ticket_quantity;
      quantityRemaining +=
        newFreeTicket.ticket_quantity + newPaidTicket.ticket_quantity;
    }

    //update event with ticket quantity
    await Event.findByIdAndUpdate(
      newEvent._id,
      {
        quantityRemaining,
        freeQuantityRemaining,
        paidQuantityRemaining,
        tickets,
      },
      { new: true }
    );

    return sendResponse(req, res, EVENT_CREATED, newEvent);
  } catch (err) {
    console.error(err);
    return sendResponse(req, res, SERVER_ERROR);
  }
};
