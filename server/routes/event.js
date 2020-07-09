const express = require('express');
const mongoose = require('mongoose');
const { requireAuth } = require('../middleware/requireAuth');
const { roleAuthorization } = require('../middleware/roleAuthorization');
const Event = mongoose.module('Event');

const router = express.Router();

router.get('/api/events', requireAuth, roleAuthorization, async (req, res) => {
  try {
    const events = await Event.find({});
    return res.status(200).send({ events, success: 'OK' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

router.get(
  '/api/events/:id',
  requireAuth,
  roleAuthorization,
  async (req, res) => {
    try {
      const event = await Event.findById({ _id: req.params.id });
      return res.status(200).send({ event, success: 'OK' });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
);

router.post('/api/event', requireAuth, roleAuthorization, async (req, res) => {
  const {
    name,
    date,
    price,
    description,
    start_time,
    end_time,
    host,
    link,
    max_occupancy,
    picture,
    rsvp,
  } = req.body;

  try {
    const event = new Event({
      name,
      date,
      price,
      description,
      start_time,
      end_time,
      host,
      link,
      max_occupancy,
      picture,
      rsvp,
    });

    await event.save();

    return res.status(200).send({ event, success: 'OK' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
