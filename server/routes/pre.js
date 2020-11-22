const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const Pre = mongoose.model("Pre");

const router = express.Router();

router.post("/api/save-email", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).send({ message: "Must include email address" });
    }

    const newUser = await Pre.create({ email });
    return res.status(200).send({ newUser, message: "New Email added" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
