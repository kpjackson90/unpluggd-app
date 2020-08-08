const mongoose = require('mongoose');
const {Schema} = mongoose;

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
	rsvp: {
		type: Number,
	},
	picture: {
		type: String,
	},
});

mongoose.model('Event', EventSchema);
