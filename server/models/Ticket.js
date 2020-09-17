const mongoose = require('mongoose');
const {Schema} = mongoose;

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
  ticket_unique_id: {
    type: String,
  },
  ticket_price: {
    type: Number,
  },
  ticket_quantity: {
    type: Number,
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

module.exports = mongoose.model('Ticket', TicketSchema);
