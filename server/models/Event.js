const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventSchema = new Schema(
  {
    name: {
      type: String,
    },
    room_id: {type: String, default: '--'},
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
      type: Date,
    },
    end_time: {
      type: Date,
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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

    quantityRemaining: {type: Number, default: 0},

    freeQuantityRemaining: {type: Number, default: 0},

    paidQuantityRemaining: {type: Number, default: 0},

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
  },
  {timestamps: true}
);

module.exports = mongoose.model('Event', EventSchema);
