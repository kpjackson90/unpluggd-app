const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  link: {
    type: String,
  },
  maxOccupancy: {
    type: Number,
  },
  rsvp: {
    type: Number,
  },
  picture: {
    type: String,
  },
});

mongoose.model('Event', EventSchema);
