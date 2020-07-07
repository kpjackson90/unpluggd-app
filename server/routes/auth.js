const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../config/keys');
const User = mongoose.module('User');

const router = express.Router;

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
    const token = jwt.sign({ userId: user._id, role }, keys.JWT_SECRET, {
      expired: 10080,
    });

    res.status(201).send({ token, role, message: 'User successfully created' });
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
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});

router.get(
  '/api/user/facebook',
  passport.authenticate('facebook', { scope: ['profile', 'email'] })
);

router.get(
  '/api/user/facebook/callback',
  passport.authenticate('facebook'),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
