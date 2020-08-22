const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

// passport.serializeUser((user, done) => {
// 	done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
// 	User.findById(id).then(user => {
// 		done(null, user);
// 	});
// });

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.FACEBOOK_CLIENT,
			clientSecret: keys.FACEBOOK_SECRET,
			callbackURL: '/api/user/facebook/callback',
			profileFields: ['id', 'displayName', 'email'],
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			const role = 'user';
			const isVerified = true;

			const {id, name, email} = profile._json;

			const existingUser = await User.findOne({facebook: id});

			if (existingUser) {
				return done(null, existingUser);
			}

			const newUser = await new User({email, role, username: name, isVerified, facebook: id}).save();
			done(null, newUser);
		}
	)
);
