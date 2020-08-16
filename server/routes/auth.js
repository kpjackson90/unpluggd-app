const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const util = require('util');
const keys = require('../config/keys');
const User = mongoose.model('User');
const { sendEmail } = require('../services/mailer');
require('../services/passport');

const { requireAuth } = require('../middleware/requireAuth');
const { roleAuthorization } = require('../middleware/roleAuthorization');
const { setUserInfo } = require('../middleware/setUserInfo');

const router = express.Router();

router.post('/api/user/signup', async (req, res) => {
  const { email, password, role } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    return res.status(400).send({ error: 'User already exists' });
  }

  if (!email) {
    return res.status(400).send({ error: 'Missing email' });
  }

  if (!password) {
    return res.status(400).send({ error: 'Missing password' });
  }

  try {
    const user = new User({ email, password, role });

    await user.save();

    const userInfo = setUserInfo(user);
    const token = await jwt.sign(userInfo, keys.JWT_SECRET, {
      expiresIn: 10080,
    });

    const emailBody = {
      recipient: email,
      sender: 'kareem@pjacksonassociates.com',
      subject: 'Email Verification',
      text: 'Please verify email address',
      htmlText: `<a href="http://localhost:3000/user/verify?token=${token}">Verify Email Address - ${email}</a>`,
    };

    sendEmail(emailBody);

    res.status(201).send({ token, role, message: 'User successfully created' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

router.post('/api/user/verify', async (req, res) => {
  const { id, token } = req.body;

  try {
    await verifyToken(token);

    await User.updateOne({ _id: id }, { $set: { isVerified: true } });

    return res
      .status(200)
      .send({ token, message: 'Email successfully verified' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

router.post('/api/user/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: 'Must provide email and password' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({
      error:
        'Email not found, please create an account or verify your email address',
    });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      keys.JWT_SECRET,
      {
        expiresIn: 10080,
      }
    );
    return res.status(200).send({ token, success: 'OK' });
  } catch (err) {
    return res.status(400).send({ error: 'Invalid password or email' });
  }
});


router.get('/api/user/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/api/user/facebook/callback', passport.authenticate('facebook'), (req, res) => {
	res.redirect('/');
});


// router.get('/api/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

router.put(
  '/api/user/update-profile',
  requireAuth,
  roleAuthorization(['user']),
  async (req, res) => {
    let user = await User.findById({ _id: req.user._id, isVerified: true });

    if (!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    const {
      user_role,
      profile_image,
      cover_image,
      username,
      first_name,
      last_name,
      residence,
      occupation,
      bio,
      company_name,
      company_url,
      intro_video,
      company_bio,
      categories,
      isAdultContent,
      facebook_url,
      twitter_url,
      instagram_url,
      youtube_url,
      twitch,
    } = req.body;

    try {
      user = await User.findByIdAndUpdate(req.user._id, {
        ...(user_role && { user_role }),
        ...(profile_image && { profile_image }),
        ...(cover_image && { cover_image }),
        ...(occupation && { occupation }),
        ...(username && { username }),
        ...(bio && { bio }),
        ...(categories && { categories }),
        ...(first_name && { first_name }),
        ...(last_name && { last_name }),
        ...(company_name && { company_name }),
        ...(company_url && { company_url }),
        ...(company_bio && { company_bio }),
        ...(intro_video && { intro_video }),
        ...(isAdultContent && { isAdultContent }),
        ...(residence && { residence }),
        ...(facebook_url && { facebook_url }),
        ...(twitter_url && { twitter_url }),
        ...(instagram_url && { instagram_url }),
        ...(youtube_url && { youtube_url }),
        ...(twitch && { twitch }),
      });

      return res.status(200).send({ user, success: 'OK' });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
);

module.exports = router;
