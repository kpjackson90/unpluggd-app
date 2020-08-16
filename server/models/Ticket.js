const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
  ticket_name: {
    type: String,
  },
  ticket_type: {
    type: String,
    enum: ['free', 'paid'],
  },
  ticket_access: {
    type: String,
    enum: ['regular', 'vip', 'backstage'],
  },
  ticket_quantity: {
    type: Number,
    default: 0,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

mongoose.model('Ticket', TicketSchema);
