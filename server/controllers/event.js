const multer = require('multer');
const Event = require('../models/Event');
const Ticket = require('../models/Ticket');

const upload = multer().fields([
  {name: 'images', maxCount: 3},
  {name: 'video', maxCount: 1},
]);

const {createFreeTicket, createPaidTicket} = require('../controllers/ticket');

exports.createEvent = async (req, res) => {
  upload(req, res, async err => {
    //error with files submitted
    if (err instanceof multer.MulterError) {
      return res.status(400).json({error: 'error with file(s) submitted'});
    }

    if (!req.user) {
      return res.status(401).json({error: 'UnAuthorized'});
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
        host, //to change to req.user.id
        max_occupancy,
        event_media,
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

      let quantityRemaining = 0;
      let ticketParams = {
        ticket_name: '',
        ticket_price: 0,
        ticket_quantity: 0,
        ticket_type: 'free',
      };

      //create new Event
      let newEvent = await Event.create({
        name,
        description,
        date,
        start_time,
        end_time,
        categories: categories.split(','),
        link,
        host,
        max_occupancy,
        event_media,
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
          host, //to change to req.user.id
        };

        const newTicket = await createFreeTicket(ticketParams);

        //set quantity of tickets remaining for the event
        quantityRemaining += newTicket.ticket_quantity;
      }

      //user only creates paid tickets
      if (!free_ticket_name.trim() && paid_ticket_name.trim()) {
        ticketParams = {
          ...ticketParams,
          ticket_name: paid_ticket_name,
          ticket_price: paid_ticket_price,
          ticket_quantity: paid_ticket_quantity,
          ticket_type: 'paid', //find way not to hardcode value here
          ticket_access: paid_ticket_access,
          event: newEvent._id,
          host, //to change to req.user.id
        };
        const newTicket = await createPaidTicket(ticketParams);

        //set quantity of tickets remaining for the event
        quantityRemaining += newTicket.ticket_quantity;
      }

      //both free and paid tickets created
      if (free_ticket_name.trim() && paid_ticket_name.trim()) {
        const freeTicketParams = {
          ...ticketParams,
          ticket_name: free_ticket_name,
          ticket_quantity: free_ticket_quantity,
          event: newEvent._id,
          host, //to change to req.user.id
        };

        const paidTicketParams = {
          ...ticketParams,
          ticket_name: paid_ticket_name,
          ticket_price: paid_ticket_price,
          ticket_quantity: paid_ticket_quantity,
          ticket_type: 'paid', //find way not to hardcode value here
          ticket_access: paid_ticket_access,
          event: newEvent._id,
          host, //to change to req.user.id
        };

        const [newFreeTicket, newPaidTicket] = await Promise.all([
          await createFreeTicket(freeTicketParams),
          await createPaidTicket(paidTicketParams),
        ]);

        //set quantity of tickets remaining for the event
        quantityRemaining +=
          newFreeTicket.ticket_quantity + newPaidTicket.ticket_quantity;
      }

      //update event with ticket quantity
      await Event.findByIdAndUpdate(
        newEvent._id,
        {quantityRemaining},
        {new: true, useFindAndModify: false}
      );

      return res.status(201).json({message: 'Event successfully created'});
    } catch (err) {
      console.error(err);
      return res.status(400).json({error: err.message});
    }
  });
};
