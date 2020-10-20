const mongoose = require('mongoose');
const Ticket = require('../../models/Ticket');

exports.createFreeTicket = async ({
  ticket_name,
  ticket_price,
  ticket_quantity,
  ticket_type,
  event,
  host,
}) => {
  try {
    let newTicket = await Ticket.create({
      ticket_name,
      ticket_quantity,
      ticket_price,
      ticket_type,
      event,
      host,
    });

    return newTicket;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to create free ticket.');
  }
};

exports.createPaidTicket = async ({
  ticket_name,
  ticket_price,
  ticket_quantity,
  ticket_type,
  ticket_access,
  event,
  host,
}) => {
  try {
    let newTicket = await Ticket.create({
      ticket_name,
      ticket_price,
      ticket_quantity,
      ticket_type,
      ticket_access,
      event,
      host,
    });

    return newTicket;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to create free ticket.');
  }
};
