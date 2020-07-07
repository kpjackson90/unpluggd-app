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
});

mongoose.model('Event', EventSchema);
