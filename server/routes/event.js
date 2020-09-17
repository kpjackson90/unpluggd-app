const express = require('express');
const mongoose = require('mongoose');
const {requireAuth} = require('../middleware/requireAuth');
const {roleAuthorization} = require('../middleware/roleAuthorization');
const {createEvent} = require('../controllers/event');
const Event = mongoose.model('Event');

const router = express.Router();

router.get(
  '/api/events',
  requireAuth,
  roleAuthorization(['host', 'guest']),
  async (req, res) => {
    try {
      const events = await Event.find({});
      return res.status(200).send({events, success: 'OK'});
    } catch (err) {
      return res.status(400).send({error: err.message});
    }
  }
);

router.get(
  '/api/events/:id',
  requireAuth,
  roleAuthorization(['host', 'guest']),
  async (req, res) => {
    try {
      const event = await Event.findById({_id: req.params.id});
      return res.status(200).send({event, success: 'OK'});
    } catch (err) {
      return res.status(400).send({error: err.message});
    }
  }
);

router.post(
  '/api/event',
  requireAuth,
  roleAuthorization(['host', 'admin']),
  createEvent
);

router.put(
  '/api/event/:id',
  requireAuth,
  roleAuthorization(['host']),
  async (req, res) => {
    let event = await Event.findById({_id: req.params.id});

    if (!event) {
      return res.status(400).send({error: 'Event does not exist'});
    }

    try {
      event = await Event.findByIdAndUpdate(req.params.id, {
        ...(name && {name}),
        ...(date && {date}),
        ...(cover_image && {cover_image}),
        ...(occupation && {occupation}),
        ...(username && {username}),
        ...(company && {company}),
        ...(categories && {categories}),
        ...(first_name && {first_name}),
        ...(bio && {bio}),
        ...(intro_video && {intro_video}),
        ...(logo && {logo}),
        ...(residence && {residence}),
        ...(business_address && {business_address}),
        ...(color && {color}),
      });
    } catch (err) {
      return res.status(400).send({error: err.message});
    }
  }
);

module.exports = router;
