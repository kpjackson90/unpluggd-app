const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('User');

exports.requireAuth = (req, res, next) => {
	const {authorization} = req.headers;

	if (!authorization) {
		return res.status(401).send({error: 'You must be logged in.'});
	}

	const token = authorization.replace('Bearer ', '');
	jwt.verify(token, keys.JWT_SECRET, async (err, payload) => {
		if (err) {
			return res.status(401).send({error: 'You must be logged in.'});
		}

		const user = await User.findById(payload.userId);
		req.user = user;
		next();
	});
};
