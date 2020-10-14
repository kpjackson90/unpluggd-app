const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('User');
const {sendResponse} = require('./response/sendResponse');
const {UNAUTHORIZED} = require('./response/responses');
const {jwtVerify} = require('./jsonwebtoken/jwt');

exports.requireAuth = async (req, res, next) => {
  const {authorization} = req.headers;

  if (!authorization) {
    return sendResponse(req, res, UNAUTHORIZED);
  }

  try {
    const token = authorization.replace('Bearer ', '');

    let payload = await jwtVerify(token, keys.JWT_SECRET);

    const user = await User.findById(payload._id);

    req.user = user;
    req.user.token = token;
    next();
  } catch (err) {
    console.error(err.message);
    return sendResponse(req, res, UNAUTHORIZED);
  }
};
