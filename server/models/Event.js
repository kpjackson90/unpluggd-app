const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
  },
  room_id: { type: String, default: '--' },
  date: {
    type: Date,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  link: {
    type: String,
  },
  max_occupancy: {
    type: Number,
  },
  categories: [
    {
      type: String,
    },
  ],
  rsvp: {
    type: Number,
  },
  images: [
    {
      type: String,
    },
  ],
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ticket',
    },
  ],
  isPrevious: {
    type: Boolean,
    default: true,
  },
  custom_url: {
    type: String,
  },
  facebook_url: {
    type: String,
  },
  twitter_url: {
    type: String,
  },
  instagram_url: {
    type: String,
  },
  youtube_url: {
    type: String,
  },
  twitch: {
    type: String,
  },
});

mongoose.model('Event', EventSchema);
